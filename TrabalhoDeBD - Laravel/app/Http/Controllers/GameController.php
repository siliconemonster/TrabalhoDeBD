<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\{Company, Game};

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $game = Game::all();
      return $game->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $novoGame = new Game;

      $developer = Company::firstOrNew(['compName' => $request->devCompName]);
      $developer->save();

      $publisher = Company::firstOrNew(['compName' => $request->pubCompName]);
      $publisher->save();

      $novoGame->gameName = $request->gameName;
      $novoGame->releaseDate = $request->releaseDate;
      $novoGame->gamePrice = $request->gamePrice;
      $novoGame->amountOfReviews = $request->amountOfReviews;
      $novoGame->rating = $request->rating;
      $novoGame->published_by()->associate($publisher);
      $novoGame->developed_by()->associate($developer);
      $novoGame->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $game = Game::findorfail($gameID);
      return $game->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
     public function update(Request $request, $id)
     {
       $game = Game::findorfail($gameID);

        if($request->gameName){
          $game->gameName = $request->gameName;
        }
        if($request->releaseDate){
          $game->releaseDate = $request->releaseDate;
        }
        if($request->gamePrice){
          $game->gamePrice = $request->gamePrice;
        }
        if($request->amountOfReviews){
          $game->amountOfReviews = $request->amountOfReviews;
        }
        if($request->rating){
          $game->rating = $request->rating;
        }
        if($request->$fk_Developer_Company_compID){
          $game->fk_Developer_Company_compID = $request->$fk_Developer_Company_compID;
        }
        if($request->fk_Publisher_Company_compID){
          $game->fk_Publisher_Company_compID = $request->fk_Publisher_Company_compID;
        }

         $game->save();
         return $game->toJson();
      }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($gameID)
    {
      Game::destroy($gameID);
    }
}
