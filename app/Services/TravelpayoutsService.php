<?php

// app/Services/TravelpayoutsService.php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class TravelpayoutsService
{
    protected $client;
    protected $token;
    protected $marker;
    protected $baseUrl = 'https://api.travelpayouts.com';
    protected $dataUrl = 'http://api.travelpayouts.com/data';

    public function __construct()
    {
        $this->client = new Client([
            'timeout' => 30,
            'verify' => false
        ]);

        $this->token = config('services.travelpayouts.token');
        $this->marker = config('services.travelpayouts.marker');
    }

    /**
     * ПОИСК ДЕШЕВЫХ БИЛЕТОВ
     */
    public function getCheapestTickets($origin, $destination, $departDate = null, $returnDate = null, $currency = 'USD')
    {
        return $this->makeRequest('/v1/prices/cheap', [
            'origin' => $origin,
            'destination' => $destination,
            'depart_date' => $departDate,
            'return_date' => $returnDate,
            'currency' => $currency
        ]);
    }

    /**
     * КАЛЕНДАРЬ ЦЕН
     */
    public function getPriceCalendar($origin, $destination, $departDate = null, $currency = 'USD')
    {
        return $this->makeRequest('/v1/prices/calendar', [
            'origin' => $origin,
            'destination' => $destination,
            'depart_date' => $departDate,
            'calendar_type' => 'departure_date',
            'currency' => $currency
        ]);
    }

    /**
     * ПРЯМЫЕ РЕЙСЫ
     */
    public function getDirectFlights($origin, $destination, $departDate = null, $returnDate = null)
    {
        return $this->makeRequest('/v1/prices/direct', [
            'origin' => $origin,
            'destination' => $destination,
            'depart_date' => $departDate,
            'return_date' => $returnDate
        ]);
    }

    /**
     * ПОСЛЕДНИЕ ЦЕНЫ (48 часов)
     */
    public function getLatestPrices($origin = null, $destination = null, $limit = 30, $currency = 'USD')
    {
        return $this->makeRequest('/v2/prices/latest', [
            'origin' => $origin,
            'destination' => $destination,
            'limit' => $limit,
            'currency' => $currency,
            'period_type' => 'year',
            'page' => 1,
            'sorting' => 'price'
        ]);
    }

    /**
     * ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ
     */
    public function getPopularDestinations($origin, $currency = 'USD')
    {
        $cacheKey = "popular_destinations_{$origin}_{$currency}";

        return Cache::remember($cacheKey, 3600, function () use ($origin, $currency) {
            return $this->makeRequest('/v1/city-directions', [
                'origin' => $origin,
                'currency' => $currency
            ]);
        });
    }

    /**
     * МАТРИЦА ЦЕН НА МЕСЯЦ
     */
    public function getMonthMatrix($origin, $destination, $month = null, $currency = 'USD')
    {
        if (!$month) {
            $month = Carbon::now()->format('Y-m-01');
        }

        return $this->makeRequest('/v2/prices/month-matrix', [
            'origin' => $origin,
            'destination' => $destination,
            'month' => $month,
            'currency' => $currency
        ]);
    }

    /**
     * МИНИМАЛЬНЫЕ ЦЕНЫ ДЛЯ КАРТЫ
     */
    public function getMapPrices($origin, $currency = 'USD')
    {
        return Cache::remember("map_prices_{$origin}_{$currency}", 7200, function () use ($origin, $currency) {
            return $this->makeRequest('/v1/prices/cheap', [
                'origin' => $origin,
                'currency' => $currency
            ]);
        });
    }

    /**
     * СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ АВИАКОМПАНИЙ
     */
    public function getSpecialOffers()
    {
        return Cache::remember('special_offers', 3600, function () {
            return $this->makeRequest('/v2/prices/special-offers');
        });
    }

    /**
     * СТАТИСТИКА ЦЕН ПО МАРШРУТУ
     */
    public function getRoutePriceStats($origin, $destination)
    {
        $latest = $this->getLatestPrices($origin, $destination, 100);

        if (!$latest || !isset($latest['data'])) {
            return null;
        }

        $prices = array_column($latest['data'], 'value');

        return [
            'min' => min($prices),
            'max' => max($prices),
            'avg' => round(array_sum($prices) / count($prices)),
            'median' => $this->calculateMedian($prices),
            'count' => count($prices)
        ];
    }

    /**
     * ПОЛУЧИТЬ ГОРОД ПО IP
     */
    public function getCityByIp($ip = null)
    {
        if (!$ip) {
            $ip = request()->ip();
        }

        if ($ip === '127.0.0.1' || $ip === '::1') {
            $ip = '95.31.18.119'; // Тестовый IP
        }

        try {
            $response = $this->client->get("http://ip-api.com/json/{$ip}");
            $geoData = json_decode($response->getBody(), true);

            // Ищем IATA код города
            $cityData = $this->findCityByName($geoData['city'] ?? '');

            // Если нашли город, возвращаем обогащенные данные
            if ($cityData) {
                return $cityData;
            }

            // Если не нашли город в базе, возвращаем данные из IP
            return [
                'iata_code' => null,
                'city_code' => null,
                'name' => $geoData['city'] ?? 'Unknown',
                'city' => $geoData['city'] ?? 'Unknown',
                'country' => $geoData['country'] ?? 'Unknown',
                'continent_name' => $this->getContinent($geoData['continentCode'] ?? 'EU'),
                'coordinates' => [
                    'lat' => $geoData['lat'] ?? null,
                    'lon' => $geoData['lon'] ?? null
                ]
            ];
        } catch (\Exception $e) {
            Log::error('Error getting city by IP: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * ПОЛУЧИТЬ ГОРОД ПО IATA КОДУ
     */
    public function getCityByIata($iataCode)
    {
        if (empty($iataCode)) {
            return null;
        }

        $cities = $this->getAllCities();
        foreach ($cities as $city) {
            if (isset($city['code']) && $city['code'] === strtoupper($iataCode)) {
                return $city['name'] ?? null;
            }
        }

        // Если не нашли в городах, ищем в аэропортах
        $airports = $this->getAllAirports();
        foreach ($airports as $airport) {
            if (isset($airport['city_code']) && $airport['city_code'] === strtoupper($iataCode)) {
                return $airport['city'] ?? $airport['name'] ?? null;
            }
        }

        return null;
    }

    /**
     * ПОЛУЧИТЬ ВСЕ ГОРОДА
     */
    public function getAllCities($locale = 'en')
    {
        return Cache::remember("all_cities_{$locale}", 86400, function () use ($locale) {
            $response = $this->client->get("{$this->dataUrl}/{$locale}/cities.json");
            return json_decode($response->getBody(), true);
        });
    }

    /**
     * ПОЛУЧИТЬ ВСЕ АЭРОПОРТЫ
     */
    public function getAllAirports($locale = 'en')
    {
        return Cache::remember("all_airports_{$locale}", 86400, function () use ($locale) {
            $response = $this->client->get("{$this->dataUrl}/{$locale}/airports.json");
            return json_decode($response->getBody(), true);
        });
    }

    /**
     * ПОЛУЧИТЬ ВСЕ СТРАНЫ
     */
    public function getAllCountries($locale = 'en')
    {
        return Cache::remember("all_countries_{$locale}", 86400, function () use ($locale) {
            $response = $this->client->get("{$this->dataUrl}/{$locale}/countries.json");
            return json_decode($response->getBody(), true);
        });
    }

    /**
     * ПОЛУЧИТЬ СТРАНУ ПО КОДУ
     */
    public function getCountryByCode($countryCode, $locale = 'en')
    {
        $countries = $this->getAllCountries($locale);

        foreach ($countries as $country) {
            if ($country['code'] === strtoupper($countryCode)) {
                return $country;
            }
        }

        return null;
    }

    /**
     * ПОЛУЧИТЬ НАЗВАНИЕ СТРАНЫ ПО КОДУ
     */
    public function getCountryName($countryCode, $locale = 'en')
    {
        $country = $this->getCountryByCode($countryCode, $locale);
        return $country ? $country['name'] : $countryCode;
    }

    /**
     * ПОЛУЧИТЬ ВСЕ АВИАКОМПАНИИ
     */
    public function getAllAirlines($locale = 'en')
    {
        return Cache::remember("all_airlines_{$locale}", 86400, function () use ($locale) {
            $response = $this->client->get("{$this->dataUrl}/{$locale}/airlines.json");
            return json_decode($response->getBody(), true);
        });
    }

    /**
     * ПОИСК ГОРОДА ПО НАЗВАНИЮ
     */
    public function findCityByName($cityName)
    {
        if (empty($cityName)) {
            return null;
        }

        $cities = $this->getAllCities();

        // Точное совпадение
        foreach ($cities as $city) {
            if (isset($city['name']) && strcasecmp($city['name'], $cityName) === 0) {
                return $this->enrichCityData($city);
            }
        }

        // Проверяем аэропорты
        $airports = $this->getAllAirports();
        foreach ($airports as $airport) {
            if (isset($airport['city']) && strcasecmp($airport['city'], $cityName) === 0) {
                return $this->enrichAirportData($airport);
            }
        }

        // Частичное совпадение
        foreach ($cities as $city) {
            if (isset($city['name']) && stripos($city['name'], $cityName) !== false) {
                return $this->enrichCityData($city);
            }
        }

        return null;
    }

    /**
     * ОБОГАТИТЬ ДАННЫЕ ГОРОДА
     */
    protected function enrichCityData($city)
    {
        $countryName = $this->getCountryName($city['country_code'] ?? '');
        $continent = $this->getCountryContinent($city['country_code'] ?? '');

        return [
            'iata_code' => $city['code'] ?? null,
            'city_code' => $city['code'] ?? null,
            'name' => $city['name'] ?? '',
            'city' => $city['name'] ?? '', // Используем name вместо city, так как у городов нет поля city
            'country' => $countryName,
            'country_code' => $city['country_code'] ?? '',
            'continent_name' => $continent,
            'coordinates' => [
                'lat' => $city['coordinates']['lat'] ?? null,
                'lon' => $city['coordinates']['lon'] ?? null
            ]
        ];
    }

    /**
     * ОБОГАТИТЬ ДАННЫЕ АЭРОПОРТА
     */
    protected function enrichAirportData($airport)
    {
        $countryName = $this->getCountryName($airport['country_code'] ?? '');
        $continent = $this->getCountryContinent($airport['country_code'] ?? '');

        return [
            'iata_code' => $airport['code'] ?? null,
            'city_code' => $airport['city_code'] ?? $airport['code'] ?? null,
            'name' => $airport['name'] ?? '',
            'city' => $airport['city'] ?? $airport['name'] ?? '', // Проверяем наличие поля city
            'country' => $countryName,
            'country_code' => $airport['country_code'] ?? '',
            'continent_name' => $continent,
            'coordinates' => [
                'lat' => $airport['coordinates']['lat'] ?? $airport['lat'] ?? null,
                'lon' => $airport['coordinates']['lon'] ?? $airport['lon'] ?? null
            ]
        ];
    }

    /**
     * ПОЛУЧИТЬ КОНТИНЕНТ СТРАНЫ
     */
    public function getCountryContinent($countryCode)
    {
        // Маппинг стран к континентам (основные страны)
        $countryToContinentMap = [
            // Europe
            'RU' => 'Europe',
            'GB' => 'Europe',
            'FR' => 'Europe',
            'DE' => 'Europe',
            'IT' => 'Europe',
            'ES' => 'Europe',
            'PT' => 'Europe',
            'NL' => 'Europe',
            'BE' => 'Europe',
            'CH' => 'Europe',
            'AT' => 'Europe',
            'SE' => 'Europe',
            'NO' => 'Europe',
            'DK' => 'Europe',
            'FI' => 'Europe',
            'IS' => 'Europe',
            'IE' => 'Europe',
            'PL' => 'Europe',
            'CZ' => 'Europe',
            'HU' => 'Europe',
            'RO' => 'Europe',
            'BG' => 'Europe',
            'GR' => 'Europe',
            'HR' => 'Europe',
            'RS' => 'Europe',
            'UA' => 'Europe',
            'BY' => 'Europe',
            'LT' => 'Europe',
            'LV' => 'Europe',
            'EE' => 'Europe',
            'MD' => 'Europe',
            'SK' => 'Europe',
            'SI' => 'Europe',
            'AL' => 'Europe',
            'MK' => 'Europe',
            'BA' => 'Europe',
            'ME' => 'Europe',
            'LU' => 'Europe',
            'MT' => 'Europe',
            'CY' => 'Europe',

            // Asia
            'CN' => 'Asia',
            'JP' => 'Asia',
            'KR' => 'Asia',
            'IN' => 'Asia',
            'ID' => 'Asia',
            'TH' => 'Asia',
            'VN' => 'Asia',
            'MY' => 'Asia',
            'SG' => 'Asia',
            'PH' => 'Asia',
            'HK' => 'Asia',
            'TW' => 'Asia',
            'MN' => 'Asia',
            'KZ' => 'Asia',
            'UZ' => 'Asia',
            'TM' => 'Asia',
            'TJ' => 'Asia',
            'KG' => 'Asia',
            'PK' => 'Asia',
            'BD' => 'Asia',
            'LK' => 'Asia',
            'MM' => 'Asia',
            'NP' => 'Asia',
            'BT' => 'Asia',
            'LA' => 'Asia',
            'KH' => 'Asia',
            'MV' => 'Asia',
            'BN' => 'Asia',
            'TL' => 'Asia',
            'AF' => 'Asia',
            'IQ' => 'Asia',
            'IR' => 'Asia',
            'SA' => 'Asia',
            'AE' => 'Asia',
            'QA' => 'Asia',
            'KW' => 'Asia',
            'BH' => 'Asia',
            'OM' => 'Asia',
            'YE' => 'Asia',
            'JO' => 'Asia',
            'LB' => 'Asia',
            'SY' => 'Asia',
            'IL' => 'Asia',
            'PS' => 'Asia',
            'TR' => 'Asia',
            'GE' => 'Asia',
            'AM' => 'Asia',
            'AZ' => 'Asia',

            // North America
            'US' => 'North America',
            'CA' => 'North America',
            'MX' => 'North America',
            'GT' => 'North America',
            'BZ' => 'North America',
            'SV' => 'North America',
            'HN' => 'North America',
            'NI' => 'North America',
            'CR' => 'North America',
            'PA' => 'North America',
            'CU' => 'North America',
            'JM' => 'North America',
            'HT' => 'North America',
            'DO' => 'North America',
            'PR' => 'North America',
            'TT' => 'North America',
            'BB' => 'North America',
            'BS' => 'North America',

            // South America
            'BR' => 'South America',
            'AR' => 'South America',
            'CL' => 'South America',
            'PE' => 'South America',
            'CO' => 'South America',
            'VE' => 'South America',
            'EC' => 'South America',
            'BO' => 'South America',
            'PY' => 'South America',
            'UY' => 'South America',
            'GY' => 'South America',
            'SR' => 'South America',
            'GF' => 'South America',
            'FK' => 'South America',

            // Africa
            'EG' => 'Africa',
            'ZA' => 'Africa',
            'NG' => 'Africa',
            'MA' => 'Africa',
            'ET' => 'Africa',
            'GH' => 'Africa',
            'KE' => 'Africa',
            'UG' => 'Africa',
            'DZ' => 'Africa',
            'SD' => 'Africa',
            'LY' => 'Africa',
            'TN' => 'Africa',
            'TZ' => 'Africa',
            'AO' => 'Africa',
            'MZ' => 'Africa',
            'MG' => 'Africa',
            'CM' => 'Africa',
            'CI' => 'Africa',
            'NE' => 'Africa',
            'BF' => 'Africa',
            'ML' => 'Africa',
            'MW' => 'Africa',
            'ZM' => 'Africa',
            'SN' => 'Africa',
            'ZW' => 'Africa',
            'RW' => 'Africa',
            'SO' => 'Africa',
            'TD' => 'Africa',
            'GN' => 'Africa',
            'BJ' => 'Africa',
            'BI' => 'Africa',
            'SL' => 'Africa',
            'TG' => 'Africa',
            'CF' => 'Africa',
            'LR' => 'Africa',
            'MR' => 'Africa',
            'ER' => 'Africa',
            'GM' => 'Africa',
            'BW' => 'Africa',
            'NA' => 'Africa',
            'GA' => 'Africa',
            'SZ' => 'Africa',
            'LS' => 'Africa',
            'GW' => 'Africa',
            'GQ' => 'Africa',
            'MU' => 'Africa',
            'DJ' => 'Africa',
            'KM' => 'Africa',
            'CV' => 'Africa',
            'ST' => 'Africa',
            'SC' => 'Africa',

            // Oceania
            'AU' => 'Oceania',
            'NZ' => 'Oceania',
            'PG' => 'Oceania',
            'FJ' => 'Oceania',
            'SB' => 'Oceania',
            'NC' => 'Oceania',
            'PF' => 'Oceania',
            'VU' => 'Oceania',
            'WS' => 'Oceania',
            'GU' => 'Oceania',
            'TO' => 'Oceania',
            'KI' => 'Oceania',
            'PW' => 'Oceania',
            'MH' => 'Oceania',
            'FM' => 'Oceania',
            'NR' => 'Oceania',
            'TV' => 'Oceania',
        ];

        return $countryToContinentMap[strtoupper($countryCode)] ?? 'Unknown';
    }

    /**
     * АВТОКОМПЛИТ ДЛЯ ГОРОДОВ/АЭРОПОРТОВ
     */
    public function autocomplete($term, $locale = 'en')
    {
        try {
            $response = $this->client->get('https://autocomplete.travelpayouts.com/places2', [
                'query' => [
                    'term' => $term,
                    'locale' => $locale,
                    'types[]' => ['airport', 'city']
                ]
            ]);

            $results = json_decode($response->getBody(), true);

            if (!is_array($results)) {
                return [];
            }

            // Обогащаем данные информацией о стране и континенте
            $enrichedResults = [];
            foreach ($results as $result) {
                if (!is_array($result)) {
                    continue;
                }

                $countryCode = $result['country_code'] ?? null;
                $countryName = $countryCode ? $this->getCountryName($countryCode) : 'Unknown';
                $continent = $countryCode ? $this->getCountryContinent($countryCode) : 'Unknown';

                $enrichedResults[] = [
                    'iata_code' => $result['code'] ?? null,
                    'city_code' => $result['city_code'] ?? $result['code'] ?? null,
                    'name' => $result['name'] ?? '',
                    'city' => $result['city_name'] ?? $result['name'] ?? '',
                    'country' => $countryName,
                    'country_code' => $countryCode,
                    'continent_name' => $continent,
                    'type' => $result['type'] ?? 'city'
                ];
            }

            return $enrichedResults;
        } catch (\Exception $e) {
            Log::error('Autocomplete error: ' . $e->getMessage());
            return [];
        }
    }

    /**
     * ПОИСК ГОРОДА/АЭРОПОРТА ПО IATA КОДУ
     */
    public function findByIataCode($iataCode)
    {
        if (empty($iataCode)) {
            return null;
        }

        $iataCode = strtoupper($iataCode);

        // Ищем в городах
        $cities = $this->getAllCities();
        foreach ($cities as $city) {
            if (isset($city['code']) && $city['code'] === $iataCode) {
                return $this->enrichCityData($city);
            }
        }

        // Ищем в аэропортах
        $airports = $this->getAllAirports();
        foreach ($airports as $airport) {
            if (isset($airport['code']) && $airport['code'] === $iataCode) {
                return $this->enrichAirportData($airport);
            }
        }

        return null;
    }

    /**
     * СГЕНЕРИРОВАТЬ ССЫЛКУ ДЛЯ ПЕРЕХОДА
     */
    public function generateAffiliateLink($params)
    {
        $baseUrl = 'https://www.aviasales.com/search';

        $queryParams = [
            'marker' => $this->marker,
            'origin_iata' => $params['origin'],
            'destination_iata' => $params['destination'],
            'depart_date' => $params['depart_date'] ?? null,
            'return_date' => $params['return_date'] ?? null,
            'adults' => $params['adults'] ?? 1,
            'children' => $params['children'] ?? 0,
            'infants' => $params['infants'] ?? 0,
            'trip_class' => $params['class'] ?? 'Y', // Y - эконом, C - бизнес, F - первый
            'with_request' => 1
        ];

        // Убираем пустые параметры
        $queryParams = array_filter($queryParams);

        return $baseUrl . '?' . http_build_query($queryParams);
    }

    /**
     * КОНВЕРТИРОВАТЬ ВАЛЮТУ
     */
    public function convertPrice($price, $fromCurrency, $toCurrency)
    {
        if ($fromCurrency === $toCurrency) {
            return $price;
        }

        // Получаем курсы валют
        $rates = Cache::remember('currency_rates', 3600, function () {
            return $this->makeRequest('/v1/currency-rates');
        });

        if (isset($rates[$fromCurrency]) && isset($rates[$toCurrency])) {
            $usdPrice = $price / $rates[$fromCurrency];
            return round($usdPrice * $rates[$toCurrency], 2);
        }

        return $price;
    }

    /**
     * ОСНОВНОЙ МЕТОД ДЛЯ ЗАПРОСОВ К API
     */
    protected function makeRequest($endpoint, $params = [])
    {
        try {
            // Фильтруем null значения
            $params = array_filter($params, function ($value) {
                return $value !== null;
            });
            
            $params['token'] = $this->token;

            // Логируем для отладки
            Log::info('Travelpayouts API Request', [
                'endpoint' => $endpoint,
                'params' => $params,
                'token' => substr($this->token, 0, 5) . '...' // Показываем только начало токена
            ]);

            // Проверяем наличие токена
            if (empty($this->token)) {
                throw new \Exception('API token is not configured');
            }

            $response = $this->client->get($this->baseUrl . $endpoint, [
                'headers' => [
                    'X-Access-Token' => $this->token,
                    'Accept' => 'application/json',
                ],
                'query' => $params
            ]);

            $data = json_decode($response->getBody(), true);

            // Логируем успешный ответ
            Log::info('Travelpayouts API Response', [
                'endpoint' => $endpoint,
                'has_data' => isset($data['data']) || !empty($data)
            ]);

            if (isset($data['success']) && $data['success'] === false) {
                throw new \Exception($data['error'] ?? 'API request failed');
            }

            return $data['data'] ?? $data;
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $statusCode = $e->getResponse()->getStatusCode();
            $body = $e->getResponse()->getBody()->getContents();

            Log::error('Travelpayouts API Client Error', [
                'endpoint' => $endpoint,
                'status' => $statusCode,
                'response' => $body,
                'token_exists' => !empty($this->token)
            ]);

            // Специальная обработка для 401
            if ($statusCode === 401) {
                throw new \Exception('API authentication failed. Please check your token.');
            }

            return null;
        } catch (\Exception $e) {
            Log::error('Travelpayouts API error: ' . $e->getMessage());
            return null;
        }
    }

    /**
     * ВСПОМОГАТЕЛЬНЫЕ МЕТОДЫ
     */
    private function calculateMedian($array)
    {
        sort($array);
        $count = count($array);
        $middle = floor(($count - 1) / 2);

        if ($count % 2) {
            return $array[$middle];
        } else {
            return ($array[$middle] + $array[$middle + 1]) / 2;
        }
    }

    public function getContinent($code)
    {
        return [
            'AS' => 'Asia',
            'EU' => 'Europe',
            'AF' => 'Africa',
            'NA' => 'North America',
            'SA' => 'South America',
            'OC' => 'Oceania',
            'AN' => 'Antarctica'
        ][$code] ?? 'Europe';
    }
}
