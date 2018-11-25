<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $company = Company::all();
      return $company->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $novaCompany = new Company;
      $novaCompany->compName = $request->compName;
      $novaCompany->basedIn_state = $request->basedIn_state;
      $novaCompany->basedIn_country = $request->basedIn_country;
      $novaCompany->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      $company = Company::findorfail($compID);
      return $company->toJson();
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
       $company = Company::findorfail($compID);

        if($request->compName){
          $company->compName = $request->compName;
        }
        if($request->basedIn_state){
          $company->basedIn_state = $request->basedIn_state;
        }
        if($request->basedIn_country){
            $company->basedIn_country = $request->basedIn_country;
        }

         $company->save();
         return $company->toJson();
      }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($compID)
    {
      Company::destroy($compID);
    }
}
