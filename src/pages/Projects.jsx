import { projects } from "../data/profile";

const visualClasses = ["visual-blue", "visual-teal"];
export default function Projects() {
  return (
    <section className="section wrap" id="projects">
      <div className="section-heading reveal">
        <div><p className="eyebrow">SELECTED WORK</p><h2>Projects with purpose.</h2></div>
        <p className="section-note">A closer look at systems built around observability, network analysis, real-time data, and backend architecture.</p>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className={`project-card reveal ${index % 2 ? "project-reverse" : ""}`} key={project.id}>
            <div className={`project-visual ${visualClasses[index % visualClasses.length]}`} aria-hidden="true">
              <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
              <div className="dashboard-mock">
                <div className="mock-top"><i /><i /><i /><span>{index === 0 ? "LIVE SERVICE TELEMETRY" : "NETWORK TRAFFIC MONITOR"}</span></div>
                <div className="mock-lines"><b /><b /><b /></div>
                <div className="mock-metrics"><i /><i /><i /></div>
                <div className="mock-chart"><span /><span /><span /><span /><span /><span /><span /></div>
              </div>
            </div>
            <div className="project-content">
              <p className="project-index">PROJECT 0{index + 1} · {project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>
              <div className="tech-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <ul className="project-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <a className="text-link" href={project.github} target="_blank" rel="noreferrer">Explore GitHub ↗</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
