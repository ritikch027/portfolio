import Container from "./Container.jsx";
import { useInView } from "../hooks/useInView.js";

export default function Section({ id, eyebrow, title, children }) {
  const { ref, inView } = useInView({ once: true, rootMargin: "0px 0px -15% 0px" });
  return (
    <section id={id} className="section">
      <Container>
        <div ref={ref} className={`section__head reveal ${inView ? "reveal--in" : ""}`}>
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h2 className="h2">{title}</h2>
        </div>
        <div className={`section__body reveal ${inView ? "reveal--in" : ""}`}>{children}</div>
      </Container>
    </section>
  );
}

