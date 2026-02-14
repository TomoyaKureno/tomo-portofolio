import { getProjects, getProjectCategories } from "@/src/lib/hygraph.server";
import ProjectsClient from "./ProjectsClient";

export const revalidate = 3600;

const PROJECT_CHUNK_SIZE = 50;

export default async function Projects() {
  const allProjects = [] as Awaited<ReturnType<typeof getProjects>>["projects"];
  let skip = 0;

  while (true) {
    const page = await getProjects({
      first: PROJECT_CHUNK_SIZE,
      skip,
    });

    allProjects.push(...page.projects);

    if (page.projects.length < PROJECT_CHUNK_SIZE) {
      break;
    }

    skip += PROJECT_CHUNK_SIZE;
  }

  const categories = await getProjectCategories();

  return <ProjectsClient initialProjects={allProjects} categories={categories} />;
}
