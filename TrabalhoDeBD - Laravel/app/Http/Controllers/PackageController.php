<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $package = Package::all();
      return $package->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $novoPackage = new Package;
      $novoPackage->packName = $request->packName;
      $novoPackage->packReleaseDate = $request->packReleaseDate;
      $novoPackage->packPrice = $request->packPrice;
      $novoPackage->packSatus = $request->packSatus;
      $novoPackage->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $package = Package::findorfail($packID);
      return $package->toJson();
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
       $package = Package::findorfail($packID);

        if($request->packName){
          $package->packName = $request->packName;
        }
        if($request->packReleaseDate){
          $package->packReleaseDate = $request->packReleaseDate;
        }
        if($request->packPrice){
          $package->packPrice = $request->packPrice;
        }
        if($request->packSatus){
          $novoPackage->packSatus = $request->packSatus;
        }

         $package->save();
         return $package->toJson();
     }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($packID)
    {
      Package::destroy($packID);
    }
}
