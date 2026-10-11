import type { MetadataRoute } from "next";

import { en } from "@/content/en";
import { BASE_PATH } from "@/content/locales";

export const dynamic = "force-static";

// The two language versions of the one page, each pointing at the other.
export default function sitemap(): MetadataRoute.Sitemap {
  const root = `${en.site.url}${BASE_PATH}`;
  const languages = { en: `${root}/`, no: `${root}/no/` };
  return [
    { url: languages.en, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: languages.no, changeFrequency: "monthly", priority: 1, alternates: { languages } },
  ];
}
