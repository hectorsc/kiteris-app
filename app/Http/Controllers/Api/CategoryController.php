<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::where('user_id', Auth::id())->get();
        return response()->json($categories);
    }

    public function store(CategoryRequest $request)
    {
        $request->user()->categories()->create($request->all());
        return response()->json(['message' => 'Created successfully'], 200);
    }

    public function show(Category $category)
    {
        $category->products;
        return response()->json($category);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $category->update($request->all());
        return response()->json(['message' => 'Updated successfully'], 200);
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
