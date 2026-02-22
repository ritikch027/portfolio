import { useEffect, useMemo } from "react";
import { SITE } from "./content.js";
import { useTheme } from "./hooks/useTheme.js";
import { useScrollSpy } from "./hooks/useScrollSpy.js";
import Navbar from "./components/Navbar.jsx";
import FloatingOrbs from "./components/FloatingOrbs.jsx";
import Hero from "./components/sections/Hero.jsx";
import About from "./components/sections/About.jsx";
import Projects from "./components/sections/Projects.jsx";
import Skills from "./components/sections/Skills.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  const sectionIds = useMemo(() => ["home", "about", "projects", "skills", "contact"], []);
  const spyOptions = useMemo(() => ({ rootMargin: "-35% 0px -55% 0px" }), []);
  const activeSection = useScrollSpy(sectionIds, spyOptions);

  useEffect(() => {
    document.title = `${SITE.name} • Portfolio`;
  }, []);

  return (
    <div className="app">
      <FloatingOrbs />
      <Navbar
        name={SITE.name}
        links={SITE.nav}
        activeId={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main id="content">
        <Hero site={SITE} />
        <About site={SITE} />
        <Projects site={SITE} />
        <Skills site={SITE} />
        <Contact site={SITE} />
      </main>

      <Footer site={SITE} />
    </div>
  );
}
