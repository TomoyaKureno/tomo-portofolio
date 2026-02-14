import ContactClient from "@/src/app/contact/ContactClient";

export const revalidate = 3600;

export default function ContactPage() {
  return <ContactClient />;
}
