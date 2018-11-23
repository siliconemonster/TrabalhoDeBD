<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RelashioshipTagsGamesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $relashioshipTagsGames = RelashioshipTagsGames::all();
      return $relashioshipTagsGames->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $novaRelashioshipTagsGames = new RelashioshipTagsGames;

      $game = new Game;

      $game->gameID = $request->fk_gameID;
      $game->save();
      $fk_gameID  = $game->gameID;

      $tags = new Tags;

      $tags->tagsID = $request->fk_tagsID;
      $tags->save();
      $fk_tagsID  = $tags->tagsID;

      $novaRelashioshipTagsGames->fk_gameID = $fk_gameID;
      $novaRelashioshipTagsGames->fk_tagsID = $fk_tagsID;

      $novaRelashioshipTagsGames->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $relashioshipTagsGames = RelashioshipTagsGames::findorfail($relID);
      return $relashioshipTagsGames->toJson();
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
        $relashioshipTagsGames = RelashioshipTagsGames::findorfail($relID);

        if($request->$fk_gameID){
         $relashioshipTagsGames->fk_gameID = $request->$fk_gameID;
        }
        if($request->fk_tagsID){
         $relashioshipTagsGames->fk_tagsID = $request->fk_tagsID;
        }

         $relashioshipTagsGames->save();
         return $relashioshipTagsGames->toJson();
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        RelashioshipTagsGames::destroy($relID);
    }
}
