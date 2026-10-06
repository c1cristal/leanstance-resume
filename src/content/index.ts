import type { Locale, ResumeContent } from "@/types/resume";

import { en } from "./en";
import { no } from "./no";

const CONTENT: Record<Locale, ResumeContent> = { en, no };

// Offerings marked hidden are removed here, on the server, so their text is never sent to the browser.
export function getContent(locale: Locale): ResumeContent {
  const content = CONTENT[locale];
  return { ...content, offerings: content.offerings.filter((offering) => !offering.hidden) };
}
