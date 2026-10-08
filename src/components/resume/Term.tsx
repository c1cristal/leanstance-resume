"use client";

import { useEffect, useId, useRef, useState } from "react";

import type { ResumeTerm } from "@/types/resume";

import styles from "./Term.module.css";

interface TermProps {
  term: ResumeTerm;
  learnMore: string;
}

// A word in the resume text that opens a small popover with its definition. The definition stays in the
// HTML (just hidden) so it is there without JavaScript and for crawlers; click, Escape or an outside click close it.
export function Term({ term, learnMore }: TermProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const popoverId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <span ref={rootRef} className={styles.term}>
      <button type="button" className={styles.trigger} aria-expanded={open} aria-controls={popoverId} onClick={() => setOpen((value) => !value)}>
        {term.label}
      </button>
      <span id={popoverId} role="note" className={styles.popover} hidden={!open}>
        {term.definition}
        {term.href && (
          <a href={term.href} target="_blank" rel="noopener noreferrer">
            {learnMore}
          </a>
        )}
      </span>
    </span>
  );
}
