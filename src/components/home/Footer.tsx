import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        CHARGED<span>COCONUT</span>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <a href="/app-ads.txt">app-ads.txt</a>
        </li>
      </ul>
      <div className={styles.copy}>© 2026 Charged Coconut. All rights reserved. Made in India.</div>
    </footer>
  );
}
