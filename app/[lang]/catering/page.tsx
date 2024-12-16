import PageHeader from "@/components/page-header";
import ImageGallery from "@/components/image-gallery";
import { getTranslations } from "@/lib/translation";

export default async function Catering({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const t = await getTranslations(lang, "catering");

  return (
    <div className="m-5 text-center">
      <PageHeader>{t.title}</PageHeader>
      <div className="space-y-5 m-10 text-xl lato">
        <p>{t.info}</p>
        <p className="uppercase text-3xl font-bold">{t.contact}</p>
        <p className="text-2xl font-bold">
          <a href="mailto:someone@example.com">info@NextCoffee.com</a>
        </p>
      </div>
      <ImageGallery />
    </div>
  );
}
