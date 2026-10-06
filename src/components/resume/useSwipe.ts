"use client";

import { useRef } from "react";
import type { TouchEvent } from "react";

const SWIPE_THRESHOLD = 40;

interface SwipeOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

// Horizontal swipe detection equivalent to the original HammerJS `swipe` binding (40px ratio).
export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeOptions) {
  const startX = useRef<number | null>(null);

  return {
    onTouchStart: (event: TouchEvent) => {
      startX.current = event.touches[0].clientX;
    },
    onTouchEnd: (event: TouchEvent) => {
      if (startX.current === null) return;
      const deltaX = event.changedTouches[0].clientX - startX.current;
      startX.current = null;
      if (Math.abs(deltaX) <= SWIPE_THRESHOLD) return;
      if (deltaX > 0) onSwipeRight();
      else onSwipeLeft();
    },
  };
}
