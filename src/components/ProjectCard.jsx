import Tag from "./Tag.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <div className="card__top">
        <h3 className="h3">{project.title}</h3>
        <p className="muted">{project.description}</p>
      </div>

      <div className="card__meta">
        <div className="tags">
          {(project.tags ?? []).slice(0, 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="card__links">
          {(project.links ?? []).map((l) => (
            <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

