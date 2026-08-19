import styles from "./Hero.module.css";

const PIXEL_PATTERN = [
  "active", "active", "yellow", "",
  "cyan", "", "active", "",
  "", "yellow", "", "active",
  "cyan", "", "", "active",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>Indie Arcade Games from India</div>
        <h1 className={styles.title}>
          <span className={styles.lineWhite}>ARCADE</span>
          <span className={styles.lineYellow}>GAMES.</span>
        </h1>
        <p className={styles.sub}>
          Small studio. Big ideas. We build tight, satisfying arcade games with personality — fast to pick up, hard
          to put down.
        </p>
        <a href="#games" className={styles.cta}>
          See our games
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </a>
        <div className={styles.pixelRow}>
          {PIXEL_PATTERN.map((variant, i) => (
            <div key={i} className={`${styles.pixel} ${variant ? styles[variant] : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
