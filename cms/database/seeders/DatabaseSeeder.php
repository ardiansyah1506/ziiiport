<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Database\Seeders\ProjectSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin credentials for Filament
        User::firstOrCreate(
            ['email' => 'admin@synora.com'],
            [
                'name' => 'Admin',
                'password' => Hash::make('password'),
            ]
        );

        // Project initial records mapping categories and tech stacks
        // $this->call([
        //     ProjectSeeder::class,
        // ]);
    }
}
