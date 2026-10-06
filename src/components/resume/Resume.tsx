import type { ResumeContent } from "@/types/resume";

import { About } from "./About";
import { Contact } from "./Contact";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Offerings } from "./Offerings";
import { Welcome } from "./Welcome";
import styles from "./Resume.module.css";

// Section hosts mirror the original Angular host elements (app-welcome, app-about, ...),
// which the header's active-section detection measures.
const SECTIONS = [
  { key: "welcome", Component: Welcome },
  { key: "about", Component: About },
  { key: "experience", Component: Experience },
  { key: "education", Component: Education },
  { key: "offerings", Component: Offerings },
  { key: "contact", Component: Contact },
];

export function Resume({ content }: { content: ResumeContent }) {
  return (
    <div className={styles.root} itemScope itemType="https://schema.org/WebPage">
      <Header content={content} />
      {SECTIONS.map(({ key, Component }) => (
        <div key={key} className={styles.sectionHost} data-resume-section={key}>
          <Component content={content} />
        </div>
      ))}
      <div className={styles.footerHost}>
        <Footer content={content} />
      </div>
    </div>
  );
}
