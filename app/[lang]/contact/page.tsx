import ContactForm from "@/components/form";
import PageHeader from "@/components/page-header";
import { getTranslations } from "@/lib/translation";

export default async function Contact({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const t = await getTranslations(lang, "contact");

  return (
    <div className="m-5 text-center">
      <PageHeader>{t.title}</PageHeader>
      <ContactForm />
    </div>
  );
}
