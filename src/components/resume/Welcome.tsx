import { cn } from "@/lib/utils";

import { ASSET_ROOT } from "@/content/locales";
import type { ResumeContent } from "@/types/resume";

import { TypingText } from "./TypingText";
import styles from "./Welcome.module.css";

// Orbit slots in the stylesheet; each icon fills the next one. The icons are decorative.
const SKILL_ICONS = [
  { file: "north-star", position: styles.first },
  { file: "bridge", position: styles.second },
  { file: "growth", position: styles.third },
  { file: "summit", position: styles.fourth },
  { file: "spiral", position: styles.fifth },
  { file: "sprout", position: styles.sixth },
  { file: "prism", position: styles.seventh },
];

const WELCOME = `${ASSET_ROOT}/images/welcome`;

/* eslint-disable @next/next/no-img-element -- exact intrinsic sizing of the original <img> layout */
export function Welcome({ content }: { content: ResumeContent }) {
  const { personal, typingPhrases, ui } = content;
  return (
    <section id="welcome" className={styles.welcome}>
      <div className={styles.layerOne}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.illustration}
            src={personal.illustration}
            alt={personal.name}
          />
          <div className={styles.skills}>
            <img
              className={styles.background}
              src={`${WELCOME}/illustration-back.png`}
              alt={ui.welcome.backgroundAlt}
            />
            {SKILL_ICONS.map(({ file, position }) => (
              <img
                key={file}
                className={cn(styles.skillIcon, position)}
                src={`${WELCOME}/icons/${file}.svg`}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className={styles.dialogContainer}>
          <img className={styles.bubble} src={`${WELCOME}/bubble-frame.png`} alt={ui.welcome.bubbleAlt} />
          <div className={styles.console}>
            <p className={styles.hello}>{ui.welcome.hello}</p>
            <TypingText phrases={typingPhrases} className={styles.txtRotate} wrapClassName={styles.wrap} />
          </div>
        </div>
      </div>
    </section>
  );
}
