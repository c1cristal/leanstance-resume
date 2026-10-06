"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import type { ResumeContent } from "@/types/resume";

import { useSwipe } from "./useSwipe";
import styles from "./Offerings.module.css";

// One offering is shown at a time, like the Experiences carousel: a title, a description and its pictures.
export function Offerings({ content }: { content: ResumeContent }) {
  const { offerings, ui } = content;
  const [current, setCurrent] = useState(0);
  const last = offerings.length - 1;

  const go = (target: number) => setCurrent(Math.min(last, Math.max(0, target)));
  const swipeHandlers = useSwipe({ onSwipeRight: () => go(current - 1), onSwipeLeft: () => go(current + 1) });
  const offering = offerings[current];
  if (!offering) return null;

  const previousDisabled = current === 0;
  const nextDisabled = current === last;

  return (
    <section id="offerings" className={styles.offerings}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <div className={styles.title}>
              <h1>{ui.offerings.title}</h1>
            </div>
            <div className={styles.navigation}>
              <a
                role="button"
                className={cn(styles.previous, previousDisabled && styles.disabled)}
                onClick={() => go(current - 1)}
              >
                <i className={styles.icon} title={ui.previous}>
                  <ChevronLeftIcon />
                </i>
                <span>{ui.previous}</span>
              </a>
              <div className={styles.divider}>|</div>
              <a
                role="button"
                className={cn(styles.next, nextDisabled && styles.disabled)}
                onClick={() => go(current + 1)}
              >
                <span>{ui.next}</span>
                <i className={styles.icon} title={ui.next}>
                  <ChevronRightIcon />
                </i>
              </a>
            </div>
          </div>
          <div className={styles.slide} key={current} {...swipeHandlers}>
            <h2 className={styles.offeringTitle}>{offering.title}</h2>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: offering.descriptionHtml }} />
            {offering.pictures.length > 0 && (
              <div className={styles.pictures}>
                {offering.pictures.map((picture) => (
                  <figure key={picture.src} className={styles.picture}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- fixed-ratio gallery tile, cover-cropped by CSS */}
                    <img src={picture.src} alt={picture.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
            )}
          </div>
          <div className={styles.dots} role="tablist">
            {offerings.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={item.title}
                title={item.title}
                className={cn(styles.dot, index === current && styles.activeDot)}
                onClick={() => go(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
