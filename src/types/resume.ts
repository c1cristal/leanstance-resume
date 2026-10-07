export interface ResumeMedia {
  icon: "linkedin" | "github" | "facebook" | "youtube" | "instagram";
  title: string;
  href: string;
}

export interface ResumeHobby {
  icon: "hiking" | "suitcase-rolling" | "dog" | "campground" | "utensils";
  title: string;
  // Optional photo: when set, the hobby icon is clickable and opens the photo in a popout.
  picture?: { src: string; alt: string };
}

export interface ResumeExperience {
  position: number;
  companyName: string;
  website?: string;
  logo?: string;
  // "MM-DD-YYYY", or just "YYYY" when only the year is known. A null end date means the job is current.
  startAt: string;
  endAt: string | null;
  // One place, or a list when the job spanned several (shown as a line of cities and a line of countries).
  city: string | string[];
  country: string | string[];
  role: string;
  descriptionHtml: string;
  technologies: string[];
  medias: ResumeMedia[];
  backgroundUrl?: string;
  // Optional CSS background-position for a photo whose subject is not in the middle, e.g. "center top".
  backgroundPosition?: string;
}

export interface ResumeOfferingPicture {
  src: string;
  alt: string;
}

// A product offering: one slide with a title, a description (HTML) and any number of pictures.
export interface ResumeOffering {
  title: string;
  // Keeps the offering in the content but leaves it off the page until it is ready.
  hidden?: boolean;
  descriptionHtml: string;
  pictures: ResumeOfferingPicture[];
}

export type Locale = "en" | "no";

export interface ResumePersonal {
  name: string;
  handle: string;
  picture: string;
  illustration: string;
  email: string;
  phone: string;
  location: string;
}

export interface ResumeSite {
  title: string;
  description: string;
  url: string;
  // Value of the <html lang> attribute.
  lang: string;
  resumePdf: string;
  // Subject line of the email a contact form message arrives as.
  contactSubject: string;
  // Attribution for photos whose licence requires a credit (shown in the footer).
  photoCredits?: { title: string; author: string; license: string; licenseUrl: string; sourceUrl: string }[];
}

// Interface text that is not part of the resume itself (headings, buttons, form messages).
export interface ResumeUi {
  months: string[];
  currently: string;
  previous: string;
  next: string;
  copyright: string;
  nav: { about: string; experience: string; education: string; offerings: string; contact: string; openPdf: string };
  welcome: { hello: string; backgroundAlt: string; bubbleAlt: string };
  about: { title: string; hobbies: string; closePicture: string };
  experience: { title: string };
  education: { title: string; degrees: string; certifications: string; credentialId: string };
  offerings: { title: string };
  // Words around a photo credit in the footer: "<photo>: <title> <by> <author>".
  photoCredit: { photo: string; by: string };
  contact: {
    title: string;
    email: string;
    phone: string;
    city: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    close: string;
    success: string;
    error: string;
    illustrationAlt: string;
    errors: {
      nameRequired: string;
      namePattern: string;
      emailRequired: string;
      emailPattern: string;
      messageRequired: string;
    };
  };
}

export interface ResumeEducation {
  title: string;
  institution: string;
  year: string;
}

export interface ResumeCertification {
  title: string;
  issuer?: string;
  year?: string;
  credentialId?: string;
}

export interface ResumeContent {
  locale: Locale;
  personal: ResumePersonal;
  site: ResumeSite;
  ui: ResumeUi;
  aboutDescriptionHtml: string;
  hobbies: ResumeHobby[];
  aboutMedias: ResumeMedia[];
  experiences: ResumeExperience[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
  offerings: ResumeOffering[];
  typingPhrases: string[];
}
