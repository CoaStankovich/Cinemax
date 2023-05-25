<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{


    public function showLoginForm(){
        return view('Gost_Prijava');
    }

    protected $redirectTo='/pocetna';

    public function login(Request $request){
        $credentials = $request->only("email", "sifra");
        if(auth()->attempt($credentials)){
            return redirect()->intended($this->redirectPath());
        }
        return back()->withErrors(['email'=> 'Invalid credentials.']);
    }
}
