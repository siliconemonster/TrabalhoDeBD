<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
 //   return $request->user();
//});

Route::resource('games', 'GameController');
Route::resource('packages', 'PackageController');
Route::resource('companies', 'CompanyController');
Route::resource('users', 'UserController');     
Route::resource('tags', 'TagsController');
Route::resource('relationshipsTagsGames', 'RelashioshipTagsGamesController');
Route::put('/join-games-packages', 'QueryController@join_games_packages')->name('games_packages');
Route::put('/join-games-tags', 'QueryController@join_games_tags')->name('games_tags');
Route::put('/join-games-users-own', 'QueryController@join_games_users_own')->name('games_owned');
Route::put('/join-games-users-play', 'QueryController@join_games_users_play')->name('games_played');
