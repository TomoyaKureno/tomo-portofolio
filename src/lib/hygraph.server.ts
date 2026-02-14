import {
  GetCertificateCategoriesDocument,
  GetCertificatesDocument,
  GetProfileDocument,
  GetProjectBySlugDocument,
  GetProjectCategoriesDocument,
  GetProjectsPaginationDocument,
  GetResumesDocument,
  GetSkillsDocument,
  GetTechnologiesDocument,
  ProjectWhereInput,
} from "../gql/graphql";
import { hygraphFetcher } from "./hygraphFetcher";

export async function getProfile() {
  const data = await hygraphFetcher(GetProfileDocument);
  return data.profiles[0];
}

export async function getSkills() {
  const data = await hygraphFetcher(GetSkillsDocument);
  return data.skills;
}

type GetProjectsParams = {
  first: number;
  skip: number;
  search?: string;
  categorySlug?: string;
};

export async function getProjects(params: GetProjectsParams) {
  const where: ProjectWhereInput = {};

  if (params.search) {
    where.name_contains = params.search;
  }

  if (params.categorySlug) {
    where.categories_some = {
      slug: params.categorySlug,
    };
  }

  return hygraphFetcher(GetProjectsPaginationDocument, {
    first: params.first,
    skip: params.skip,
    where: Object.keys(where).length ? where : undefined,
  });
}

export async function getProjectBySlug(slug: string) {
  const data = await hygraphFetcher(GetProjectBySlugDocument, { slug });
  return data.project;
}

export async function getCertificates() {
  const data = await hygraphFetcher(GetCertificatesDocument);
  return data.certificates;
}

export async function getProjectCategories() {
  const data = await hygraphFetcher(GetProjectCategoriesDocument);
  return data.projectCategories;
}

export async function getCertificateCategories() {
  const data = await hygraphFetcher(GetCertificateCategoriesDocument);
  return data.certificateCategories;
}

export async function getTechnologies() {
  const data = await hygraphFetcher(GetTechnologiesDocument);
  return data.technologies;
}

export async function getResumes() {
  const data = await hygraphFetcher(GetResumesDocument);
  return data;
}
