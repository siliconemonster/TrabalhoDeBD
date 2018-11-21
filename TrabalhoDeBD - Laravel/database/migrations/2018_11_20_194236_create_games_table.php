<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->increments('gameID');
            $table->string('gameName');
            $table->date('releaseDate');
            $table->float('gamePrice');
            $table->integer('amountOfReviews');
            $table->float('rating');
            $table->integer('fk_Developer_Company_compID')->nullable()->unsigned();
            $table->integer('fk_Publisher_Company_compID')->nullable()->unsigned();
            $table->timestamps();
        });

        Schema::table('games', function (Blueprint $table) {
           $table->foreign('fk_Developer_Company_compID')->references('compID')->on('companies');
           $table->foreign('fk_Publisher_Company_compID')->references('compID')->on('companies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}
