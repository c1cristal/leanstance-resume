import type { ResumeHobby, ResumeMedia } from "@/types/resume";

import {
  CampgroundIcon,
  DogIcon,
  FacebookIcon,
  GithubIcon,
  HikingIcon,
  InstagramIcon,
  LinkedinIcon,
  SuitcaseRollingIcon,
  UtensilsIcon,
  YoutubeIcon,
} from "./icons";

const ICONS = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  hiking: HikingIcon,
  "suitcase-rolling": SuitcaseRollingIcon,
  dog: DogIcon,
  campground: CampgroundIcon,
  utensils: UtensilsIcon,
} as const;

interface MediaIconProps {
  icon: ResumeMedia["icon"] | ResumeHobby["icon"];
  title: string;
  className?: string;
}

// Mirrors the original <fa-icon class="icon" title="..."> host element. An <i> is used (not a
// <span>) so the original `span { margin }` rules do not reach icon hosts, as with <fa-icon>.
export function MediaIcon({ icon, title, className }: MediaIconProps) {
  const Icon = ICONS[icon];
  return (
    <i className={className} title={title}>
      <Icon />
    </i>
  );
}
