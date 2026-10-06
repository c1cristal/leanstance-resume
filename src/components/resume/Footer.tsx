import type { ResumeContent } from "@/types/resume";

import styles from "./Footer.module.css";

export function Footer({ content }: { content: ResumeContent }) {
  const { photoCredits } = content.site;
  const { photo, by } = content.ui.photoCredit;
  return (
    <footer className={styles.footer} itemScope itemType="https://schema.org/WPFooter">
      {photoCredits && photoCredits.length > 0 && (
        <p className={styles.credits}>
          {photoCredits.map((credit, index) => (
            <span key={credit.title}>
              {index > 0 && " · "}
              {photo}: <a href={credit.sourceUrl} target="_blank" rel="noopener">{credit.title}</a> {by} {credit.author},{" "}
              <a href={credit.licenseUrl} target="_blank" rel="noopener">{credit.license}</a>
            </span>
          ))}
        </p>
      )}
      <p className={styles.copyright}>{new Date().getFullYear()} © {content.ui.copyright}</p>
    </footer>
  );
}
