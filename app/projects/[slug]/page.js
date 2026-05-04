import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "@/lib/projects";
import ProjectPageClient from "./ProjectPageClient";

// Generate static params for all projects
export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — M-Architect`,
    description: project.scope,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = allProjects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? allProjects[index - 1] : null;
  const next = index < allProjects.length - 1 ? allProjects[index + 1] : null;

  return <ProjectPageClient project={project} prev={prev} next={next} />;
}
