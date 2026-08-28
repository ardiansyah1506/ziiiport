import ProjectsClient from "@/components/ProjectsClient";

export default async function Projects() {
  let initialProjects = [];
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    const res = await fetch(`${apiUrl}/projects`, { cache: "no-store" });
    if (res.ok) {
        initialProjects = await res.json();
    } else {
        console.error("API error:", res.status);
    }
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return <ProjectsClient initialProjects={initialProjects} />;
}
