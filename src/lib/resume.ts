import { GetResumesQuery } from "@/src/gql/graphql";

type Education = GetResumesQuery["educations"][number];
type Experience = GetResumesQuery["experiences"][number];

type ResumeRecord = Education | Experience;

const getSortYear = (endDate: string | null | undefined): number => {
  return endDate ? new Date(endDate).getFullYear() : new Date().getFullYear();
};

export const sortResumeByLatestEndYear = <T extends ResumeRecord>(records: T[]): T[] => {
  return [...records].sort((a, b) => getSortYear(b.resume.endDate) - getSortYear(a.resume.endDate));
};
