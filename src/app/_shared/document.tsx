import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import type { ReactNode } from "react";

import { getContent } from "@/content";
import { ASSET_ROOT, BASE_PATH, LANGUAGE_KEY } from "@/content/locales";
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
    },
    openGraph: {
      title: site.title,
      description: site.description,
      type: "website",
      images: [`${SEO}/og-image.png`],
    },
  };
}

// Runs before the English page paints (the site is static, so there is no server to choose a language):
// a visitor whose browser is set to Norwegian (nb, nn or no) is sent to /no/, unless they picked a language
// with the switch before. The hash is kept so a link to a section still lands on it.
const NORWEGIAN_REDIRECT = `(function(){var c="";try{c=localStorage.getItem(${JSON.stringify(LANGUAGE_KEY)})||""}catch(e){}if(c)return;var l=(navigator.languages&&navigator.languages[0])||navigator.language||"";if(/^(nb|nn|no)(-|$)/i.test(l))location.replace(${JSON.stringify(PATHS.no)}+location.hash)})()`;

export function Document({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={getContent(locale).site.lang} dir="ltr" className={`${montserrat.variable} h-full`}>
      <body className="h-full">
        {children}
        {/* A plain <script> in a component never runs on the client; next/script puts this one in the page head. */}
        {locale === "en" && <Script id="norwegian-redirect" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: NORWEGIAN_REDIRECT }} />}
      </body>
    </html>
  );
}
