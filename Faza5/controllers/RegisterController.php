<?php

namespace App\Http\Controllers;

use App\Models\Korisnik;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
   
    public function showRegistrationForm(){
        return view('Gost_Registreacija');
    }


    public function register(Request $request){
        $user = Korisnik::create([
            'email' => $request['email'],
            'korisnickoIme' => $request['username'],
            'ime' => $request['name'],
            'prezime' => $request['surname'],
            'sifra' => $request['password']

        ]);
        return redirect()->route('pocetna')->with('success', "Uspesna registracija, Dobrodosli, " . $user->name . '!');

    }


}
