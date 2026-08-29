<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-2xl text-gray-800 leading-tight">
            {{ $project->exists ? 'Edit Project' : 'Create Project' }}
        </h2>
    </x-slot>

    <div class="bg-white shadow-sm rounded-xl border border-gray-100 p-6 md:p-8">
        
        @if ($errors->any())
            <div class="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-sm mb-6">
                <ul class="list-disc pl-5 text-sm font-medium">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ $project->exists ? route('admin.projects.update', $project) : route('admin.projects.store') }}" method="POST" enctype="multipart/form-data" class="space-y-6">
            @csrf
            @if($project->exists)
                @method('PUT')
            @endif

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Title -->
                <div>
                    <label for="title" class="block font-medium text-sm text-gray-700 mb-2">Title</label>
                    <input id="title" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="title" value="{{ old('title', $project->title) }}" required autofocus />
                </div>

                <!-- Slug -->
                <div>
                    <label for="slug" class="block font-medium text-sm text-gray-700 mb-2">Slug</label>
                    <input id="slug" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="slug" value="{{ old('slug', $project->slug) }}" required />
                    <p class="text-xs text-gray-500 mt-1">Must be unique (e.g., nexus-analytics-platform)</p>
                </div>

                <!-- Role -->
                <div>
                    <label for="role" class="block font-medium text-sm text-gray-700 mb-2">Role</label>
                    <input id="role" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="role" value="{{ old('role', $project->role) }}" required />
                </div>

                <!-- Timeline -->
                <div>
                    <label for="timeline" class="block font-medium text-sm text-gray-700 mb-2">Timeline</label>
                    <input id="timeline" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="timeline" value="{{ old('timeline', $project->timeline) }}" required />
                </div>
            </div>

            <!-- Description -->
            <div>
                <label for="description" class="block font-medium text-sm text-gray-700 mb-2">Description</label>
                <textarea id="description" name="description" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-3 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" rows="5" required>{{ old('description', $project->description) }}</textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Tech -->
                <div>
                    <label for="tech" class="block font-medium text-sm text-gray-700 mb-2">Tech Stack (Comma Separated)</label>
                    <input id="tech" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="tech" value="{{ old('tech', $project->tech ? implode(', ', $project->tech) : '') }}" required placeholder="e.g. Next.js, Tailwind, SQLite" />
                </div>

                <!-- Categories -->
                <div>
                    <label for="categories" class="block font-medium text-sm text-gray-700 mb-2">Categories (Comma Separated)</label>
                    <input id="categories" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="categories" value="{{ old('categories', $project->categories ? implode(', ', $project->categories) : '') }}" placeholder="e.g. Web App, AI" />
                </div>

                <!-- Live Demo -->
                <div>
                    <label for="liveDemo" class="block font-medium text-sm text-gray-700 mb-2">Live Demo URL (use # if none)</label>
                    <input id="liveDemo" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="liveDemo" value="{{ old('liveDemo', $project->liveDemo) }}" />
                </div>

                <!-- Github -->
                <div>
                    <label for="github" class="block font-medium text-sm text-gray-700 mb-2">GitHub URL (use # if none)</label>
                    <input id="github" class="w-full border border-gray-200 bg-gray-50 focus:bg-white rounded-lg shadow-sm px-4 py-2 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium text-gray-900" type="text" name="github" value="{{ old('github', $project->github) }}" />
                </div>
            </div>

            <!-- Image -->
            <div class="mt-4 pt-4 border-t border-gray-100">
                <label for="image" class="block font-medium text-sm text-gray-700 mb-3">Project Cover Image</label>
                @if($project->exists && $project->image)
                    <div class="mb-4 inline-block relative rounded-lg overflow-hidden border border-gray-200">
                        <img src="{{ !Str::startsWith($project->image, 'http') ? env('APP_URL') . '/api' . $project->image : $project->image }}" alt="Current Image" class="h-32 object-cover">
                    </div>
                @endif
                <input id="image" type="file" name="image" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 transition-all" {{ $project->exists ? '' : 'required' }} />
            </div>

            <div class="flex items-center justify-end mt-8 pt-6 border-t border-gray-100">
                <a href="{{ route('admin.projects.index') }}" class="px-5 py-2.5 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors mr-4 font-medium text-sm shadow-sm">
                    Cancel
                </a>
                <button type="submit" class="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium text-sm">
                    Save Project
                </button>
            </div>
        </form>

    </div>
</x-admin-layout>
