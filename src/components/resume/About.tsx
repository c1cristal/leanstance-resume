import type { ResumeContent } from "@/types/resume";

import { Fragment } from "react";

import { Hobbies } from "./Hobbies";
import { MediaIcon } from "./MediaIcon";
import { Term } from "./Term";
import styles from "./About.module.css";

export function About({ content }: { content: ResumeContent }) {
  const { aboutDescriptionHtml, aboutMedias, glossary, hobbies, personal, ui } = content;
  return (
    <section id="about" className={styles.about} itemScope itemType="https://schema.org/AboutPage">
      <div className={styles.aboutContainer} itemScope itemType="https://schema.org/Person">
        <div className={styles.firstColumn}>
          <h1>{ui.about.title}</h1>
          <h2>
            <span itemProp="name">{personal.name}</span>
          </h2>
          <p className={styles.text}>
            {/* {{key}} tokens in the text become glossary terms; the HTML between them renders as is. */}
            {aboutDescriptionHtml.split(/\{\{([\w-]+)\}\}/).map((part, index) => {
              if (index % 2 === 0) return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
              const term = glossary[part];
              return term ? <Term key={index} term={term} learnMore={ui.about.learnMore} /> : <Fragment key={index} />;
            })}
          </p>
          <Hobbies title={ui.about.hobbies} hobbies={hobbies} closeLabel={ui.about.closePicture} />
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.profilePicture} style={{ backgroundImage: `url("${personal.picture}")` }} />
          <div className={styles.socialMedia}>
            {aboutMedias.map((media) => (
              <a key={media.icon} href={media.href} target="_blank" itemProp="sameAs">
                <MediaIcon icon={media.icon} title={media.title} className={styles.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
