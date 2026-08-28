import ProjectDetailClient from "@/components/ProjectDetailClient";
import { notFound } from "next/navigation";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  let project = null;
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/projects/${resolvedParams.slug}`, { cache: "no-store" });
    if (res.ok) {
        project = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch project:", error);
  }

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
