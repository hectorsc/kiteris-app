<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Post;
use App\Models\Tag;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // USUARIO Y LOS POSTS Y TAGS QUE TIENE 
        // $user = User::find(2);
        // dd($user->posts, $user->tags);

        // //TODO LOS POSTS Y TAGS QUE TIENE ESE POST DE UN USUARIO EN CONCRETO
        // $posts= Post::with('tags')->where('user_id', Auth::id())->get();
        // dd($posts);

        // TODOS LOS TAGS QUE TIENE UN USUARIO Y SUS POSTS ASOCIADOS
        // $tags = Tag::with('posts')->where('user_id', Auth::id())->get();
        // dd($tags);

        // TODAS LAS RELACIONES DE UN USUARIO
        // ESTO ME SIRVE PARA POR EJEMPLO PILLAR LOS ULTIMOS REGISTROS CREADOS POR EL USUARIO
        // $user= User::find(auth()->user()->id);
        // dd($user->products, $user->categories, $user->posts, $user->tags);


    
        return view('home');
    }
}
