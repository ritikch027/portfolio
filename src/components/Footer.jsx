import Container from "./Container.jsx";

export default function Footer({ site }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="muted">
          © {year} {site.name}. Built with React.
        </div>
        <div className="footer__links">
          {site.socials.map((s) => (
            <a key={s.href} className="link" href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

