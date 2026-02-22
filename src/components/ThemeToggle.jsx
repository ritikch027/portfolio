import { MoonIcon, SunIcon } from "./Icon.jsx";

export default function ThemeToggle({ theme, toggleTheme }) {
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  return (
    <button className="icon-button" type="button" onClick={toggleTheme} aria-label={label}>
      <span className="icon-button__icon" aria-hidden="true">
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
}

