import Section from "../Section.jsx";
import Tag from "../Tag.jsx";

export default function Skills({ site }) {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & technologies">
      <div className="panel">
        <div className="tags tags--big">
          {site.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </Section>
  );
}

