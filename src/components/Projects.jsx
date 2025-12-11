import { projects } from "../data/projects";

function Projects() {
  return (
    <div>
      <p className="section-subtitle">Projects</p>
      <h2 className="section-title">Selected work</h2>
      <p className="section-description">
        A snapshot of the systems and interfaces I have worked on so far. I like
        to combine solid engineering with thoughtful design and clear user
        flows.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card" key={project.title}>
            <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4 }}>
              {project.year} · {project.type}
            </div>
            <h3 style={{ margin: "2px 0 4px", fontSize: 17 }}>{project.title}</h3>
            <div className="project-meta">
              <span>{project.role}</span>
            </div>
            <p style={{ fontSize: 13, color: "#d1d5db" }}>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <ul style={{ paddingLeft: 18, fontSize: 12, color: "#9ca3af" }}>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-links">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.label}
                  <span>↗</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
