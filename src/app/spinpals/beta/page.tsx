"use client";

import { useState } from "react";
import SpinPalsThemeProvider from "@/components/spinpals/ThemeProvider";
import SpinPalsPageShell from "@/components/spinpals/PageShell";
import BackLink from "@/components/spinpals/BackLink";
import EmailSignupForm from "@/components/EmailSignupForm";
import SuccessCard from "@/components/SuccessCard";

// TODO: replace with the Spin Pals Google Apps Script Web App URL
// (create a copy of the script/sheet used for Dual Drive's alpha/beta signups
// and point it at a Spin Pals tab, then paste the deployment URL below).
const APPS_SCRIPT_URL = "PASTE_SPINPALS_APPS_SCRIPT_URL_HERE";

export default function SpinPalsBetaPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SpinPalsThemeProvider>
      <SpinPalsPageShell
        eyebrow="Beta Waitlist"
        tagline="Beta isn't open yet. Drop your email and we'll let you know the moment it is — no need to keep checking back."
      >
        {!submitted ? (
          <>
            <EmailSignupForm
              appsScriptUrl={APPS_SCRIPT_URL}
              game="spinpals"
              formType="beta"
              buttonLabel="Notify Me"
              badgeLabel="🕒 Coming soon — join the waitlist"
              accent="var(--paw-yellow)"
              accentShadow="var(--paw-yellow-dark)"
              features={[
                { text: "First to know when beta opens", color: "var(--paw-blue)" },
                { text: "Early access before public launch", color: "var(--paw-yellow)" },
                { text: "Direct line to the developer", color: "var(--paw-red)" },
                { text: "Android only — Google Play install", color: "var(--paw-green)" },
              ]}
              footerNote={
                <>
                  No spam. One email when beta opens, that&apos;s it.
                  <br />
                  Unsubscribe anytime.
                </>
              }
              onSuccess={() => setSubmitted(true)}
            />
            <BackLink href="/">Back to Home</BackLink>
          </>
        ) : (
          <SuccessCard
            icon="🐾"
            title="You're on the list!"
            subtext={[
              "We'll email you the moment beta opens.",
              "Not the patient type? Alpha access is open right now.",
            ]}
            cta={{ label: "Join Alpha Instead", href: "/spinpals/alpha" }}
          />
        )}
      </SpinPalsPageShell>
    </SpinPalsThemeProvider>
  );
}
