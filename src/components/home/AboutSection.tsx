import styles from "./AboutSection.module.css";

const STATS: { value: string; color?: string; label: string }[] = [
  { value: "1+", label: "Games shipped" },
  { value: "SSS", color: "var(--yellow)", label: "Max style rank" },
  { value: "50+", label: "Total Downloads" },
  { value: "∞", color: "var(--pink)", label: "Replayability" },
];

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <div>
        <div className={styles.title}>
          CHARGED<span>COCONUT</span>
        </div>
        <div className={styles.body}>
          <p>Solo indie studio based in India, building arcade games with tight mechanics and strong visual identity.</p>
          <p>
            Every game starts with one question: does the core mechanic feel good in the first 10 seconds? If yes, we
            build around it.
          </p>
          <p>Voxel art. Chiptune audio. Fast runs. That&apos;s the formula.</p>
        </div>
      </div>

      <div className={styles.statGrid}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statNum} style={stat.color ? { color: stat.color } : undefined}>
              {stat.value}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
