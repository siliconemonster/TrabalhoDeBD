<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Package\Models;
use App\Models\{Company, Game, Package, Tag, User};
use App\Http\Requests\GameSearch;

class QueryController extends Controller {
    public function game_search(Request $request) {
        $results = Game::where('gameName', '=', $request->gameName)
                                    ->whereBetween('gamePrice', [$request->minGamePrice, $request->maxGamePrice])
                                    ->whereBetween('rating', [$request->minGameRating, $request->maxGameRating])
                                    ->whereYear('releaseDate', $request->gameYear)
                                    ->get();
        return $results;
    }
    // Games queries
    public function games_by_tags(Request $request) {
        $results = Tag::whereIn('tagName', $request->tagsNames)->games()->get();
        return $results;
    }

    // Tags queries
    public function count_games_by_tag(Request $request) {
        $results = Tag::where('tagName', '=', $request->tagName)->count();
        return $results;
    }

    public function pricest_game_by_tag(Request $request) {
        $result = Tag::where('tagName', '=', $request->tagName)
                                        ->games()->whereRaw('price = (select max(price) from games)')->get();
        return $result;
    }

    public function mean_price_by_tag(Reques $request) {
        $result = Tag::avg('price')->where('tagName', '=', $request->tagName);
        return $result;
    }

    // Package queries
    public function package_by_game(Request $request) {
        $result = Game::where('gameName', '=', $request->gameName)->packages()->get();
        return $result;
    }

    // Companies queries
    public function games_developed(Request $request) {
        $result = Company::where('compName', '=', $request->compName)->develops()->get();
        return $result;
    }

    public function games_published(Request $request) {
        $result = Company::where('compName', '=', $request->compName)->publishes()->get();
        return $result;
    }

    // User queries
    public function user_by_name(Request $request) {
        $result = User::where('userName', '=', $request->userName)->get();
        return $result;     
    }

    public function user_value(Request $request) {
        $result = User::where('userName', '=', $request->userName)
                                    ->games_owned()->sum('gamePrice');
        return $result;
    }
    
    public function user_count_games_played(Request $request) {
        $result = User::where('userName', '=', $request->userName)->games_played()->count();
        return $result;
    }


}