<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $primarykey = 'tagsID';

    public function games () {
        return $this->belongsToMany('App\Models\Game', 'game_tag', 'tagsID', 'gameID');
    }
}
