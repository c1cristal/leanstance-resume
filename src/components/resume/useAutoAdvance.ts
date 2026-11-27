"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

interface AutoAdvanceOptions {
  // Positions in the order they are shown.
  sequence: number[];
  current: number;
  onAdvance: (position: number) => void;
  intervalMs: number;
}

// Steps through `sequence` on a timer, but only while the section is on screen and the visitor has not asked
// for less motion. The first interaction with the section calls `stop`, which ends the auto run for good.
export function useAutoAdvance({ sequence, current, onAdvance, intervalMs }: AutoAdvanceOptions) {
  const ref = useRef<HTMLElement | null>(null);
  const [stopped, setStopped] = useState(false);
  const [visible, setVisible] = useState(false);
  const advance = useEffectEvent(onAdvance);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (stopped || !visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const index = sequence.indexOf(current);
    const next = index === -1 ? undefined : sequence[index + 1];
    if (next === undefined) return;
    const timer = setTimeout(() => advance(next), intervalMs);
    return () => clearTimeout(timer);
  }, [stopped, visible, sequence, current, intervalMs]);

  return { ref, stop: () => setStopped(true) };
}
