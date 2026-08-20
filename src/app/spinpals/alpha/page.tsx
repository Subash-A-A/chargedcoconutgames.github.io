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
const APPS_SCRIPT_URL = "AKfycbxY3fiH6P_9KmhaSdrfpCnC-DSZddItyO5DJjSClnkjXjVJDGqM2AzjguCodMdRiPUB";

export default function SpinPalsAlphaPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SpinPalsThemeProvider>
      <SpinPalsPageShell
        eyebrow="Alpha Testing"
        tagline="Get early access to Spin Pals before anyone else. Alpha builds are rough around the edges — your feedback directly shapes the game."
      >
        {!submitted ? (
          <>
            <EmailSignupForm
              appsScriptUrl={APPS_SCRIPT_URL}
              game="spinpals"
              formType="alpha"
              buttonLabel="Get Access"
              badgeLabel="⚠ Early alpha — expect bugs and rough edges"
              accent="var(--paw-blue)"
              accentShadow="var(--paw-blue-dark)"
              features={[
                { text: "Earliest possible access to the game", color: "var(--paw-blue)" },
                { text: "Direct line to the developer", color: "var(--paw-yellow)" },
                { text: "Your feedback shapes core mechanics", color: "var(--paw-red)" },
                { text: "Android only — Google Play install", color: "var(--paw-green)" },
                { text: "Access instructions sent immediately", color: "var(--paw-brown)" },
              ]}
              footerNote={
                <>
                  No spam. Just alpha builds and occasional updates.
                  <br />
                  Use the same Google account on your Android device.
                </>
              }
              onSuccess={() => setSubmitted(true)}
            />
            <BackLink href="/">Back to Home</BackLink>
          </>
        ) : (
          <SuccessCard
            icon="🎉"
            title="Check your inbox!"
            subtext={[
              "Instructions have been sent to your email.",
              "Didn't receive it? Check your Spam/Junk folder.",
            ]}
            steps={[
              "Check your email for the Google Group invite link and join the alpha testing group",
              "Use the Play Store opt-in link from the pinned post inside the group",
              "Install Spin Pals from the Play Store and start playing",
            ]}
          />
        )}
      </SpinPalsPageShell>
    </SpinPalsThemeProvider>
  );
}
