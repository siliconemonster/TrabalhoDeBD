<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $primaryKey = 'packID';

    public function games () {
        return $this->belongsToMany('App\Models\Game', 'game_package', 'packID', 'gameID');
    }
}
