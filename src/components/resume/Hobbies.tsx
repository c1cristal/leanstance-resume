"use client";

import { useEffect, useRef, useState } from "react";

import type { ResumeHobby } from "@/types/resume";

import { TimesIcon } from "./icons";
import { MediaIcon } from "./MediaIcon";
import styles from "./Hobbies.module.css";

interface HobbiesProps {
  title: string;
  hobbies: ResumeHobby[];
  closeLabel: string;
}

// Hobby icons. A hobby with a `picture` is a button that opens the photo in a popout (a native modal
// <dialog>, so Escape, the focus trap and the backdrop come for free); the others stay plain icons.
export function Hobbies({ title, hobbies, closeLabel }: HobbiesProps) {
  const [active, setActive] = useState<ResumeHobby | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && dialog && !dialog.open) dialog.showModal();
  }, [active]);

  return (
    <div className={styles.hobbies}>
      <h3>{title}</h3>
      {hobbies.map((hobby) =>
        hobby.picture ? (
          <button
            key={hobby.icon}
            type="button"
            className={styles.iconButton}
            aria-haspopup="dialog"
            aria-label={hobby.title}
            title={hobby.title}
            onClick={() => setActive(hobby)}
          >
            <MediaIcon icon={hobby.icon} title={hobby.title} className={styles.icon} />
          </button>
        ) : (
          <MediaIcon key={hobby.icon} icon={hobby.icon} title={hobby.title} className={styles.icon} />
        ),
      )}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={active?.title}
        onClose={() => setActive(null)}
        // The dialog has no padding, so a click that lands on it itself is a click on the backdrop.
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {active?.picture && (
          <figure className={styles.figure}>
            <button type="button" className={styles.close} aria-label={closeLabel} title={closeLabel} onClick={() => dialogRef.current?.close()}>
              <TimesIcon />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element -- natural-size photo, contained by CSS */}
            <img src={active.picture.src} alt={active.picture.alt} />
            {/* Screen readers already get this text from the image's alt, so the caption is hidden from them. */}
            <figcaption aria-hidden="true">{active.picture.alt}</figcaption>
          </figure>
        )}
      </dialog>
    </div>
  );
}
