"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { BarsIcon, CloudDownloadAltIcon, ShareAltIcon } from "./icons";
import { LANGUAGE_KEY, LANGUAGES } from "@/content/locales";
import type { ResumeContent } from "@/types/resume";

import { useIsClient } from "./useIsClient";
import styles from "./Header.module.css";

const STICKY_OFFSET = 250;
const VIEWPORT_OFFSET = 370;
const SCROLL_DEBOUNCE = 300;
const SECTION_DEBOUNCE = 150;


// Mirrors the original `appInViewport` directive: the last section host whose top or bottom
// edge sits within the upper (innerHeight - 370px) band of the viewport becomes active.
function detectActiveSection(): string | null {
  const limit = window.innerHeight - VIEWPORT_OFFSET;
  let active: string | null = null;
  document.querySelectorAll<HTMLElement>("[data-resume-section]").forEach((host) => {
    if (!host.offsetWidth || !host.offsetHeight) return;
    const rect = host.getBoundingClientRect();
    const topVisible = rect.top >= 0 && rect.top < limit;
    const bottomVisible = rect.bottom > 0 && rect.bottom <= limit;
    if (topVisible || bottomVisible) active = host.dataset.resumeSection ?? null;
  });
  return active;
}

// A visitor who picks a language with the switch keeps it: the English page no longer sends them to Norwegian.
function rememberLanguage(target: string) {
  try {
    localStorage.setItem(LANGUAGE_KEY, target);
  } catch {
    // Storage can be blocked (private window); the switch still works, it just is not remembered.
  }
}

export function Header({ content }: { content: ResumeContent }) {
  const { locale, personal, site, ui } = content;
  const navLinks = [
    { section: "about", label: ui.nav.about },
    { section: "experience", label: ui.nav.experience },
    { section: "education", label: ui.nav.education },
    { section: "offerings", label: ui.nav.offerings },
    { section: "contact", label: ui.nav.contact },
  ];
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isClient = useIsClient();
  const canShare = isClient && typeof navigator.share === "function";

  useEffect(() => {
    // The original debounces its scroll handler (300ms) and the section update (150ms),
    // so the sticky state and active link settle shortly after scrolling stops.
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    let sectionTimer: ReturnType<typeof setTimeout> | undefined;

    const updateActiveSection = () => {
      clearTimeout(sectionTimer);
      sectionTimer = setTimeout(() => {
        const next = detectActiveSection();
        if (next) setActiveSection(next);
      }, SECTION_DEBOUNCE);
    };

    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsSticky(window.scrollY >= STICKY_OFFSET);
        updateActiveSection();
      }, SCROLL_DEBOUNCE);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(sectionTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const share = async () => {
    try {
      await navigator.share({ title: site.title, text: site.description, url: site.url });
    } catch (error) {
      console.log("You app is not shared, reason: ", error);
    }
  };

  return (
    <div className={cn(styles.host, isSticky && styles.sticky)}>
      <header className={styles.header} itemScope itemType="https://schema.org/WPHeader">
        <div className={styles.navbarToggle}>
          <i className={styles.barIcon} onClick={() => setMenuOpen((open) => !open)}>
            <BarsIcon />
          </i>
        </div>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logo} onClick={closeMenu}>
            {personal.handle}
          </a>
        </div>
        <nav className={cn(styles.navContainer, menuOpen && styles.menuOpen)}>
          <ul>
            {navLinks.map(({ section, label }) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={cn(activeSection === section && styles.active)}
                  onClick={closeMenu}
                >
                  <span>{label}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumePdf}
                title={ui.nav.openPdf}
                target="_blank"
                onClick={closeMenu}
              >
                <CloudDownloadAltIcon />
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.languageContainer}>
          <div className={styles.frame}>
            <ul>
              {LANGUAGES.map(({ locale: target, label, href }) => (
                <li key={label}>
                  {target === locale ? (
                    <Link href={href} className={styles.active} onClick={() => rememberLanguage(target)}>
                      {label}
                    </Link>
                  ) : (
                    <Link href={href} onClick={() => rememberLanguage(target)}>
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={cn(styles.shareContainer, canShare && styles.canShare)}>
          <i className={styles.icon} onClick={share}>
            <ShareAltIcon />
          </i>
        </div>
      </header>
    </div>
  );
}
