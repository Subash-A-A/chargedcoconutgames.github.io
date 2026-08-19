import Link from "next/link";
import styles from "./BackLink.module.css";

export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className={styles.wrap}>
      <Link href={href} className={styles.link}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M10 6H2M5 2 1 6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        {children}
      </Link>
    </div>
  );
}
