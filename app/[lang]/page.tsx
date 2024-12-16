import ImageSlider from "@/components/image-slider/image-slider";
import PageHeader from "@/components/page-header";
import { getTranslations } from "@/lib/translation";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const t = await getTranslations(lang, "home");

  return (
    <div className="m-5 text-center">
      <PageHeader>{t.title}</PageHeader>
      <div className="space-y-5 text-xl lato">
        <p>{t.intro}</p>
        <p>{t.about}</p>
      </div>
      <ImageSlider />
    </div>
  );
}
