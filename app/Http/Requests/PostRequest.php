<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class PostRequest extends FormRequest
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
            'title' => [
                'required', 'min:4', 'max:150',
                Rule::unique('posts')->where(function ($query) use ($request) {
                    return $query->where('user_id', $request->user()->id)->where('title', $request->title);
                })
            ],
            'sub_title' => 'required|min:4|max:150',
            'body' => 'required|min:10',
            'tags' => 'required'
        ];

        if ($this->post) {
            if ($this->post->title == $request->title) {
                $rules = [
                    'title' => 'required|min:4|max:150',
                    'sub_title' => 'required|min:4|max:150',
                    'body' => 'required|min:10',
                    'tags' => 'required'
                ];
            }
        }

        return $rules;
    }
}
