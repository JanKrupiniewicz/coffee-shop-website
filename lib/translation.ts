import "server-only";

const sections = [
  "home",
  "coffeeTea",
  "contact",
  "locations",
  "header",
  "catering",
];
export type Translations = Record<string, any>;

export async function getTranslations(
  lang: string,
  section: string
): Promise<Translations> {
  if (!sections.includes(section)) {
    throw new Error(`Invalid section: ${section}`);
  }

  const translations: Translations = await import(
    `../public/lang/${lang}/${section}.json`
  );
  return translations;
}
