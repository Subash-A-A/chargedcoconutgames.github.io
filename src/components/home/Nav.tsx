"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();
  const isPrivacy = pathname?.startsWith("/privacy");

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        CHARGED<span>COCONUT</span>
      </Link>
      <ul className={styles.links}>
        <li>
          <a href="/#games">Games</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <Link href="/privacy" className={isPrivacy ? styles.active : undefined}>
            Privacy
          </Link>
        </li>
      </ul>
    </nav>
  );
}
