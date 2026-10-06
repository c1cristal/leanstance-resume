import type { ResumeContent } from "@/types/resume";

import { MediaIcon } from "./MediaIcon";
import styles from "./About.module.css";

export function About({ content }: { content: ResumeContent }) {
  const { aboutDescriptionHtml, aboutMedias, hobbies, personal, ui } = content;
  return (
    <section id="about" className={styles.about} itemScope itemType="https://schema.org/AboutPage">
      <div className={styles.aboutContainer} itemScope itemType="https://schema.org/Person">
        <div className={styles.firstColumn}>
          <h1>{ui.about.title}</h1>
          <h2>
            <span itemProp="name">{personal.name}</span>
          </h2>
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: aboutDescriptionHtml }} />
          <div className={styles.hobbies}>
            <h3>{ui.about.hobbies}</h3>
            {hobbies.map((hobby) => (
              <MediaIcon key={hobby.icon} icon={hobby.icon} title={hobby.title} className={styles.icon} />
            ))}
          </div>
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
