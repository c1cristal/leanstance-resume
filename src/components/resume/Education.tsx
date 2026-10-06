import { cn } from "@/lib/utils";
import type { ResumeContent } from "@/types/resume";

import styles from "./Education.module.css";

export function Education({ content }: { content: ResumeContent }) {
  const { education, certifications, ui } = content;
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <h1>{ui.education.title}</h1>
        <div className={styles.columns}>
          <div className={styles.card}>
            <h2>{ui.education.degrees}</h2>
            <ul className={cn(styles.list, styles.threeColumns)}>
              {education.map(({ title, institution, year }) => (
                <li key={`${title}-${institution}`}>
                  <div className={styles.text}>
                    <span className={styles.name}>{title}</span>
                    <span className={styles.detail}>{institution}</span>
                  </div>
                  <span className={styles.year}>{year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <h2>{ui.education.certifications}</h2>
            <ul className={cn(styles.list, styles.twoColumns)}>
              {certifications.map(({ title, issuer, year, credentialId }) => (
                <li key={title}>
                  <div className={styles.text}>
                    <span className={styles.name}>{title}</span>
                    {issuer && <span className={styles.detail}>{issuer}</span>}
                    {credentialId && (
                      <span className={styles.credential}>
                        {ui.education.credentialId} {credentialId}
                      </span>
                    )}
                  </div>
                  {year && <span className={styles.year}>{year}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
