<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TravelpayoutsService;
use Illuminate\Support\Facades\Log;

class FlightController extends Controller
{

    protected $travelpayouts;

    public function __construct(TravelpayoutsService $travelpayouts)
    {
        $this->travelpayouts = $travelpayouts;
    }


    public function search(Request $request)
    {
        $request->validate([
            'from' => 'required|string|size:3',
            'to' => 'required|string|size:3',
            'date' => 'nullable|date|after_or_equal:today',
            'return_date' => 'nullable|date|after:date',
            'trip_type' => 'nullable|string|in:one_way,round_trip'
        ]);

        $from = strtoupper($request->input('from'));
        $to = strtoupper($request->input('to'));
        $departDate = $request->input('date', now()->format('Y-m-d'));
        $returnDate = $request->input('return_date');
        $tripType = $request->input('trip_type', 'one_way');

        // Получаем цены для всех классов обслуживания
        $cheapestPrices = $this->travelpayouts->getCheapestTickets($from, $to, $departDate, $returnDate);
        Log::info('Cheapest prices response:', ['prices' => $cheapestPrices]);
        
        // Если нет данных в cheapest, пробуем calendar API
        if (empty($cheapestPrices)) {
            $calendarPrices = $this->travelpayouts->getPriceCalendar($from, $to, $departDate);
            Log::info('Calendar prices response:', ['prices' => $calendarPrices]);


            if (empty($calendarPrices)) {
                return response()->json([
                    'success' => false,
                    'data' => null,
                    'error' => 'No flights found for the selected route and dates',
                    'meta' => [
                        'search_params' => [
                            'from' => $from,
                            'to' => $to,
                            'trip_type' => $tripType,
                            'depart_date' => $departDate,
                            'return_date' => $returnDate
                        ]
                    ]
                ], 404);
            }
        }

        // Получаем минимальную цену из результатов
        $minPrice = $this->extractMinPrice($cheapestPrices ?? $calendarPrices);

        // Генерируем цены для разных классов на основе минимальной цены эконома
        $cabinPrices = $this->generateCabinPrices($minPrice);

        // Если это round_trip и есть обратная дата, удваиваем цены
        if ($tripType === 'round_trip' && $returnDate) {
            foreach ($cabinPrices as $cabin => $price) {
                $cabinPrices[$cabin] = $price * 2;
            }
        }

        return response()->json([
            'success' => true,
            'data' => $cabinPrices,
            'meta' => [
                'currency' => 'USD',
                'expires_at' => now()->addMinutes(15)->toIso8601String(),
                'search_id' => uniqid('search_'),
                'search_params' => [
                    'from' => $from,
                    'to' => $to,
                    'trip_type' => $tripType,
                    'depart_date' => $departDate,
                    'return_date' => $returnDate
                ]
            ]
        ]);
    }

    /**
     * Извлечь минимальную цену из результатов API
     */
    private function extractMinPrice($apiData)
    {
        if (empty($apiData)) {
            return null;
        }

        $minPrice = PHP_FLOAT_MAX;

        // Обходим все данные рекурсивно для поиска цен
        array_walk_recursive($apiData, function ($value, $key) use (&$minPrice) {
            if ($key === 'price' && is_numeric($value) && $value > 0) {
                $minPrice = min($minPrice, $value);
            }
        });

        // Альтернативный способ для структуры Travelpayouts
        if (is_array($apiData)) {
            foreach ($apiData as $destination => $flights) {
                if (is_array($flights)) {
                    foreach ($flights as $flight) {
                        if (isset($flight['price']) && $flight['price'] < $minPrice) {
                            $minPrice = $flight['price'];
                        }
                    }
                } elseif (isset($flights['price']) && $flights['price'] < $minPrice) {
                    $minPrice = $flights['price'];
                }
            }
        }

        return $minPrice === PHP_FLOAT_MAX ? null : $minPrice;
    }

    /**
     * Генерировать цены для разных классов обслуживания
     */
    private function generateCabinPrices($economyPrice)
    {
        // Если нет реальной цены, генерируем базовую
        if (!$economyPrice) {
            $economyPrice = rand(300, 600);
        }

        // Коэффициенты для разных классов (примерные)
        return [
            'economy' => round($economyPrice, 2),
            'premium_economy' => round($economyPrice * 1.7, 2),
            'business' => round($economyPrice * 3.2, 2),
            'first' => round($economyPrice * 5.5, 2)
        ];
    }

