<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamePackageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_package', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('fk_gameID')->nullable()->unsigned();
            $table->integer('fk_packID')->nullable()->unsigned();
            $table->timestamps();
        });
        Schema::table('game_package', function (Blueprint $table) {
            $table->foreign('fk_gameID')->references('gameID')->on('games');
            $table->foreign('fk_packID')->references('packID')->on('packages');
         });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_package');
    }
}
