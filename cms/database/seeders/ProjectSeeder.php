<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Nexus Analytics Platform',
                'slug' => 'nexus-analytics-platform',
                'role' => 'Lead Developer',
                'timeline' => '2023.11',
                'description' => 'An enterprise-grade analytics dashboard processing millions of events daily. Built with a focus on high-performance data visualization and real-time reporting for marketing teams.',
                'tech' => ['SaaS', 'Next.js', 'PostgreSQL'],
                'categories' => ['Web App', 'SaaS'],
                'image' => 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg',
                'liveDemo' => '#',
                'github' => '#',
            ],
            [
                'title' => 'Orbit Deploy',
                'slug' => 'orbit-deploy',
                'role' => 'Backend Engineer',
                'timeline' => '2023.08',
                'description' => 'A blazingly fast deployment CLI for static sites. Automates CI/CD pipelines directly from the terminal with sub-second execution times and distributed caching.',
                'tech' => ['CLI Tool', 'Go'],
                'categories' => ['Automation/AI'],
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJIpr7UiXHPsdf8Uyx18pb_IA_5hFo2rAYRZflQ7LBoE4GGOYIcQR4Uu1i4Ig-j2q_IaOD4ze7XWP8Z5SK4ysdq89_JVgQ4pHFzDfDxq8Y6fKUn22cKmrnwhqSUrUaNg8Ktlf4weBbpF_LZRZqfBKeMoySTz97L8uG1qPh145oHLN2wVCopSJ19nvdsB-eVVhVVGibSW8khMx0omXJmBEWQzcA39HxUYBPAHeX81DPau4jXKgrBZyQzw',
                'liveDemo' => '#',
                'github' => '#',
            ],
            [
                'title' => 'Cognitive Agent UI',
                'slug' => 'cognitive-agent-ui',
                'role' => 'Frontend Architect',
                'timeline' => '2024.01',
                'description' => 'A specialized interface for orchestrating multi-agent AI systems. Allows users to visualize reasoning chains and manage context windows across disparate tasks in real-time.',
                'tech' => ['AI / LLM', 'Python', 'React'],
                'categories' => ['Automation/AI', 'Web App'],
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC19snssACECLRhl5_1JLfR39_BGpphzitvwxAGT6g_WLFbSloaKLpDSWBroDInnwF1h05HmsoxZqycEU587PZjW1L7IMGIh3MYdIJ-V47aBlmAzNhkzXjM2x5svB533Ddmk0e65hj3Fo9VbtYN33X1FXcRhEOT4gelONJZn--xhDQ0gGfsQLx60q6FL8YEKFVAKjEdBG4sxCJZ-goJyY403rWxxQ3D2iGSoBIDIH7OXfd4DRXHuPNBbA',
                'liveDemo' => '#',
                'github' => '#',
            ],
            [
                'title' => 'Senta Print Administrative',
                'slug' => 'senta-print-admin',
                'role' => 'Full Stack Developer',
                'timeline' => '2023.10 - 2023.12',
                'description' => 'An enterprise-grade administrative dashboard for managing print orders, customer databases, and tracking invoice history dynamically.',
                'tech' => ['Laravel', 'Tailwind', 'PostgreSQL', 'Livewire'],
                'categories' => ['Web App'],
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJIpr7UiXHPsdf8Uyx18pb_IA_5hFo2rAYRZflQ7LBoE4GGOYIcQR4Uu1i4Ig-j2q_IaOD4ze7XWP8Z5SK4ysdq89_JVgQ4pHFzDfDxq8Y6fKUn22cKmrnwhqSUrUaNg8Ktlf4weBbpF_LZRZqfBKeMoySTz97L8uG1qPh145oHLN2wVCopSJ19nvdsB-eVVhVVGibSW8khMx0omXJmBEWQzcA39HxUYBPAHeX81DPau4jXKgrBZyQzw',
                'liveDemo' => '#',
                'github' => '#',
            ]
        ];

        Project::truncate();

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
