import type { Metadata } from "next";
import "./globals.css";

import MainHeader from "@/components/main-header/main-header";
import MainFooter from "@/components/main-footer/main-footer";

export const metadata: Metadata = {
  title: "NextCoffee Bar",
  description: "Great coffee, great people, great times.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <MainFooter/>
      </body>
    </html>
  );
}
