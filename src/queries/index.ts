import { gql } from 'graphql-request';

export const GET_PROFILE = gql`
  query getProfile {
    profiles {
      address
      alias
      description
      email
      fullName
      socialMedia {
        title
        url
      }
      dateOfBirth
      phone
      role
      image {
        url
      }
    }
  }
`;

export const GET_SKILLS = gql`
  query getSkills {
    skills {
      id
      icon
      name
      description
    }
  }
`

export const GET_CERTIFICATES = gql`
  query getCertificates {
    certificates {
      id
      name
      issuer
      issuerImage {
        url
      }
      certificateCategory
      description
      file {
        url
      }
      certificateCode
      issued
      sourceUrl
    }
  }
`

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      projectCategory
      overview
      liveDemo
      sourceUrl
      technologies
      slug
      galeries {
        url
      }
    }
  }
`

export const GET_PROJECT_BY_SLUG = gql`
  query getProjectBySlug($slug: String!) {
    project(where: {slug: $slug}) {
      id
      name
      projectCategory
      overview
      liveDemo
      sourceUrl
      technologies
      client
      duration
      projectStatus
      keyFeatures
      galeries {
        id
        url
      }
    }
  }
`

export const GET_RESUMES = gql`
  query getResumes {
    educations {
      id
      resume {
        organization
        role
        startDate
        endDate
        textRecords
        groupRecords {
          id
          label
          textRecords
          resumeRecords {
            id
            record
            startDate
            endDate
            galeries {
              id
              url
            }
          }
          galeries {
            id
            url
          }
        }
        galeries {
          id
          url
        }
      }
      gpa
      maxScore
    }
    experiences {
      id
      resume {
        organization
        role
        startDate
        endDate
        textRecords
        groupRecords {
          id
          label
          textRecords
          resumeRecords {
            id
            record
            startDate
            endDate
            galeries {
              id
              url
            }
          }
          galeries {
            id
            url
          }
        }
        galeries {
          id
          url
        }
      }
      technologies
    }
  }
`;