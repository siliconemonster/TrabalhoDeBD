<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $primaryKey = 'gameID';

    public function packages()
    {
        return $this->belongsToMany('App\Models\Package', 'game_package', 'gameID', 'packID');
    }

    public function published_by () {
        return $this->belongsTo('App\Models\Company', 'fk_Publisher_Company_compID', 'compID');
    }

    public function developed_by () {
        return $this->belongsTo('App\Models\Company', 'fk_Developer_Company_compID', 'compID');
    }

    public function owned_by() {
        return $this->belongsToMany('App\Models\User', 'games_owned', 'gameID', 'userID');
    }

    public function played_by() {
        return $this->belongsToMany('App\Models\User', 'games_played', 'gameID', 'userID');
    }

    public function tags() {
        return $this->belongsToMany('App\Models\Tag', '_relationship_tags_games', 'fk_gameID', 'fk_tagsID');
    }
}
