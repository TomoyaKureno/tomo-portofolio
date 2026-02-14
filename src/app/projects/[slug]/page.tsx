import ProjectDetailClient from "@/src/app/projects/[slug]/ProjectDetailClient";
import { getProjectBySlug, getProjects } from "@/src/lib/hygraph.server";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

const PROJECT_CHUNK_SIZE = 50;

export async function generateStaticParams() {
  const slugs: Array<{ slug: string }> = [];
  let skip = 0;

  while (true) {
    const page = await getProjects({
      first: PROJECT_CHUNK_SIZE,
      skip,
    });

    const validSlugs = page.projects
      .map((project) => project.slug)
      .filter((slug): slug is string => Boolean(slug))
      .map((slug) => ({ slug }));

    slugs.push(...validSlugs);

    if (page.projects.length < PROJECT_CHUNK_SIZE) {
      break;
    }

    skip += PROJECT_CHUNK_SIZE;
  }

  return slugs;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
