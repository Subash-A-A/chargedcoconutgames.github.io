"use client";

import { createContext, useContext, useState } from "react";
import styles from "./theme.module.css";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggle: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useSpinPalsTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useSpinPalsTheme must be used inside SpinPalsThemeProvider");
  }
  return ctx;
}

export default function SpinPalsThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={styles.wrapper} data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
