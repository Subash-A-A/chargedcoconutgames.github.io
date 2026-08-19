import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import styles from "./page.module.css";

const SECTIONS: { num: string; title: string; body: React.ReactNode }[] = [
  {
    num: "01 — Overview",
    title: "INTRODUCTION",
    body: (
      <>
        <p>
          Dual Drive is a mobile arcade racing game developed by Charged Coconut. This Privacy Policy explains how
          we handle information when you play our game. We are committed to being transparent about our practices.
        </p>
        <p>By downloading or playing Dual Drive, you agree to the practices described in this policy.</p>
      </>
    ),
  },
  {
    num: "02 — Data Collection",
    title: "WHAT WE COLLECT",
    body: (
      <>
        <p>
          Dual Drive itself does not directly collect any personal information from players. We do not require
          account registration, and we do not store your name, email, or any personally identifiable information on
          our servers.
        </p>
        <p>However, the following third-party services integrated into the game may collect data:</p>
        <ul>
          <li>Google AdMob — for serving advertisements</li>
          <li>Google Play Services — for app distribution and updates</li>
        </ul>
      </>
    ),
  },
  {
    num: "03 — Advertising",
    title: "ADS & ADMOB",
    body: (
      <>
        <p>
          Dual Drive displays advertisements provided by Google AdMob. AdMob may collect and use data to serve
          personalized or non-personalized ads, including:
        </p>
        <ul>
          <li>Device identifiers (Advertising ID)</li>
          <li>IP address and general location</li>
          <li>App usage and interaction data</li>
          <li>Device type and operating system</li>
        </ul>
        <p>
          For more information on how Google uses this data, please review Google&apos;s Privacy Policy at{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          You can opt out of personalized advertising by adjusting your device&apos;s ad settings under{" "}
          <strong>Settings → Google → Ads</strong> on Android.
        </p>
      </>
    ),
  },
  {
    num: "04 — Children",
    title: "CHILDREN'S PRIVACY",
    body: (
      <>
        <p>
          Dual Drive is intended for players aged 13 and above. We do not knowingly collect personal information
          from children under the age of 13.
        </p>
        <p>
          If you are a parent or guardian and believe your child under 13 has used the app, please contact us and we
          will take appropriate action.
        </p>
      </>
    ),
  },
  {
    num: "05 — Storage",
    title: "LOCAL DATA",
    body: (
      <p>
        Dual Drive saves game progress, settings, and high scores locally on your device. This data never leaves
        your device and is not transmitted to our servers. You can delete this data at any time by uninstalling the
        app.
      </p>
    ),
  },
  {
    num: "06 — Your Rights",
    title: "YOUR CHOICES",
    body: (
      <ul>
        <li>Uninstall the app at any time to remove all locally stored game data</li>
        <li>Opt out of personalized ads via your device&apos;s Google settings</li>
        <li>Contact us to ask questions about data handling</li>
      </ul>
    ),
  },
  {
    num: "07 — Updates",
    title: "POLICY CHANGES",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be reflected by the updated date at
        the top of this page. Continued use of the game after changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    num: "08 — Contact",
    title: "GET IN TOUCH",
    body: (
      <>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p>
          <a href="mailto:chargedcoconutgames@gmail.com">chargedcoconutgames@gmail.com</a>
        </p>
        <p>Charged Coconut, India</p>
      </>
    ),
  },
];

export const metadata = {
  title: "Privacy Policy — Dual Drive",
};

export default function DualDrivePrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.badge}>Legal Document</div>
          <h1 className={styles.h1}>
            PRIVACY
            <span>POLICY</span>
          </h1>
          <p className={styles.meta}>DUAL DRIVE &nbsp;·&nbsp; CHARGED COCONUT &nbsp;·&nbsp; LAST UPDATED: JULY 2026</p>
        </header>

        {SECTIONS.map((section, i) => (
          <div key={section.num} className={`${styles.section} ${i % 2 === 1 ? styles.alt : ""}`}>
            <div className={styles.sectionNum}>{section.num}</div>
            <h2>{section.title}</h2>
            {section.body}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
