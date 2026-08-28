<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Project;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/projects', function () {
    return response()->json(Project::orderBy('created_at', 'desc')->get());
});

Route::get('/projects/{slug}', function ($slug) {
    $project = Project::where('slug', $slug)->firstOrFail();
    return response()->json($project);
});
