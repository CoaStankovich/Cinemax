<?php

use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//LOGIN
Route::get('/Gost_Prijava', [LoginController::class, 'showLoginForm'])->name('Gost_Prijava');
Route::post('/Gost_Prijava', [LoginController::class, 'Gost_Prijava']);

//REGISTER
Route::get('/Gost_Registracija', [RegisterController::class, 'showRegistrationForm'])->name('Gost_Registracija');
Route::post('/Gost_Registracija', [RegisterController::class, 'Gost_Registracija']);


