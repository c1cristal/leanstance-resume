"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { cn } from "@/lib/utils";

import type { ResumeContent } from "@/types/resume";

import { EnvelopeIcon, MapMarkerAltIcon, PhoneIcon, TimesIcon } from "./icons";
import { sendMessage } from "./sendMessage";
import styles from "./Contact.module.css";

type Field = "name" | "email" | "message";
type FeedbackStatus = "" | "success" | "error";

const NAME_PATTERN = /^[A-zÀ-ú ]*$/;
const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
const EMPTY = { name: "", email: "", message: "" };
const UNTOUCHED = { name: false, email: false, message: false };

function validate(field: Field, value: string) {
  if (!value) return "required" as const;
  if (field === "name" && !NAME_PATTERN.test(value)) return "pattern" as const;
  if (field === "email" && !EMAIL_PATTERN.test(value)) return "pattern" as const;
  return null;
}

export function Contact({ content }: { content: ResumeContent }) {
  const { personal, site, ui } = content;
  const { errors: messages } = ui.contact;
  const MESSAGES = {
    name: { required: messages.nameRequired, pattern: messages.namePattern },
    email: { required: messages.emailRequired, pattern: messages.emailPattern },
    message: { required: messages.messageRequired, pattern: "" },
  };
  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState(UNTOUCHED);
  const [dirty, setDirty] = useState(UNTOUCHED);
  const [isLoading, setIsLoading] = useState(false);
  const [trap, setTrap] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState<FeedbackStatus>("");

  const errors = {
    name: validate("name", values.name),
    email: validate("email", values.email),
    message: validate("message", values.message),
  };
  const isFormInvalid = Object.values(errors).some(Boolean);
  const isInvalid = (field: Field) => Boolean(errors[field]) && touched[field];
  const showWarnings = (field: Field) => isInvalid(field) || dirty[field];

  const fieldProps = (field: Field) => ({
    name: field,
    value: values[field],
    onChange: (event: { target: { value: string } }) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setDirty((current) => ({ ...current, [field]: true }));
    },
    onBlur: () => setTouched((current) => ({ ...current, [field]: true })),
  });

  const warnings = (field: Field) => {
    const error = errors[field];
    if (!showWarnings(field) || !error) return null;
    return (
      <div className={styles.warnings}>
        <small className={styles.textDanger}>{MESSAGES[field][error]}</small>
      </div>
    );
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (isFormInvalid || isLoading) return;
    setIsLoading(true);
    // A real visitor never ticks the hidden trap checkbox; bots that fill every field do, so their
    // submissions are dropped quietly without being sent.
    const sent = trap
      ? true
      : await sendMessage({ ...values, subject: site.contactSubject, fromName: site.title });
    setIsLoading(false);
    setFeedbackStatus(sent ? "success" : "error");
    if (sent) {
      setValues(EMPTY);
      setTouched(UNTOUCHED);
      setDirty(UNTOUCHED);
    }
  };

  return (
    <section id="contact" className={styles.contact} itemScope itemType="https://schema.org/ContactPage">
      <div className={cn(styles.feedbackContainer, feedbackStatus && styles[feedbackStatus])}>
        <p className={styles.success}>
          <span>{ui.contact.success}</span>
          <i className={styles.icon} title={ui.contact.close} onClick={() => setFeedbackStatus("")}>
            <TimesIcon />
          </i>
        </p>
        <p className={styles.error}>
          <span>{ui.contact.error}</span>
          <i className={styles.icon} title={ui.contact.close} onClick={() => setFeedbackStatus("")}>
            <TimesIcon />
          </i>
        </p>
      </div>
      <div className={cn(styles.container, feedbackStatus && styles.fade)}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            <h1>{ui.contact.title}</h1>
          </div>
          <div className={styles.topContainer}>
            <div className={styles.picture} style={{ backgroundImage: `url("${personal.picture}")` }} />
            <div className={styles.info}>
              <p className={styles.name}>
                <span itemProp="name">{personal.name}</span>
              </p>
              <p className={styles.email}>
                <i className={styles.icon} title={ui.contact.email}>
                  <EnvelopeIcon />
                </i>
                <a href={`mailto:${personal.email}`} itemProp="email">
                  {personal.email}
                </a>
              </p>
              <p className={styles.phone}>
                <i className={styles.icon} title={ui.contact.phone}>
                  <PhoneIcon />
                </i>
                <span itemProp="telephone">{personal.phone}</span>
              </p>
              <p className={styles.location}>
                <i className={styles.icon} title={ui.contact.city}>
                  <MapMarkerAltIcon />
                </i>
                <span itemProp="city">{personal.location}</span>
              </p>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <form
              noValidate
              className={cn(isLoading && styles.loading, isFormInvalid && styles.invalid)}
              onSubmit={onSubmit}
            >
              <input
                type="checkbox"
                name="botcheck"
                className={styles.trap}
                checked={trap}
                onChange={(event) => setTrap(event.target.checked)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className={styles.formGroup}>
                <label htmlFor="name">{ui.contact.nameLabel}</label>
                <input
                  id="name"
                  type="text"
                  placeholder={ui.contact.namePlaceholder}
                  className={cn(isInvalid("name") && styles.isInvalid)}
                  {...fieldProps("name")}
                />
                {warnings("name")}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{ui.contact.emailLabel}</label>
                <input
                  id="email"
                  type="email"
                  placeholder={ui.contact.emailPlaceholder}
                  required
                  className={cn(isInvalid("email") && styles.isInvalid)}
                  {...fieldProps("email")}
                />
                {warnings("email")}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">{ui.contact.messageLabel}</label>
                <textarea
                  id="message"
                  placeholder={ui.contact.messagePlaceholder}
                  required
                  className={cn(isInvalid("message") && styles.isInvalid)}
                  {...fieldProps("message")}
                />
                {warnings("message")}
              </div>
              <input type="submit" value={ui.contact.send} />
            </form>
          </div>
        </div>
        <div className={styles.rightSide} />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- height is a percentage of the section */}
      <img
        className={styles.illustration}
        src={personal.illustration}
        alt={ui.contact.illustrationAlt}
        height={705}
        itemProp="avatar"
      />
      <div className={styles.halfCircle} />
    </section>
  );
}
