<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('hello-world');
});
Route::get('/hello', function () {
    return Inertia::render('HelloComponent');
});
Route::get('/react-dashboard', function () {
    return Inertia::render('ReactDashboard');
});
Route::get('/get-data', function () {
    return response()->json([
        'data' => 'Here is some data from the server.',
    ]);
});
Route::get('/dashboard/{any?}', function () {
    return Inertia::render('Dashboard');
})->where('any', '.*');
