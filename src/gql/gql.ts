/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "query getCertificateCategories {\n  certificateCategories {\n    id\n    name\n    slug\n  }\n}": typeof types.GetCertificateCategoriesDocument,
    "query getCertificates {\n  certificates {\n    id\n    name\n    issuer\n    issuerImage {\n      url\n    }\n    categories {\n      id\n      name\n      slug\n    }\n    description\n    file {\n      url\n    }\n    certificateCode\n    issued\n    sourceUrl\n  }\n}": typeof types.GetCertificatesDocument,
    "query getProfile {\n  profiles {\n    address\n    alias\n    description\n    email\n    fullName\n    socialMedia {\n      title\n      url\n    }\n    dateOfBirth\n    phone\n    image {\n      url\n    }\n  }\n}": typeof types.GetProfileDocument,
    "query getProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    overview\n    liveDemo\n    sourceUrl\n    technologies {\n      id\n      name\n      url\n    }\n    client\n    duration\n    projectStatus\n    keyFeatures\n    galeries {\n      id\n      url\n    }\n  }\n}": typeof types.GetProjectBySlugDocument,
    "query getProjectCategories {\n  projectCategories {\n    id\n    name\n    slug\n  }\n}": typeof types.GetProjectCategoriesDocument,
    "query getProjectsPagination($first: Int!, $skip: Int!, $where: ProjectWhereInput) {\n  projects(first: $first, skip: $skip, orderBy: createdAt_DESC, where: $where) {\n    id\n    name\n    slug\n    overview\n    liveDemo\n    sourceUrl\n    categories {\n      id\n      name\n      slug\n    }\n    technologies {\n      id\n      name\n      slug\n    }\n    galeries {\n      url\n    }\n  }\n}": typeof types.GetProjectsPaginationDocument,
    "query getResumes {\n  educations {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    gpa\n    maxScore\n  }\n  experiences {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    technologies {\n      id\n    }\n  }\n}": typeof types.GetResumesDocument,
    "query getSkills {\n  skills {\n    id\n    icon\n    name\n    description\n  }\n}": typeof types.GetSkillsDocument,
    "query getTechnologies {\n  technologies {\n    id\n    name\n    slug\n    url\n  }\n}": typeof types.GetTechnologiesDocument,
};
const documents: Documents = {
    "query getCertificateCategories {\n  certificateCategories {\n    id\n    name\n    slug\n  }\n}": types.GetCertificateCategoriesDocument,
    "query getCertificates {\n  certificates {\n    id\n    name\n    issuer\n    issuerImage {\n      url\n    }\n    categories {\n      id\n      name\n      slug\n    }\n    description\n    file {\n      url\n    }\n    certificateCode\n    issued\n    sourceUrl\n  }\n}": types.GetCertificatesDocument,
    "query getProfile {\n  profiles {\n    address\n    alias\n    description\n    email\n    fullName\n    socialMedia {\n      title\n      url\n    }\n    dateOfBirth\n    phone\n    image {\n      url\n    }\n  }\n}": types.GetProfileDocument,
    "query getProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    overview\n    liveDemo\n    sourceUrl\n    technologies {\n      id\n      name\n      url\n    }\n    client\n    duration\n    projectStatus\n    keyFeatures\n    galeries {\n      id\n      url\n    }\n  }\n}": types.GetProjectBySlugDocument,
    "query getProjectCategories {\n  projectCategories {\n    id\n    name\n    slug\n  }\n}": types.GetProjectCategoriesDocument,
    "query getProjectsPagination($first: Int!, $skip: Int!, $where: ProjectWhereInput) {\n  projects(first: $first, skip: $skip, orderBy: createdAt_DESC, where: $where) {\n    id\n    name\n    slug\n    overview\n    liveDemo\n    sourceUrl\n    categories {\n      id\n      name\n      slug\n    }\n    technologies {\n      id\n      name\n      slug\n    }\n    galeries {\n      url\n    }\n  }\n}": types.GetProjectsPaginationDocument,
    "query getResumes {\n  educations {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    gpa\n    maxScore\n  }\n  experiences {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    technologies {\n      id\n    }\n  }\n}": types.GetResumesDocument,
    "query getSkills {\n  skills {\n    id\n    icon\n    name\n    description\n  }\n}": types.GetSkillsDocument,
    "query getTechnologies {\n  technologies {\n    id\n    name\n    slug\n    url\n  }\n}": types.GetTechnologiesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getCertificateCategories {\n  certificateCategories {\n    id\n    name\n    slug\n  }\n}"): (typeof documents)["query getCertificateCategories {\n  certificateCategories {\n    id\n    name\n    slug\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getCertificates {\n  certificates {\n    id\n    name\n    issuer\n    issuerImage {\n      url\n    }\n    categories {\n      id\n      name\n      slug\n    }\n    description\n    file {\n      url\n    }\n    certificateCode\n    issued\n    sourceUrl\n  }\n}"): (typeof documents)["query getCertificates {\n  certificates {\n    id\n    name\n    issuer\n    issuerImage {\n      url\n    }\n    categories {\n      id\n      name\n      slug\n    }\n    description\n    file {\n      url\n    }\n    certificateCode\n    issued\n    sourceUrl\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getProfile {\n  profiles {\n    address\n    alias\n    description\n    email\n    fullName\n    socialMedia {\n      title\n      url\n    }\n    dateOfBirth\n    phone\n    image {\n      url\n    }\n  }\n}"): (typeof documents)["query getProfile {\n  profiles {\n    address\n    alias\n    description\n    email\n    fullName\n    socialMedia {\n      title\n      url\n    }\n    dateOfBirth\n    phone\n    image {\n      url\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    overview\n    liveDemo\n    sourceUrl\n    technologies {\n      id\n      name\n      url\n    }\n    client\n    duration\n    projectStatus\n    keyFeatures\n    galeries {\n      id\n      url\n    }\n  }\n}"): (typeof documents)["query getProjectBySlug($slug: String!) {\n  project(where: {slug: $slug}) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    overview\n    liveDemo\n    sourceUrl\n    technologies {\n      id\n      name\n      url\n    }\n    client\n    duration\n    projectStatus\n    keyFeatures\n    galeries {\n      id\n      url\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getProjectCategories {\n  projectCategories {\n    id\n    name\n    slug\n  }\n}"): (typeof documents)["query getProjectCategories {\n  projectCategories {\n    id\n    name\n    slug\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getProjectsPagination($first: Int!, $skip: Int!, $where: ProjectWhereInput) {\n  projects(first: $first, skip: $skip, orderBy: createdAt_DESC, where: $where) {\n    id\n    name\n    slug\n    overview\n    liveDemo\n    sourceUrl\n    categories {\n      id\n      name\n      slug\n    }\n    technologies {\n      id\n      name\n      slug\n    }\n    galeries {\n      url\n    }\n  }\n}"): (typeof documents)["query getProjectsPagination($first: Int!, $skip: Int!, $where: ProjectWhereInput) {\n  projects(first: $first, skip: $skip, orderBy: createdAt_DESC, where: $where) {\n    id\n    name\n    slug\n    overview\n    liveDemo\n    sourceUrl\n    categories {\n      id\n      name\n      slug\n    }\n    technologies {\n      id\n      name\n      slug\n    }\n    galeries {\n      url\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getResumes {\n  educations {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    gpa\n    maxScore\n  }\n  experiences {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    technologies {\n      id\n    }\n  }\n}"): (typeof documents)["query getResumes {\n  educations {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    gpa\n    maxScore\n  }\n  experiences {\n    id\n    resume {\n      organization\n      role\n      startDate\n      endDate\n      organizationLogo {\n        url\n      }\n      textRecords\n      groupRecords {\n        id\n        label\n        textRecords\n        resumeRecords {\n          id\n          record\n          startDate\n          endDate\n          galeries {\n            id\n            url\n          }\n        }\n        galeries {\n          id\n          url\n        }\n      }\n      galeries {\n        id\n        url\n      }\n    }\n    technologies {\n      id\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getSkills {\n  skills {\n    id\n    icon\n    name\n    description\n  }\n}"): (typeof documents)["query getSkills {\n  skills {\n    id\n    icon\n    name\n    description\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getTechnologies {\n  technologies {\n    id\n    name\n    slug\n    url\n  }\n}"): (typeof documents)["query getTechnologies {\n  technologies {\n    id\n    name\n    slug\n    url\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;