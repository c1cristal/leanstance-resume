"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { daysBetween, formatYear, parseDate } from "./dates";
import styles from "./ExperienceTimeline.module.css";
import { useIsClient } from "./useIsClient";

interface Milestone {
  position: number;
  left: number;
  date: string;
}

interface ExperienceTimelineProps {
  startDates: string[];
  currentPosition: number;
  onSelect: (position: number) => void;
}

const LINE_END = 95;
// Smallest gap (in % of the line) between two milestones, so neighbouring date labels never overlap.
const MIN_GAP = 10;

// Milestones are spaced proportionally between the first start date and today, capped at 95% so
// labels stay inside the line (as in the original component). Jobs that started close together are
// pushed apart to MIN_GAP, and the whole line is squeezed back to fit if that runs past the end.
function buildMilestones(startDates: string[]): Milestone[] {
  if (startDates.length < 1) return [];
  const first = parseDate(startDates[0]);
  const total = daysBetween(first, new Date());
  const spaced: number[] = [];
  startDates.forEach((date, index) => {
    const proportional = Math.min(LINE_END, (daysBetween(first, parseDate(date)) / total) * 100);
    spaced.push(index === 0 ? proportional : Math.max(proportional, spaced[index - 1] + MIN_GAP));
  });
  const last = spaced[spaced.length - 1];
  const scale = last > LINE_END ? LINE_END / last : 1;
  return startDates.map((date, index) => ({ position: index + 1, left: spaced[index] * scale, date }));
}

// Year labels need roughly this much room (px) between neighbours; the selected label is larger and
// claims extra room, so nearby labels step aside for it.
const LABEL_SPACING = 50;
const SELECTED_SPACING = 58;

// Picks the milestones whose year label fits: the selected one always, then each later one that is
// clear of the previous label and of the selected one, and shows a different year from the last label.
function pickLabels(milestones: Milestone[], currentPosition: number, lineWidth: number) {
  const shown = new Set<number>();
  if (lineWidth === 0) return new Set(milestones.map((milestone) => milestone.position));
  const x = (milestone: Milestone) => (milestone.left / 100) * lineWidth;
  const selected = milestones.find((milestone) => milestone.position === currentPosition);
  if (selected) shown.add(selected.position);
  let lastX = -Infinity;
  let lastYear = "";
  for (const milestone of milestones) {
    if (milestone === selected) {
      lastX = x(milestone);
      lastYear = formatYear(milestone.date);
      continue;
    }
    const year = formatYear(milestone.date);
    const clearOfLast = x(milestone) - lastX >= LABEL_SPACING;
    const clearOfSelected = !selected || Math.abs(x(milestone) - x(selected)) >= SELECTED_SPACING;
    const sameAsSelected = selected !== undefined && year === formatYear(selected.date);
    if (clearOfLast && clearOfSelected && year !== lastYear && !sameAsSelected) {
      shown.add(milestone.position);
      lastX = x(milestone);
      lastYear = year;
    }
  }
  return shown;
}

export function ExperienceTimeline({ startDates, currentPosition, onSelect }: ExperienceTimelineProps) {
  // Depends on today's date, so it is computed on the client like the original.
  const isClient = useIsClient();
  const milestones = useMemo(() => (isClient ? buildMilestones(startDates) : []), [isClient, startDates]);
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const element = lineRef.current;
    if (!element) return;
    const update = () => setLineWidth(element.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [milestones.length]);

  const labelled = useMemo(
    () => pickLabels(milestones, currentPosition, lineWidth),
    [milestones, currentPosition, lineWidth],
  );

  return (
    <div className={styles.bottomContainer}>
      <div className={styles.lineCont}>
        <div ref={lineRef} className={styles.line}>
          {milestones.map((milestone) => (
            <div
              key={milestone.position}
              className={cn(
                styles.milestone,
                styles.active,
                milestone.position === currentPosition && styles.current,
              )}
              // Positions are data-driven percentages, so they cannot be static classes.
              style={{ left: `${milestone.left}%` }}
              onClick={() => onSelect(milestone.position)}
            >
              {/* Years only, and only where there is room, so labels never run into each other. */}
              {labelled.has(milestone.position) && (
                <div className={styles.popupSpan}>
                  <span className={styles.year}>{formatYear(milestone.date)}</span>
                </div>
              )}
            </div>
          ))}
          {milestones.length > 0 && (
            <div className={cn(styles.milestone, styles.active, styles.future, styles.futureEdge)} />
          )}
        </div>
      </div>
      <div className={styles.mainCont} />
    </div>
  );
}
