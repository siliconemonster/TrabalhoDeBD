<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'companies';
    protected $primaryKey = 'compID';
    protected $fillable = ['compName'];

    public function publishes () {
        return $this->hasMany('App\Models\Game', 'fk_Publisher_Company_compID', 'compID');
    }

    public function develops () {
        return $this->hasMany('App\Models\Game', 'fk_Developer_Company_compID', 'compID');
    }
}
