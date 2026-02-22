import Section from "../Section.jsx";

export default function About({ site }) {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="split">
        <div className="prose">
          <p>{site.summary}</p>
          <p className="muted">
            This is a component-based React portfolio with theme persistence, reduced-motion
            support, and smooth section reveals.
          </p>
        </div>
        <div className="panel">
          <div className="panel__title">Quick facts</div>
          <ul className="list">
            <li>Responsive layout (mobile-first)</li>
            <li>Dark/light mode with system preference</li>
            <li>Animated background + hover micro-interactions</li>
            <li>Accessible focus styles + skip link</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

