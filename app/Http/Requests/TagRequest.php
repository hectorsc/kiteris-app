<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class TagRequest extends FormRequest
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
            'name' => [
                'required', 'min:4', 'max:20',
                Rule::unique('tags')->where(function ($query) use ($request) {
                    return $query->where('user_id', $request->user()->id)->where('name', $request->name);
                })
            ]
        ];

        if ($this->tag) {
            if ($this->tag->name == $request->name) {
                $rules = ['name' => 'required|min:4|max:20'];
            }
        }

        return $rules;
    }
}
