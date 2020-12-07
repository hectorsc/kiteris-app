<?php

namespace App\Http\Requests;

use App\Category;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Request $request)
    {
        $rules = [
            'name' => [
                'required', 'min:4', 'max:20',
                Rule::unique('categories')->where(function ($query) use ($request) {
                    return $query->where('user_id', $request->user()->id)->where('name', $request->name);
                })
            ]
        ]; 

        if ($this->category) {
            if ($this->category->name == $request->name) {
                $rules = ['name' => 'required|min:4|max:20'];
            }
        }

        return $rules;
    }
}
