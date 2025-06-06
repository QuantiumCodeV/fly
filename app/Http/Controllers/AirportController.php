<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TravelpayoutsService;
use Illuminate\Support\Facades\Cache;


class AirportController extends Controller
{

    protected $travelpayouts;

    public function __construct(TravelpayoutsService $travelpayouts)
    {
        $this->travelpayouts = $travelpayouts;
    }

    public function nearest(Request $request)
    {
        // Получаем IP
        $ip = $request->ip();
        if ($ip === '127.0.0.1' || $ip === '::1') {
            $ip = '95.31.18.119'; // Тестовый IP
        }

        // Получаем город пользователя по IP
        $geoData = json_decode(file_get_contents("http://ip-api.com/json/{$ip}"), true);
        $userCity = $geoData['city'];
        $userCountry = $geoData['country'];
        //$continentCode = $geoData['continentCode'];

        // Получаем все города из Travelpayouts (кэшируем на сутки)
        $cities = Cache::remember('travelpayouts_cities', 86400, function () {
            $citiesJson = file_get_contents('http://api.travelpayouts.com/data/en/cities.json');
            return json_decode($citiesJson, true);
        });

        // Ищем город пользователя в списке
        $foundCity = null;
        $continent = null;
        foreach ($cities as $city) {
            if (strcasecmp($city['name'], $userCity) === 0) {
                $foundCity = $city;
                $continent = explode('/', $city['time_zone'])[0];
                break;
            }
        }

        // Если не нашли точное совпадение, ищем аэропорты
        if (!$foundCity) {
            $airports = Cache::remember('travelpayouts_airports', 86400, function () {
                $airportsJson = file_get_contents('http://api.travelpayouts.com/data/en/airports.json');
                return json_decode($airportsJson, true);
            });

            foreach ($airports as $airport) {
                if (strcasecmp($airport['city'], $userCity) === 0) {
                    $foundCity = [
                        'code' => $airport['city_code'] ?? $airport['code'],
                        'name' => $airport['city']
                    ];
                    break;
                }
            }
        }

        // Маппинг континентов
        $continents = [
            'Asia' => 'AS',
            'Europe' => 'EU',
            'Africa' => 'AF',
            'North America' => 'NA',
            'South America' => 'SA',
            'Oceania' => 'OC',
            'Antarctica' => 'AN'
        ];

        return response()->json([
            'iata_code' => $foundCity['code'] ?? null,
            'city_code' => $foundCity['code'] ?? null,
            'name' => $userCity,
            'city' => $userCity,
            'country' => $userCountry,
            'continent_name' => $continents[$continent]
        ]);
    }

    public function search(Request $request)
    {
        
        $query = $request->input('q');
        if (strlen($query) < 2) {
            return response()->json([]);
        }

        // Используем встроенный автокомплит Travelpayouts - он уже оптимизирован
        $results = $this->travelpayouts->autocomplete($query);
    
        return response()->json($results);
    }

    public function pair(Request $request)
    {
        $request->validate([
            'from' => 'required|string|size:3',
            'to' => 'required|string|size:3',
        ]);

        $from = $request->input('from');
        $to = $request->input('to');

        $airports = $this->travelpayouts->getAllAirports();

        $fromAirport = null;
        $toAirport = null;

        foreach ($airports as $airport) {
            if ($airport['code'] === $from) {
                $fromAirport = $airport;
            }
            if ($airport['code'] === $to) {
                $toAirport = $airport;
            }
        }

        return response()->json([
            'from' => $fromAirport,
            'to' => $toAirport
        ]);
    }
}
