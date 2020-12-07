<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::where('user_id', Auth::id())->get();
        return response()->json($products);
    }

    public function store(ProductRequest $request)
    {
        $data = $request->all();
        $data['user_id'] = $request->user()->id;
        Product::create($data);
        return response()->json(['message' => 'Created successfully'], 200);
    }

    public function show(Product $product)
    {
        $product->category;
        return response()->json($product);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->all());
        return response()->json(['message' => 'Updated successfully'], 200);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
