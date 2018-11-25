<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesOwnedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games_owned', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fk_gameID')->nullable()->unsigned();
            $table->integer('fk_userID')->nullable()->unsigned();
            $table->timestamps();
        });
        Schema::table('games_owned', function (Blueprint $table) {
            $table->foreign('fk_gameID')->references('gameID')->on('games');
            $table->foreign('fk_userID')->references('userID')->on('users');
         });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games_owned');
    }
}
