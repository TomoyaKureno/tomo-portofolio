import CertificatesClient from "@/src/app/certificates/CertificatesClient";
import { getCertificateCategories, getCertificates } from "@/src/lib/hygraph.server";

export const revalidate = 3600;

export default async function CertificatesPage() {
  const certificates = await getCertificates();
  const categories = await getCertificateCategories();

  return <CertificatesClient certificates={certificates} categories={categories} />;
}
