import Container from "../Container.jsx";
import { useInView } from "../../hooks/useInView.js";

export default function Hero({ site }) {
  const { ref, inView } = useInView({ once: true, rootMargin: "0px 0px -20% 0px" });

  return (
    <section id="home" className="hero">
      <Container>
        <div ref={ref} className={`hero__grid reveal ${inView ? "reveal--in" : ""}`}>
          <div className="hero__left">
            <div className="badge">
              <span className="badge__ping" aria-hidden="true" />
              <span>
                {site.role} • {site.location}
              </span>
            </div>

            <h1 className="h1">
              Hi, I'm <span className="gradient">{site.name}</span>.
            </h1>

            <p className="lead">{site.tagline}</p>

            <div className="hero__cta">
              <a className="button button--primary" href="#projects">
                View projects
              </a>
              <a className="button" href="#contact">
                Let's talk
              </a>
            </div>

            <div className="hero__highlights" aria-label="Highlights">
              {site.highlights.map((h) => (
                <div key={h.k} className="stat">
                  <div className="stat__k">{h.k}</div>
                  <div className="stat__v">{h.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__right" aria-hidden="true">
            <div className="glass">
              <div className="glass__grid">
                <div className="glass__tile" />
                <div className="glass__tile" />
                <div className="glass__tile" />
                <div className="glass__tile" />
                <div className="glass__tile" />
                <div className="glass__tile" />
                <div className="glass__tile" />
                <div className="glass__tile" />
              </div>
              <div className="glass__shine" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
