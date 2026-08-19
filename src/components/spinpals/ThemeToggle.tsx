"use client";

import { useSpinPalsTheme } from "./ThemeProvider";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggle } = useSpinPalsTheme();
  return (
    <button className={styles.toggle} onClick={toggle} aria-label="Toggle light and dark theme">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
