<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $primaryKey = 'tagsID';

    public function games () {
        return $this->belongsToMany('App\Models\Game', '_relationship_tags_games', 'fk_tagsID', 'fk_gameID');
    }
}
