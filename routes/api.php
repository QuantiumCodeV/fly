<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AirportController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\FlightController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/airports/nearest', [AirportController::class, 'nearest']);
Route::get('/airports/autocomplete', [AirportController::class, 'search']);
Route::post('/requests/create', [RequestController::class, 'create']);
Route::get('/flights/search', [FlightController::class, 'search']);
Route::get('/redirects', [RequestController::class, 'redirects']);
Route::get('/airports/pair', [AirportController::class, 'pair']);
Route::get('/content/page/{page}', [RequestController::class, 'pageResults']);
Route::post('/contacts/submit', [RequestController::class, 'contacts']);
Route::get('/content/page', [RequestController::class, 'pageResultsMain']);
