"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import type { ResumeContent } from "@/types/resume";

import { formatMonthYear, formatYear } from "./dates";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { MediaIcon } from "./MediaIcon";
import { useSwipe } from "./useSwipe";
import styles from "./Experience.module.css";

const TRANSITION_TIME = 400;
type TransitionClasses = Record<number, string>;

function toList(value: string | string[]) {
  return (Array.isArray(value) ? value : [value]).filter(Boolean);
}

// One place reads "City, Country". A job that spanned several places shows the cities on one line and
// the countries on the next, each separated by dots, so the header stays compact.
function Location({ city, country }: { city: string | string[]; country: string | string[] }) {
  const cities = toList(city);
  const countries = toList(country);
  if (cities.length === 0 && countries.length === 0) return null;
  if (cities.length > 1 || countries.length > 1) {
    const lines = [cities.join(" · "), countries.join(" · ")].filter(Boolean);
    return (
      <div className={styles.location}>
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    );
  }
  return (
    <div className={styles.location}>
      <span>{cities[0]}</span>
      {cities[0] && countries[0] && <span className={styles.divider}>,{"\u00a0"}</span>}
      <span>{countries[0]}</span>
    </div>
  );
}

// Companies without a website (or one that no longer exists) show their name as plain text.
function CompanyLink({ website, children }: { website?: string; children: ReactNode }) {
  return website ? (
    <a href={website} target="_blank">
      {children}
    </a>
  ) : (
    <>{children}</>
  );
}

export function Experience({ content }: { content: ResumeContent }) {
  const { experiences, ui } = content;
  const LAST_POSITION = experiences.length;
  const ordered = [...experiences].sort((a, b) => b.position - a.position);
  const startDates = experiences.map((experience) => experience.startAt);
  // Open on the current job (the one without an end date), or on the newest entry if there is none.
  const currentJobs = experiences.filter((experience) => experience.endAt === null);
  const [currentPosition, setCurrentPosition] = useState(
    currentJobs.length > 0 ? currentJobs[currentJobs.length - 1].position : LAST_POSITION,
  );
  const [transitions, setTransitions] = useState<TransitionClasses>({});
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Preload every background so the swap is instant, like the original.
    experiences.forEach(({ backgroundUrl }) => {
      if (backgroundUrl) new Image().src = backgroundUrl;
    });
    return () => timers.current.forEach(clearTimeout);
  }, [experiences]);

  const navigate = (target: number) => {
    if (target === currentPosition || target < 1 || target > LAST_POSITION) return;
    const forward = target > currentPosition;
    const leaving = currentPosition;
    setTransitions({
      [leaving]: forward ? styles.leaveLeft : styles.leaveRight,
      [target]: forward ? styles.enterRight : styles.enterLeft,
    });
    setCurrentPosition(target);
    timers.current.forEach(clearTimeout);
    timers.current = [setTimeout(() => setTransitions({}), TRANSITION_TIME)];
  };

  const onPrevious = () => navigate(currentPosition - 1);
  const onNext = () => navigate(currentPosition + 1);
  const swipeHandlers = useSwipe({ onSwipeRight: onPrevious, onSwipeLeft: onNext });

  const previousDisabled = currentPosition === 1;
  const nextDisabled = currentPosition === LAST_POSITION;
  const current = experiences[currentPosition - 1];
  const previousYear = (experiences[currentPosition - 2] ?? current).startAt;
  const nextYear = (experiences[currentPosition] ?? current).startAt;

  return (
    <section
      id="experience"
      className={styles.landscape}
      style={
        current.backgroundUrl
          ? {
              backgroundImage: `url("${current.backgroundUrl}")`,
              ...(current.backgroundPosition && { backgroundPosition: current.backgroundPosition }),
            }
          : undefined
      }
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <div className={styles.title}>
              <h1>{ui.experience.title}</h1>
            </div>
            <div className={styles.navigation}>
              <a
                role="button"
                className={cn(styles.previous, previousDisabled && styles.disabled)}
                onClick={onPrevious}
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
                onClick={onNext}
              >
                <span>{ui.next}</span>
                <i className={styles.icon} title={ui.next}>
                  <ChevronRightIcon />
                </i>
              </a>
            </div>
            <div className={styles.navigationMobile}>
              <a
                role="button"
                className={cn(styles.previous, previousDisabled && styles.disabled)}
                onClick={onPrevious}
              >
                <div className={styles.molding}>
                  <span>{formatYear(previousYear)}</span>
                  <i className={styles.icon} title={ui.previous}>
                    <ChevronLeftIcon />
                  </i>
                </div>
              </a>
              <div className={styles.current}>
                <span>{formatYear(current.startAt)}</span>
              </div>
              <a
                role="button"
                className={cn(styles.next, nextDisabled && styles.disabled)}
                onClick={onNext}
              >
                <div className={styles.molding}>
                  <i className={styles.icon} title={ui.next}>
                    <ChevronRightIcon />
                  </i>
                  <span>{formatYear(nextYear)}</span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.middleContainer} {...swipeHandlers}>
            <div className={styles.eventsContent}>
              <ol>
                {ordered.map((experience) => (
                  <li
                    key={experience.position}
                    className={cn(
                      experience.position === currentPosition && styles.selected,
                      transitions[experience.position],
                    )}
                  >
                    <div className={styles.headerBlock}>
                      {experience.logo && (
                        <div className={styles.logoBlock}>
                          <CompanyLink website={experience.website}>
                            {/* eslint-disable-next-line @next/next/no-img-element -- fixed-height logo, natural width */}
                            <img src={experience.logo} alt={experience.companyName} />
                          </CompanyLink>
                        </div>
                      )}
                      <div className={styles.infoBlock}>
                        <div className={styles.companyName}>
                          <CompanyLink website={experience.website}>{experience.companyName}</CompanyLink>
                        </div>
                        <div className={styles.role}>{experience.role}</div>
                        <div className={styles.period}>
                          <span>{formatMonthYear(experience.startAt, ui.months, ui.currently)}</span>
                          {experience.endAt !== experience.startAt && (
                            <>
                              <span className={styles.divider}>-</span>
                              <span>{formatMonthYear(experience.endAt, ui.months, ui.currently)}</span>
                            </>
                          )}
                        </div>
                        <Location city={experience.city} country={experience.country} />
                      </div>
                    </div>
                    <div
                      className={styles.description}
                      dangerouslySetInnerHTML={{ __html: experience.descriptionHtml }}
                    />
                    <div className={styles.technologies}>
                      {experience.technologies.map((technology) => (
                        <span key={technology} className={styles.hashtag}>
                          {technology}
                        </span>
                      ))}
                    </div>
                    <div className={styles.socialMedia}>
                      {experience.medias.map((media) => (
                        <a key={media.href} href={media.href} target="_blank">
                          <MediaIcon icon={media.icon} title={media.title} className={styles.icon} />
                        </a>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <ExperienceTimeline startDates={startDates} currentPosition={currentPosition} onSelect={navigate} />
        </div>
      </div>
    </section>
  );
}
