import Section from "../Section.jsx";
import ProjectCard from "../ProjectCard.jsx";

export default function Projects({ site }) {
  return (
    <Section id="projects" eyebrow="Work" title="Featured projects">
      <div className="grid">
        {site.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}

