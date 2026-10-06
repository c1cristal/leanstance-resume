"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  phrases: string[];
  className?: string;
  wrapClassName?: string;
  typeSpeed?: number;
  startDelay?: number;
  phrasePeriod?: number;
}

// Port of the original `appTypingAnimation` directive (txt-rotate typewriter).
export function TypingText({
  phrases,
  className,
  wrapClassName,
  typeSpeed = 200,
  startDelay = 1500,
  phrasePeriod = 2000,
}: TypingTextProps) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    let current = "";
    let isDeleting = false;
    let loopNum = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const typewrite = () => {
      const phrase = phrases[loopNum % phrases.length];
      current = phrase.substring(0, isDeleting ? current.length - 1 : current.length + 1);
      setText(current);

      let delay = typeSpeed - 100 * Math.random();
      if (isDeleting) delay /= 2;
      if (!isDeleting && current === phrase) {
        delay = phrasePeriod;
        isDeleting = true;
      } else if (isDeleting && current === "") {
        isDeleting = false;
        loopNum++;
        delay = 500;
      }
      timeout = setTimeout(typewrite, delay);
    };

    timeout = setTimeout(typewrite, startDelay);
    return () => clearTimeout(timeout);
  }, [phrases, typeSpeed, startDelay, phrasePeriod]);

  return (
    <span className={className}>
      {text !== null && <span className={wrapClassName}>{text}</span>}
    </span>
  );
}
