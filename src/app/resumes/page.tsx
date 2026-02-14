import { getResumes } from "@/src/lib/hygraph.server";
import ResumesClient from "./ResumesClient";

export const revalidate = 3600;

export default async function Resumes() {
	const resumes = await getResumes();

	return (
		<ResumesClient
			resumes={resumes}
		/>
	);
}
