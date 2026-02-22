import { useMemo, useState } from "react";
import Section from "../Section.jsx";

function buildMailto(email, subject, body) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${encodeURIComponent(email)}${q ? `?${q}` : ""}`;
}

export default function Contact({ site }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const subject = name ? `Portfolio contact from ${name}` : "Portfolio contact";
    const body = message ? `${message}\n\n— ${name || "Anonymous"}` : "";
    return buildMailto(site.email, subject, body);
  }, [name, message, site.email]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something">
      <div className="contact">
        <div className="panel">
          <div className="panel__title">Message me</div>
          <p className="muted">
            This form opens your email client (no backend needed). You can also copy my email.
          </p>

          <div className="form">
            <label className="field">
              <span className="field__label">Your name</span>
              <input
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                autoComplete="name"
              />
            </label>

            <label className="field">
              <span className="field__label">Message</span>
              <textarea
                className="input"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What do you want to build?"
              />
            </label>

            <div className="row">
              <a className="button button--primary" href={mailto}>
                Open email
              </a>
              <button className="button" type="button" onClick={copy}>
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>
        </div>

        <div className="panel panel--subtle">
          <div className="panel__title">Elsewhere</div>
          <div className="stack">
            {site.socials.map((s) => (
              <a key={s.href} className="cardlink" href={s.href} target="_blank" rel="noreferrer">
                <div className="cardlink__label">{s.label}</div>
                <div className="cardlink__hint">{new URL(s.href).hostname}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

