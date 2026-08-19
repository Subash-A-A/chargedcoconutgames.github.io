import Link from "next/link";
import styles from "./SuccessCard.module.css";

type Props = {
  icon: string;
  title: string;
  subtext: string[];
  steps?: string[];
  cta?: { label: string; href: string };
};

export default function SuccessCard({ icon, title, subtext, steps, cta }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      {subtext.map((line) => (
        <p key={line} className={styles.sub}>
          {line}
        </p>
      ))}

      {steps && steps.length > 0 && (
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step} className={styles.step}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div className={styles.stepText}>{step}</div>
            </div>
          ))}
        </div>
      )}

      {cta && (
        <Link href={cta.href} className={styles.cta}>
          ▸ {cta.label}
        </Link>
      )}
    </div>
  );
}
