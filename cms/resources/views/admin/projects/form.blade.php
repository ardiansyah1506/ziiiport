<x-admin-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ $project->exists ? 'Edit Project' : 'Create Project' }}
        </h2>
    </x-slot>

    <div class="px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6">
            
            @if ($errors->any())
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                    <ul class="list-disc pl-5">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ $project->exists ? route('admin.projects.update', $project) : route('admin.projects.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                @if($project->exists)
                    @method('PUT')
                @endif

                <!-- Title -->
                <div class="mb-4">
                    <label for="title" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
                    <input id="title" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="text" name="title" value="{{ old('title', $project->title) }}" required autofocus />
                </div>

                <!-- Slug -->
                <div class="mb-4">
                    <label for="slug" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Slug</label>
                    <input id="slug" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="text" name="slug" value="{{ old('slug', $project->slug) }}" required />
                    <p class="text-sm text-gray-500 mt-1">Must be unique (e.g., nexus-analytics-platform)</p>
                </div>

                <!-- Role -->
                <div class="mb-4">
                    <label for="role" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Role</label>
                    <input id="role" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="text" name="role" value="{{ old('role', $project->role) }}" required />
                </div>

                <!-- Timeline -->
                <div class="mb-4">
                    <label for="timeline" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Timeline</label>
                    <input id="timeline" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="text" name="timeline" value="{{ old('timeline', $project->timeline) }}" required />
                </div>

                <!-- Description -->
                <div class="mb-4">
                    <label for="description" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                    <textarea id="description" name="description" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" rows="5" required>{{ old('description', $project->description) }}</textarea>
                </div>

                <!-- Tech -->
                <div class="mb-4">
                    <label for="tech" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Tech Stack (Comma Separated)</label>
                    <input id="tech" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="text" name="tech" value="{{ old('tech', $project->tech ? implode(', ', $project->tech) : '') }}" required placeholder="e.g. Next.js, Tailwind, SQLite" />
                </div>

                <!-- Categories -->
                <div class="mb-4">
                    <label for="categories" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Categories (Comma Separated)</label>
                    <input id="categories" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="text" name="categories" value="{{ old('categories', $project->categories ? implode(', ', $project->categories) : '') }}" placeholder="e.g. Web App, AI" />
                </div>

                <!-- Image -->
                <div class="mb-4">
                    <label for="image" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Image Upload</label>
                    @if($project->exists && $project->image)
                        <div class="mb-2">
                            <img src="{{ Str::startsWith($project->image, 'http') ? $project->image : 'http://127.0.0.1:8000' . $project->image }}" alt="Current Image" class="h-32 object-cover rounded shadow">
                        </div>
                    @endif
                    <input id="image" type="file" name="image" class="w-full text-gray-700 dark:text-gray-300 mt-2" {{ $project->exists ? '' : 'required' }} />
                </div>

                <!-- Live Demo -->
                <div class="mb-4">
                    <label for="liveDemo" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">Live Demo URL</label>
                    <input id="liveDemo" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="url" name="liveDemo" value="{{ old('liveDemo', $project->liveDemo) }}" />
                </div>

                <!-- Github -->
                <div class="mb-4">
                    <label for="github" class="block font-medium text-gray-700 dark:text-gray-300 mb-1">GitHub URL</label>
                    <input id="github" class="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 bg-white border rounded-md shadow-sm p-2" type="url" name="github" value="{{ old('github', $project->github) }}" />
                </div>

                <div class="flex items-center justify-end mt-6">
                    <a href="{{ route('admin.projects.index') }}" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 transition mr-4 shadow-sm">
                        Cancel
                    </a>
                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm font-semibold">
                        Save Project
                    </button>
                </div>
            </form>

        </div>
    </div>
</x-admin-layout>
