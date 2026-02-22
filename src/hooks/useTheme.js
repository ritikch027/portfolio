import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio_theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const initial = useMemo(() => {
    if (typeof window === "undefined") return "light";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : getSystemTheme();
  }, []);

  const [theme, setThemeState] = useState(initial);

  const setTheme = (nextTheme) => {
    setThemeState(nextTheme);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.classList.add("theme-swap");
    const t = window.setTimeout(() => root.classList.remove("theme-swap"), 220);
    return () => window.clearTimeout(t);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) return;

    const onChange = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return;
      setThemeState(getSystemTheme());
    };

    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
  }, []);

  return { theme, setTheme, toggleTheme };
}

