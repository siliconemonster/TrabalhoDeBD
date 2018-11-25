<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/game-search', 'QueryController@game_search');
Route::get('/games-by-tags', 'QueryController@games_by_tags');
Route::get('/count-games-by-tag', 'QueryController@count_games_by_tag');
Route::get('/pricest-game-by-tag', 'QueryController@pricest_game_by_tag');
Route::get('/mean-price-by-tag', 'QueryController@mean_price_by_tag');
Route::get('/package-by-game', 'QueryController@package_by_game');
Route::get('/games-developed', 'QueryController@games_developed');
Route::get('/games-published', 'QueryController@games_published');
Route::get('/user-by-name', 'QueryController@user_by_name');
Route::get('/user-value', 'QueryController@user_value');
Route::get('/user-count-games-played', 'QueryController@user_count_games_played');
