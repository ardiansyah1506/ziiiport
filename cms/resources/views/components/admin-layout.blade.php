<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CMS Admin Panel</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 font-sans antialiased">
    
    <nav class="bg-white dark:bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="{{ route('admin.projects.index') }}" class="text-xl font-bold dark:text-white">Admin Dashboard</a>
                    <a href="{{ route('admin.projects.index') }}" class="ml-8 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">Projects</a>
                </div>
                <div class="flex items-center">
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit" class="text-sm font-medium text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">
                            Log Out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </nav>

    @if(isset($header))
    <header class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-sm">
        <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            {{ $header }}
        </div>
    </header>
    @endif

    <main class="py-8">
        {{ $slot }}
    </main>

</body>
</html>
