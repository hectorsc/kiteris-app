<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\TagRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\Tag;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::where('user_id', Auth::id())->get();
        return response()->json($tags);
    }

    public function store(TagRequest $request)
    {
        $request->user()->tags()->create($request->all());
        return response()->json(['message' => 'Created successfully'], 200);
    }

    public function show(Tag $tag)
    {
        $tag->posts;
        return response()->json($tag);
    }

    public function update(TagRequest $request, Tag $tag)
    {
        $tag->update($request->all());
        return response()->json(['message' => 'Updated successfully'], 200);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json(['message' => 'Deleted successfully'], 200); 
    }
}
