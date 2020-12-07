<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use App\Models\User;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'user_id' => User::factory(),
        'name' => $faker->unique()->word(),
        'created_at' => $faker->dateTimeBetween('-1 day'),
        'updated_at' => $faker->dateTimeBetween('-1 day')
    ];
});
