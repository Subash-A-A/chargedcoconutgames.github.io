import ThemeToggle from "./ThemeToggle";
import styles from "./PageShell.module.css";

type Props = {
  title?: string;
  eyebrow?: string;
  tagline: string;
  wide?: boolean;
  children: React.ReactNode;
};

const PAIR_COLORS = ["var(--paw-blue)", "var(--paw-yellow)", "var(--paw-red)", "var(--paw-green)"];

export default function SpinPalsPageShell({ title = "SPIN PALS", eyebrow, tagline, wide, children }: Props) {
  return (
    <>
      <div className={styles.topbar}>
        <span className={styles.homePill}>🐾 SPIN PALS</span>
        <ThemeToggle />
      </div>

      <div className={styles.hero}>
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.tagline}>{tagline}</p>
        <div className={styles.pairStrip}>
          {PAIR_COLORS.map((color) => (
            <span key={color} className={styles.pair}>
              <span style={{ background: color }} />
              <span style={{ background: color }} />
            </span>
          ))}
        </div>
      </div>

      <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,32 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z" />
      </svg>

      <main className={styles.main}>
        <div className={`${styles.contentInner} ${wide ? styles.wide : ""}`}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.pawRow}>
          <span style={{ background: "var(--paw-blue)" }} />
          <span style={{ background: "var(--paw-yellow)" }} />
          <span style={{ background: "var(--paw-red)" }} />
          <span style={{ background: "var(--paw-green)" }} />
          <span style={{ background: "var(--paw-brown)" }} />
        </div>
        Spin Pals · <a href="https://chargedcoconutgames.com">Charged Coconut Games</a>
      </footer>
    </>
  );
}
