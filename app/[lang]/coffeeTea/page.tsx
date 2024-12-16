import Image from "next/image";

import sampleTeas from "@/util/tea";
import TeaItem from "@/components/tea-item";
import fairTradeLogo from "@/assets/fairtrade-logos.webp";
import TeaSelectionsLogo from "@/assets/tea-cups-3000x3000.webp";
import PageHeader from "@/components/page-header";
import { getTranslations } from "@/lib/translation";

export default async function CoffeeTea({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const t = await getTranslations(lang, "coffeeTea");

  return (
    <div className="m-5">
      <PageHeader>{t.title}</PageHeader>
      <div className="space-y-5 text-center text-xl lato">
        <p>{t.intro}</p>
        <p>{t.about}</p>
      </div>
      <Image
        src={fairTradeLogo}
        alt="Coffee"
        width={400}
        className="m-auto my-5"
      />
      <PageHeader>{t.teaSelection}</PageHeader>
      <Image
        src={TeaSelectionsLogo}
        alt="Tea"
        width={700}
        className="m-auto my-5"
      />
      <div>
        {sampleTeas.map((tea) => (
          <TeaItem key={tea.name} tea={tea} />
        ))}
      </div>
    </div>
  );
}
