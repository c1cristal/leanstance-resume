import type { Locale } from "@/types/resume";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/live-resume") when the site is served from a sub-path such as a
// GitHub project page. Leave it unset for a custom domain or a user site served from the root.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const ASSET_ROOT = `${BASE_PATH}/resume`;

// English is served at "/" and Norwegian at "/no" (see the route groups under src/app).
export const LANGUAGES: { locale: Locale; label: string; href: string }[] = [
  { locale: "en", label: "EN", href: "/" },
  { locale: "no", label: "NO", href: "/no/" },
];
