"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// True only after hydration; for values that depend on the browser (today's date, Web APIs).
export function useIsClient() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
