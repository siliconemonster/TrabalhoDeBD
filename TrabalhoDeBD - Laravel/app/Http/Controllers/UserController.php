<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $user = User::all();
      return $user->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $novoUser = new User;
      $novoUser->username = $request->username;
      $novoUser->level = $request->level;
      $novoUser->accountTime = $request->accountTime;
      $novoUser->save();

      //lógica para o upload de imagens.
      if(!Storage::exists('localPhotos/'))
      {
        Storage::makeDirectory('localPhotos/', 0775, true);
      }
      //decodifica a string em base64 e a atribui a uma variável
      $image = base64_decode($request->profilePic);
      //gera um nome único para o arquivo e concatena seu nome com a
      //extensão ‘.png’ para termos de fato uma imagem
      $imgName = uniqid() . '.png';
      //atribui a variável o caminho para a imagem que é constituída do
      //caminho das pastas e o nome do arquivo
      $path = storage_path('/app/localPhotos/'.$imgName);
      //salva o que está na variável $image como o arquivo definido em $path
      file_put_contents($path,$image);
      $this->profilePic = $imgName;

      $this->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findorfail($userID);
        return $user->toJson();
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
       $user = User::findorfail($userID);

        if($request->username){
          $user->username = $request->username;
        }
        if($request->level){
          $user->level = $request->level;
        }
        if($request->accountTime){
            $user->accountTime = $request->accountTime;
        }

         $user->save();
         return $user->toJson();
      }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($userID)
    {
      User::destroy($userID);
    }
}
