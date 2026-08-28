# Synora Digital Portfolio (Full-Stack Setup)

This project is a modern, enterprise-grade full-stack digital portfolio. It features a stunning, highly animated frontend interface powered by Next.js and a highly robust, intentionally lightweight Decoupled Content Management System (CMS) backend built fundamentally on pure Laravel 11 without bulky third-party UI ecosystem overhead.

---

## 🏗️ Architecture Overview

The application utilizes a **Decoupled (Headless) Architecture**:
- **Frontend (Headless Next.js)**: Responsible exclusively for rendering the UI, maximizing SEO capabilities via Server-Side Rendering (SSR), and orchestrating micro-interactions using Framer Motion.
- **Backend (Vanilla Laravel API + CMS)**: Stores project capabilities natively via SQLite, exposes simple JSON REST APIs for the Next.js Client to consume, and manages database modifications securely via a **100% Custom Native Blade + Tailwind CDN Admin Dashboard**. 

*Note: The backend administrative interface intentionally bypasses eco-systems like Filament, Livewire, or Laravel Breeze to remain as robust, frictionless, and bloat-free as possible.*

## 📂 Project Structure

```text
portfolio/
├── cms/                         # LARAVEL BACKEND DIRECTORY
│   ├── app/Http/Controllers/    # Native AuthController & API Resources
│   ├── app/Models/              # Database Object Models (Project, User)
│   ├── resources/views/         # Pure Blade UI Templates (Admin Layout, Forms, Tables)
│   ├── database/migrations/     # Database Schema Architectures
│   ├── database/seeders/        # Bootstraps baseline data + Default Admin credentials
│   ├── routes/web.php           # Admin panel secure routing mapping
│   ├── routes/api.php           # Unprotected JSON APIs mapped mapped exclusively for frontend
│   └── database.sqlite          # SQLite Zero-Config Database
│
├── src/                         # NEXT.JS FRONTEND DIRECTORY
│   ├── app/                     # App Next.js 15 Router (Pages & Layouts)
│   │   ├── projects/            # Realtime Project Index (SSR + Dynamic Fetching)
│   │   └── projects/[slug]/     # Realtime Project Details (SSR + Dynamic Fetching)
│   └── components/              # Interactive Client Capabilities logic
│
├── tailwind.config.ts           # Frontend Global UI System & Tokens
├── .env                         # Core config mapping (e.g NEXT_PUBLIC_API_URL)
└── next.config.ts               # Runtime routing and compiler optimization
```

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript & React 19
- **Styling**: Tailwind CSS v4 (Custom color spaces & utility variables)
- **Animations**: Framer Motion

### Backend
- **Framework**: Laravel 11
- **Language**: PHP 8.2+
- **Database**: SQLite
- **Interface**: Custom Blade Views orchestrated natively utilizing Tailwind CDN.
- *(Zero NPM footprint required for the backend repository!).*

---

## 🚀 Environment Setup & Compilation

You must host both platforms simultaneously for the application API loop to communicate bi-directionally.

### 1. Booting the CMS Backend (API Core)
The backend does not require NPM nor Webpack. It serves API data natively via PHP.
```bash
cd cms
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve
```
*The core backend API engine will run on locally exposed `http://127.0.0.1:8000`.*

### 2. Booting the Interactive Frontend (Next.js)
On an entirely separate terminal, navigate to the frontend directory:
```bash
npm install
npm run dev
```
*The master visual client view operates on `http://localhost:3000`.*

---

## 🔐 Content Management Dashboard

Project assets, documentation, and tags can be managed securely directly from the custom interface. By default, the `DatabaseSeeder` will bootstrap an administrative identity.

- **Admin URL Path**: `http://127.0.0.1:8000/login`
- **Default Login Email**: `admin@synora.com`
- **Default Credentials**: `password`

*The frontend `Projects` UI maintains a Server-Sent architectural link. All updates saved through this custom admin UI will immediately echo on the portfolio UI instantly.*

---

## 📡 API Payload Schema Architecture 

The Next.js Frontend Server relies inherently on two major endpoints established natively by Laravel to dynamically synthesize pages.

| HTTP Method | Core API Endpoint | Purpose & Output |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | Serves an uninterrupted JSON array map of all active projects, cascading from newest backward. |
| `GET` | `/api/projects/{slug}` | Identifies and isolates a single JSON dictionary associated purely with a single exact project namespace. |
