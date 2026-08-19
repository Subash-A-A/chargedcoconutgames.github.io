"use client";

import { useState, type CSSProperties } from "react";
import styles from "./EmailSignupForm.module.css";

export type Feature = { text: string; color: string };

type Props = {
  appsScriptUrl: string;
  game: string;
  formType: "alpha" | "beta";
  buttonLabel: string;
  badgeLabel: string;
  features: Feature[];
  footerNote: React.ReactNode;
  accent: string; // e.g. "var(--paw-blue)"
  accentShadow: string; // e.g. "var(--paw-blue-dark)"
  onSuccess: () => void;
};

export default function EmailSignupForm({
  appsScriptUrl,
  game,
  formType,
  buttonLabel,
  badgeLabel,
  features,
  footerNote,
  accent,
  accentShadow,
  onSuccess,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  const accentVars = {
    "--btn-accent": accent,
    "--btn-accent-shadow": accentShadow,
  } as CSSProperties;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      await fetch(appsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: formType, game }),
      });
      onSuccess();
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again.");
      setStatus("error");
    }
  }

  return (
    <div style={accentVars}>
      <div className={styles.badge}>{badgeLabel}</div>

      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.text} className={styles.feature}>
            <span className={styles.dot} style={{ background: f.color }} />
            {f.text}
          </div>
        ))}
      </div>

      <form className={styles.card} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">
          Your Email Address
        </label>
        <div className={styles.row}>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Submitting..." : buttonLabel}
          </button>
        </div>
        {status === "error" && <div className={styles.error}>▸ {error}</div>}
      </form>

      <p className={styles.footerNote}>{footerNote}</p>
    </div>
  );
}
