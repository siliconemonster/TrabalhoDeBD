<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QueryController extends Controller {
    public function game_search(Request $request) {
        $results = App\Models\Game::where('gameName', '=', $request->gameName)
                                    ->whereBetween('gamePrice', [$request->maxPrice, $request->minPrice])
                                    ->whereBetween('rating', [$request->maxRating, $request->minRatiog])
                                    ->whereYear('releaseDate', $request->year)
                                    ->get();
        return $results;
    }
    // Games queries
    public function games_by_tags(Request $request) {
        $results = App\Models\Tag::whereIn('tagName', $request->tagsNames)->games();
        return $results;
    }

    // Tags queries
    public function count_games_by_tag(Request $request) {
        $results = App\Models\Tag::where('tagName', '=', $request->tagName)->count();
        return $results;
    }

    public function pricest_game_by_tag(Request $request) {
        $result = App\Models\Tag::where('tagName', '=', $request->tagName)
                                        ->games()->whereRaw('price = (select max(price) from games)')->get();
        return $result;
    }

    public function mean_price_by_tag(Reques $request) {
        $result = App\Models\Tag::avg('price')->where('tagName', '=', $request->tagName);
        return $result;
    }

    // Package queries
    public function package_by_game(Request $request) {
        $result = App\Models\Game::where('gameName', '=', $request->gameName)->packages();
        return $result;
    }

    // Companies queries
    public function games_developed(Request $request) {
        $result = App\Models\Company::where('compName', '=', $request->compName)->develops();
        return $result;
    }

    public function games_published(Request $request) {
        $result = App\Models\Company::where('compName', '=', $request->compName)->publishes();
        return $result;
    }

    // User queries
    public function user_by_name(Request $request) {
        $result = App\Models\User::where('userName', '=', $request->userName)->get();
        return $result;     
    }

    public function user_value(Request $request) {
        $result = App\Models\User::where('userName', '=', $request->userName)
                                    ->games_owned()->sum('gamePrice');
        return $result;
    }
    
    public function user_count_games_played(Request $request) {
        $result = App\Models\User::where('userName', '=', $request->userName)->games_played()->count();
        return $result;
    }


}