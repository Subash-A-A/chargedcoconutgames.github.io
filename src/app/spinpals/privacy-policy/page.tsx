import SpinPalsThemeProvider from "@/components/spinpals/ThemeProvider";
import SpinPalsPageShell from "@/components/spinpals/PageShell";
import styles from "./page.module.css";

const RULES: { color: string; title: string; body: React.ReactNode }[] = [
  {
    color: "var(--paw-blue)",
    title: "Information We Collect",
    body: (
      <>
        <p>We do not collect any personal information or usage data from players of Spin Pals. Specifically:</p>
        <ul>
          <li>
            <strong>No account or sign-in</strong> — the app never asks you to create an account, log in, or sign
            in.
          </li>
          <li>
            <strong>No personal data</strong> — we don&apos;t collect names, email addresses, contact info, or any
            other personally identifiable information.
          </li>
          <li>
            <strong>No advertising</strong> — there are no ads in the app, and no advertising SDKs or ad networks
            are used.
          </li>
          <li>
            <strong>No in-app purchases</strong> — there&apos;s nothing to buy, and no payment processing of any
            kind.
          </li>
          <li>
            <strong>No analytics or tracking</strong> — we don&apos;t use analytics, crash-reporting, or tracking
            tools that collect user or device data.
          </li>
          <li>
            <strong>No third-party data sharing</strong> — since nothing is collected, nothing is ever shared with
            or sold to third parties.
          </li>
        </ul>
      </>
    ),
  },
  {
    color: "var(--paw-yellow)",
    title: "Data Stored on Your Device",
    body: (
      <p>
        Your game progress, settings, and preferences — like your selected board size or visual theme — are stored{" "}
        <strong>locally on your device only</strong>. This information never leaves your device, is never
        transmitted to us or anyone else, and is deleted automatically if you uninstall the app.
      </p>
    ),
  },
  {
    color: "var(--paw-green)",
    title: "Children's Privacy",
    body: (
      <p>
        Spin Pals does not knowingly collect information from anyone, including children under 13 (or the relevant
        age of digital consent in your region) — because the app doesn&apos;t collect information from any user, of
        any age.
      </p>
    ),
  },
  {
    color: "var(--paw-red)",
    title: "Third-Party Content",
    body: (
      <p>
        Spin Pals uses icon assets licensed from Icons8. These icons are bundled into the app as visual assets and
        don&apos;t involve any data collection, tracking, or connection to Icons8&apos;s servers during gameplay.
      </p>
    ),
  },
  {
    color: "var(--paw-brown)",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time — for example, to reflect changes in the app&apos;s
        features. Any changes will be posted on this page with a revised effective date. Since the app doesn&apos;t
        collect contact information, we recommend checking back here periodically.
      </p>
    ),
  },
];

export const metadata = {
  title: "Spin Pals — Privacy Policy",
};

export default function SpinPalsPrivacyPolicyPage() {
  return (
    <SpinPalsThemeProvider>
      <SpinPalsPageShell
        title="PRIVACY POLICY"
        tagline="The short version: we don't collect anything. Here's the long version, in case you want the details."
        wide
      >
        <p className={styles.meta}>Effective date: 27-07-2026</p>

        <div className={styles.summaryCard}>
          <p>
            Spin Pals doesn&apos;t collect, store, transmit, or share any personal data. No ads, no in-app
            purchases, no accounts, no analytics, no tracking. That&apos;s the whole policy — everything below just
            spells it out.
          </p>
        </div>

        {RULES.map((rule) => (
          <section key={rule.title} className={styles.rule}>
            <div className={styles.ruleHead}>
              <span className={styles.tilePair}>
                <span style={{ background: rule.color }} />
                <span style={{ background: rule.color }} />
              </span>
              <h2>{rule.title}</h2>
            </div>
            {rule.body}
          </section>
        ))}

        <div className={styles.contactCard}>
          <h2>Questions?</h2>
          <p>If you have any questions about this Privacy Policy, reach out at:</p>
          <a href="mailto:chargedcoconutgames@gmail.com">chargedcoconutgames@gmail.com</a>
        </div>
      </SpinPalsPageShell>
    </SpinPalsThemeProvider>
  );
}
