import Link from "next/link";
import type { GameLink } from "@/data/games";
import styles from "./PlayButton.module.css";

export default function PlayButton({ label, href, accent, external }: GameLink) {
  const className = `${styles.btn} ${styles[accent]}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M2 1l10 6-10 6V1z" />
        </svg>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
        <path d="M2 1l10 6-10 6V1z" />
      </svg>
      {label}
    </Link>
  );
}
