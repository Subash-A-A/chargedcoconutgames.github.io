import Link from "next/link";
import Nav from "@/components/home/Nav";
import Footer from "@/components/home/Footer";
import { games } from "@/data/games";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policies — Charged Coconut",
};

export default function PrivacyHubPage() {
  return (
    <>
      <Nav />
      <div className={styles.wrapper}>
        <Link href="/" className={styles.backLink}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
          Back to Home
        </Link>

        <div className={styles.eyebrow}>Legal</div>
        <div className={styles.title}>
          PRIVACY<span>POLICIES</span>
        </div>
        <p className={styles.sub}>
          Select a game below to view its privacy policy. Each policy covers how data is handled within that
          specific game.
        </p>

        <div className={styles.sectionLabel}>Our Games</div>

        <div className={styles.gameList}>
          {games.map((game) => (
            <div key={game.id} className={styles.gameRow}>
              <div className={styles.gameRowLeft}>
                <div className={styles.gameName}>
                  {game.titleMain}
                  <span>{game.titleAccent}</span>
                </div>
                <div className={styles.gamePlatform}>Android · Charged Coconut</div>
              </div>
              <Link href={game.privacyHref} className={styles.privacyLink}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
                View Policy
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.studioNote}>
          <div className={styles.studioNoteLabel}>Studio Note</div>
          <p>
            Charged Coconut is a solo indie studio based in India. None of our games collect personal information
            directly. Third party SDKs such as Google AdMob may collect data as described in each game&apos;s
            individual policy.
          </p>
          <p style={{ marginTop: 10 }}>
            Questions? Reach us at <a href="mailto:chargedcoconutgames@gmail.com">chargedcoconutgames@gmail.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
