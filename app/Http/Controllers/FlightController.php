<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\TravelpayoutsService;

class FlightController extends Controller
{

    protected $travelpayouts;

    public function __construct(TravelpayoutsService $travelpayouts)
    {
        $this->travelpayouts = $travelpayouts;
    }


    public function search(Request $request)
    {
        $requestData = $request->all();
        $from = $requestData['from'];
        $to = $requestData['to'];
        $date = $requestData['date'];
        $flights = $this->travelpayouts->getDirectFlights($from, $to, $date);
        return response()->json($flights);
    }
}
