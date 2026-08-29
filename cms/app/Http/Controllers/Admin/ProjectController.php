<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::latest()->get();
        return view('admin.projects.index', compact('projects'));
    }

    public function create()
    {
        $project = new Project();
        return view('admin.projects.form', compact('project'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:projects',
            'role' => 'required|string|max:255',
            'timeline' => 'required|string|max:255',
            'description' => 'required|string',
            'tech' => 'required|string',
            'categories' => 'nullable|string',
            'image' => 'required|image|max:2048',
            'liveDemo' => 'nullable|string',
            'github' => 'nullable|string',
        ]);

        $validated['tech'] = array_map('trim', explode(',', $validated['tech']));
        $validated['categories'] = $validated['categories'] ? array_map('trim', explode(',', $validated['categories'])) : [];

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $validated['is_featured'] = $request->has('is_featured');

        Project::create($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    public function edit(Project $project)
    {
        return view('admin.projects.form', compact('project'));
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:projects,slug,' . $project->id,
            'role' => 'required|string|max:255',
            'timeline' => 'required|string|max:255',
            'description' => 'required|string',
            'tech' => 'required|string',
            'categories' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'liveDemo' => 'nullable|string',
            'github' => 'nullable|string',
        ]);

        $validated['tech'] = array_map('trim', explode(',', $validated['tech']));
        $validated['categories'] = $validated['categories'] ? array_map('trim', explode(',', $validated['categories'])) : [];

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('projects', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $validated['is_featured'] = $request->has('is_featured');

        $project->update($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route('admin.projects.index')->with('success', 'Project deleted successfully.');
    }
}
