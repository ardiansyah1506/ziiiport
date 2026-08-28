# Synora Digital Portfolio (Full-Stack Setup)

This project is a modern, enterprise-grade full-stack digital portfolio. It features a stunning, highly animated frontend interface powered by Next.js and a highly robust decoupled Content Management System (CMS) backend built on Laravel 11 and Filament.

---

## 🏗️ Architecture Overview

The application utilizes a **Decoupled (Headless) Architecture**:
- **Frontend (Headless Next.js)**: Responsible exclusively for rendering the UI, preserving SEO via Server-Side Rendering (SSR), and animating complex components via Framer Motion.
- **Backend (Laravel API + CMS)**: Stores project data via SQLite, manages content via the Filament v3 Admin GUI, and serves REST API payloads to the frontend.

## 📂 Project Structure

```text
portfolio/
├── cms/                         # LARAVEL BACKEND DIRECTORY
│   ├── app/Models/              # Database Models (Project, User)
│   ├── app/Filament/Resources/  # CMS Admin Panel Logic (ProjectResource)
│   ├── database/migrations/     # Database Schemas
│   ├── database/seeders/        # Initial Dummy Data & Admin Users
│   ├── routes/api.php           # API Endpoints exposed to Next.js
│   └── database.sqlite          # SQLite Zero-Config Database
│
├── src/                         # NEXT.JS FRONTEND DIRECTORY
│   ├── app/                     # App Router (Pages & Layouts)
│   │   ├── projects/            # Project Listing Page (SSR + Fetch)
│   │   └── projects/[slug]/     # Project Detail Page (SSR + Fetch)
│   ├── components/              # Interactive Client Components (Islands)
│   └── data/                    # (Legacy) Static Datasets
│
├── tailwind.config.ts           # Global UI System & Tokens
└── next.config.ts               # Webpack & Build Config
```

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript & React 19
- **Styling**: Tailwind CSS v4 (Custom color spaces & utility logic)
- **Animations**: Framer Motion (Client-side wrappers)

### Backend
- **Framework**: Laravel 11
- **Language**: PHP 8.2+
- **Database**: SQLite (Designed for lightweight zero-config deployment)
- **Admin Panel**: Filament CMS v3 (For rich dashboard CRUD)

---

## 🚀 Getting Started (Development)

To run the full stack locally, you must launch two separate terminals to host both the Node.js Server and the PHP Server.

### 1. Starting the Target Backend (CMS API)
Open your first terminal and navigate to the backend directory:
```bash
cd cms
php artisan serve
```
*The backend API will run on `http://127.0.0.1:8000`.*

### 2. Starting the Frontend (Next.js)
Open your second terminal and navigate to the root directory:
```bash
npm run dev
```
*The frontend view will run on `http://localhost:3000`.*

---

## 🔐 Content Management System (CMS)

To add, edit, or delete projects dynamically, login to the backend dashboard.

- **Admin URL**: `http://127.0.0.1:8000/admin`
- **Default Email**: `admin@synora.com`
- **Default Password**: `password`

*The frontend `Projects` UI will automatically detect new additions and instantly mirror the latest database state locally.*

---

## 📡 API Endpoints Reference

The Next.js Frontend Server relies on the following endpoints provided by Laravel to fetch data safely.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | Outputs a JSON array of all projects, sorted by latest. |
| `GET` | `/api/projects/{slug}` | Returns a single JSON object corresponding to the project slug. |

*(API configuration currently supports auto-enabled wildcard CORS natively injected by Laravel 11).*
