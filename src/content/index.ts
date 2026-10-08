import type { Locale, ResumeContent } from "@/types/resume";

import { en } from "./en";
import { no } from "./no";
import { OFFERING_ORDER } from "./offeringOrder";

const CONTENT: Record<Locale, ResumeContent> = { en, no };

// Offerings are put in OFFERING_ORDER here, and those marked hidden are removed, on the server, so their
// text is never sent to the browser.
function rank(id: string) {
  const index = OFFERING_ORDER.indexOf(id);
  return index === -1 ? OFFERING_ORDER.length : index;
}

export function getContent(locale: Locale): ResumeContent {
  const content = CONTENT[locale];
  return { ...content, offerings: content.offerings.filter((offering) => !offering.hidden).sort((a, b) => rank(a.id) - rank(b.id)) };
}
