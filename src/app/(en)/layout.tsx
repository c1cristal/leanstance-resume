import type { ReactNode } from "react";

import "../globals.css";
import { Document, buildMetadata, viewport } from "../_shared/document";

export const metadata = buildMetadata("en");
export { viewport };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Document locale="en">{children}</Document>;
}
