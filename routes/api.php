<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/diagnosa', 'App\Http\Controllers\DiagnosaController@diagnosa');
Route::get('/gejala', 'App\Http\Controllers\DiagnosaController@gejala');
Route::get('/list_penyakit', 'App\Http\Controllers\DiagnosaController@list_penyakit');