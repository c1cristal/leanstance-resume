import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { getContent } from "@/content";
import { ASSET_ROOT, BASE_PATH } from "@/content/locales";
import type { Locale } from "@/types/resume";

const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    { path: "../../../public/resume/fonts/Montserrat-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../../public/resume/fonts/Montserrat-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../../public/resume/fonts/Montserrat-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../../public/resume/fonts/Montserrat-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../../public/resume/fonts/Montserrat-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../../public/resume/fonts/Montserrat-Black.woff2", weight: "900", style: "normal" },
  ],
});

const SEO = `${ASSET_ROOT}/seo`;

// The site is exported as static files: English is the page at "/" and Norwegian the page at "/no".
// Each has its own root layout (see the (en) and (no) route groups) so <html lang> is correct.
const PATHS: Record<Locale, string> = { en: `${BASE_PATH}/`, no: `${BASE_PATH}/no/` };

export const viewport = { themeColor: "#fff" };

export function buildMetadata(locale: Locale): Metadata {
  const { personal, site } = getContent(locale);
  return {
    metadataBase: new URL(site.url),
    title: site.title,
    description: site.description,
    authors: [{ name: personal.name }],
    alternates: { canonical: PATHS[locale], languages: PATHS },
    icons: {
      icon: [
        { url: `${SEO}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
        { url: `${SEO}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: `${SEO}/apple-touch-icon.png`, sizes: "180x180" }],
      other: [{ rel: "mask-icon", url: `${SEO}/safari-pinned-tab.svg`, color: "#5bbad5" }],
    },
    openGraph: {
      title: site.title,
      description: site.description,
      type: "website",
      images: [`${SEO}/og-image.png`],
    },
  };
}

export function Document({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={getContent(locale).site.lang} dir="ltr" className={`${montserrat.variable} h-full`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
