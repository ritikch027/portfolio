import { useEffect, useMemo, useState } from "react";
import Container from "./Container.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export default function Navbar({ name, links, activeId, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  const items = useMemo(() => links ?? [], [links]);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const onNavigate = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`nav ${elevated ? "nav--elevated" : ""}`}>
      <Container className="nav__inner">
        <button
          className="brand"
          type="button"
          onClick={() => onNavigate("home")}
          aria-label={`${name} home`}
        >
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__dot" />
          </span>
          <span className="brand__text">{name}</span>
        </button>

        <nav className="nav__links" aria-label="Primary">
          {items.map((l) => {
            const active = l.id === activeId;
            return (
              <button
                key={l.id}
                className={`navlink ${active ? "navlink--active" : ""}`}
                type="button"
                onClick={() => onNavigate(l.id)}
              >
                {l.label}
              </button>
            );
          })}
        </nav>

        <div className="nav__actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            className="hamburger"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="hamburger__bar" />
            <span className="hamburger__bar" />
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        className={`mobile ${open ? "mobile--open" : ""}`}
        style={{ "--count": clamp(items.length, 1, 8) }}
      >
        <Container className="mobile__inner">
          {items.map((l, idx) => {
            const active = l.id === activeId;
            return (
              <button
                key={l.id}
                className={`mobilelink ${active ? "mobilelink--active" : ""}`}
                type="button"
                style={{ "--i": idx }}
                onClick={() => onNavigate(l.id)}
              >
                {l.label}
              </button>
            );
          })}
        </Container>
      </div>
    </header>
  );
}

