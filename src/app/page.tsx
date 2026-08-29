import HomeClient from "@/components/HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  let initialProjects = [];
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    const res = await fetch(`${apiUrl}/projects`, { cache: "no-store" });
    if (res.ok) {
        const allProjects = await res.json();
        initialProjects = allProjects.filter((p: any) => p.is_featured);
    } else {
        console.error("API error:", res.status);
    }
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return <HomeClient initialProjects={initialProjects} />;
}
