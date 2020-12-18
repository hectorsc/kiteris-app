<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $rules = [
            'REF' => [
                'required', 'min:4', 'max:20',
                Rule::unique('products')->where(function ($query) use ($request) {
                    return $query->where('user_id', $request->user()->id)->where('REF', $request->REF);
                })
            ],
            'name' => 'required|min:4|max:20',
            'price' => 'required|numeric',
            'offer_price' => 'required|numeric',
            'category_id' => 'required'
        ];

        if ($this->product) {
            if ($this->product->REF == $request->REF) {
                $rules = [
                    'name' => 'required|min:4|max:20',
                    'REF'  => 'required|min:4|max:20',
                    'price' => 'required|numeric',
                    'offer_price' => 'required|numeric',
                    'category_id' => 'required'
                ];
            }
        }

        return $rules;
        
    }
}
