import type { Metadata } from "next";
import { Fraunces, Lato } from "next/font/google";
import "../globals.css";

import MainHeader from "@/components/main-header/main-header";
import MainFooter from "@/components/main-footer/main-footer";
import { getTranslations } from "@/lib/translation";

const fraunces_init = Fraunces({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-fraunces",
});

const lato_init = Lato({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "NextCoffee Bar",
  description: "Great coffee, great people, great times.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const t = await getTranslations(lang, "header");

  return (
    <html lang="en">
      <body
        className={`bg-gray-100 flex flex-col min-h-screen ${fraunces_init.variable} ${lato_init.variable}`}
      >
        <div className="flex-1">
          <MainHeader t={t} />
          <main>{children}</main>
        </div>
        <MainFooter />
      </body>
    </html>
  );
}
