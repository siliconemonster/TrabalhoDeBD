<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRelationshipTagsGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('_relationship_tags_games', function (Blueprint $table) {
            $table->increments('relID');
            $table->integer('fk_gameID')->nullable()->unsigned();
            $table->integer('fk_tagsID')->nullable()->unsigned();
            $table->timestamps();
        });
        Schema::table('_relationship_tags_games', function (Blueprint $table) {
           $table->foreign('fk_gameID')->references('gameID')->on('games');
           $table->foreign('fk_tagsID')->references('tagsID')->on('tags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_relationship_tags_games');
    }
}
