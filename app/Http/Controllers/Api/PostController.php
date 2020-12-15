<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\PostRequest;
use App\Models\Post;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::where('user_id', Auth::id())->get();
        return response()->json($posts);
    }

    public function store(PostRequest $request)
    {
        $tags = $this->fixedTagsArray($request->tags);
        $request->merge(['user_id' => $request->user()->id]);
        $data = $request->except('tags');
        $post = Post::create($data);
        $id = $post->id;
        $post = Post::find($id);
        $post->tags()->attach($tags);
        return response()->json(['message' => 'Created successfully'], 200);
    }

    public function show($id)
    {
        // no me funcionó pasandole el objeto Post, tuve que pasar $id
        $post = Post::find($id);
        $post->tags;
        return response()->json($post);
    }

    public function update(PostRequest $request, Post $post)
    {
        $tags = $this->fixedTagsArray($request->tags);
        $post->update($request->except('tags'));
        $post->tags()->sync($tags);
        return response()->json(['message' => 'Updated successfully'], 200);
    }

    public function destroy(Post $post)
    {
        $post->tags()->detach();
        $post->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }

    // Se podría meter en un archivo helpers a parte
    // no me vale la pena con lo que hay de código
    private function fixedTagsArray($data) {
        $tags = [];
        foreach ($data as $key => $tag) {
            $tags[$key] = $tag['value'];
        }
        return $tags;
    }
}
