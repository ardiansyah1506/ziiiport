<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'role',
        'timeline',
        'description',
        'tech',
        'categories',
        'image',
        'liveDemo',
        'github',
    ];

    protected $casts = [
        'tech' => 'array',
        'categories' => 'array',
    ];

    public function getImageAttribute($value)
    {
        if ($value && !\Illuminate\Support\Str::startsWith($value, 'http')) {
            return asset($value);
        }
        return $value;
    }
}
