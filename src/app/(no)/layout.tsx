import type { ReactNode } from "react";

import "../globals.css";
import { Document, buildMetadata, viewport } from "../_shared/document";

export const metadata = buildMetadata("no");
export { viewport };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Document locale="no">{children}</Document>;
}
