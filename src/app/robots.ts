import type { MetadataRoute } from "next";

import { BASE_PATH } from "@/content/locales";
import { en } from "@/content/en";

// Everything is open to crawlers; the sitemap lists both language versions.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${en.site.url}${BASE_PATH}/sitemap.xml`,
  };
}