    /**
     * Альтернативный метод с детальной информацией о рейсах
     */
    public function searchDetailed(Request $request)
    {
        $request->validate([
            'from' => 'required|string|size:3',
            'to' => 'required|string|size:3',
            'depart_date' => 'required|date|after_or_equal:today',
            'return_date' => 'nullable|date|after:depart_date',
            'trip_type' => 'required|string|in:one_way,round_trip',
            'adults' => 'nullable|integer|min:1|max:9',
            'children' => 'nullable|integer|min:0|max:9',
            'infants' => 'nullable|integer|min:0|max:9',
            'cabin_class' => 'nullable|string|in:economy,premium_economy,business,first'
        ]);

        $from = strtoupper($request->input('from'));
        $to = strtoupper($request->input('to'));
        $departDate = $request->input('depart_date');
        $returnDate = $request->input('return_date');
        $tripType = $request->input('trip_type');

        // Получаем информацию о городах/аэропортах
        $fromCity = $this->travelpayouts->findByIataCode($from);
        $toCity = $this->travelpayouts->findByIataCode($to);

        // Получаем прямые рейсы
        $outboundFlights = $this->travelpayouts->getDirectFlights($from, $to, $departDate);

        if (empty($outboundFlights)) {
            return response()->json([
                'success' => false,
                'data' => null,
                'error' => 'No flights found for the selected route',
                'meta' => [
                    'search_params' => $request->only(['from', 'to', 'depart_date', 'return_date', 'trip_type'])
                ]
            ], 404);
        }

        // Берем первый найденный рейс
        $firstOutbound = reset($outboundFlights);

        // Генерируем цены для всех классов
        $outboundPrices = $this->generateCabinPrices($firstOutbound['price'] ?? 500);

        $response = [
            'success' => true,
            'data' => [
                'outbound' => [
                    'flight_number' => $firstOutbound['airline'] . $firstOutbound['flight_number'] ?? 'SU123',
                    'from' => [
                        'iata_code' => $from,
                        'city' => $fromCity['city'] ?? $from,
                        'airport' => $fromCity['name'] ?? $from
                    ],
                    'to' => [
                        'iata_code' => $to,
                        'city' => $toCity['city'] ?? $to,
                        'airport' => $toCity['name'] ?? $to
                    ],
                    'departure_at' => $firstOutbound['departure_at'] ?? $departDate . 'T10:00:00Z',
                    'arrival_at' => $firstOutbound['return_at'] ?? $departDate . 'T14:00:00Z',
                    'duration' => $firstOutbound['duration'] ?? 240,
                    'prices' => $outboundPrices
                ]
            ],
            'meta' => [
                'search_params' => [
                    'from' => $from,
                    'to' => $to,
                    'trip_type' => $tripType,
                    'depart_date' => $departDate,
                    'return_date' => $returnDate,
                    'cabin_class' => $request->input('cabin_class', 'economy'),
                    'adults' => $request->input('adults', 1),
                    'children' => $request->input('children', 0),
                    'infants' => $request->input('infants', 0)
                ],
                'currency' => 'USD',
                'expires_in' => 900000, // 15 минут
                'search_id' => uniqid('search_')
            ]
        ];

        // Если round_trip, добавляем обратный рейс
        if ($tripType === 'round_trip' && $returnDate) {
            $returnFlights = $this->travelpayouts->getDirectFlights($to, $from, $returnDate);

            if (!empty($returnFlights)) {
                $firstReturn = reset($returnFlights);
                $returnPrices = $this->generateCabinPrices($firstReturn['price'] ?? 500);

                $response['data']['return'] = [
                    'flight_number' => $firstReturn['airline'] . $firstReturn['flight_number'] ?? 'SU124',
                    'from' => [
                        'iata_code' => $to,
                        'city' => $toCity['city'] ?? $to,
                        'airport' => $toCity['name'] ?? $to
                    ],
                    'to' => [
                        'iata_code' => $from,
                        'city' => $fromCity['city'] ?? $from,
                        'airport' => $fromCity['name'] ?? $from
                    ],
                    'departure_at' => $firstReturn['departure_at'] ?? $returnDate . 'T10:00:00Z',
                    'arrival_at' => $firstReturn['return_at'] ?? $returnDate . 'T14:00:00Z',
                    'duration' => $firstReturn['duration'] ?? 240,
                    'prices' => $returnPrices
                ];

                // Добавляем общие цены
                $response['data']['total_prices'] = [
                    'economy' => round($outboundPrices['economy'] + $returnPrices['economy'], 2),
                    'premium_economy' => round($outboundPrices['premium_economy'] + $returnPrices['premium_economy'], 2),
                    'business' => round($outboundPrices['business'] + $returnPrices['business'], 2),
                    'first' => round($outboundPrices['first'] + $returnPrices['first'], 2)
                ];
            }
        }

        return response()->json($response);
    }
}
