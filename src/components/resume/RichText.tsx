"use client";

import { useCallback, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import type { ResumeContent } from "@/types/resume";

import { Term } from "./Term";

interface RichTextProps {
  html: string;
  glossary: ResumeContent["glossary"];
  learnMore: string;
  className?: string;
}

// HTML with {{key}} tokens. Each token is first written out as a plain-text placeholder (so the server HTML
// reads correctly), then replaced by a <Term> popover once the page is on the client. HTML cannot be split
// at a token the way plain text can, because a token may sit inside a <ul> or <li>.
export function RichText({ html, glossary, learnMore, className }: RichTextProps) {
  const [slots, setSlots] = useState<{ key: string; element: HTMLElement }[]>([]);

  const markup = useMemo(
    () => html.replace(/\{\{([\w-]+)\}\}/g, (_, key: string) => (glossary[key] ? `<span data-term="${key}">${glossary[key].label}</span>` : "")),
    [html, glossary],
  );

  // A callback ref runs once the markup is in the DOM. Each text is fixed for the life of its component.
  const attach = useCallback(
    (node: HTMLDivElement | null) => {
      const found = Array.from(node?.querySelectorAll<HTMLElement>("[data-term]") ?? []);
      found.forEach((element) => {
        element.textContent = "";
      });
      setSlots(found.map((element) => ({ key: element.dataset.term ?? "", element })));
    },
    [],
  );

  return (
    <>
      <div ref={attach} className={className} dangerouslySetInnerHTML={{ __html: markup }} />
      {slots.map(({ key, element }) => createPortal(<Term term={glossary[key]} learnMore={learnMore} />, element, key))}
    </>
  );
}
