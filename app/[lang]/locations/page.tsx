import LocationItem from "@/components/location-item";
import sampleLocations from "@/util/locations";
import PageHeader from "@/components/page-header";
import { getTranslations } from "@/lib/translation";

export default async function Locations({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const t = await getTranslations(lang, "locations");

  return (
    <div className="container mx-auto m-5">
      <PageHeader>{t.title}</PageHeader>
      <p className="text-center text-xl lato">{t.intro}</p>
      <div className="flex flex-col items-center space-y-8 m-12">
        {sampleLocations.map((location) => (
          <LocationItem key={location.name} location={location} />
        ))}
      </div>
    </div>
  );
}
