<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Movie;
use App\Language;
use Faker\Generator as Faker;

$factory->define(Movie::class, function (Faker $faker) {
    return [
        'title' => $faker->word(),
        'description' => $faker->sentence(),
        'release_year' => $faker->year(),
        'language_id' => Language::all()->random()->id,
        'length' => $faker->randomNumber(3),
        'rating' => $faker->randomElement(Movie::ratingEnum),
        'special_features' => array_rand(Movie::specialFeatures)
    ];
});
