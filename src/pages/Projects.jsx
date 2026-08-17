import TerminalWindow from "../components/TerminalWindow";
import { projects } from "../data/profile";

const STATUS_LABEL = { completed: "Completed", building: "In Progress" };

export default function Projects() {
  return (
    <section className="wrap page">
      <h1 className="page-title mono">
        <span className="accent-teal">$</span> ls ~/projects
      </h1>

      {projects.map((p) => (
        <TerminalWindow key={p.id} title={`~/projects/${p.id}.log`}>
          <div className="project-head">
            <h2 className="project-name">
              {p.name} <span className="text-dim">— {p.tagline}</span>
            </h2>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span
                className={`mono ${p.status === "completed" ? "accent-teal" : "accent-amber"}`}
                style={{ fontSize: "0.85em" }}
              >
                [{STATUS_LABEL[p.status]}]
              </span>
              <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
                github ↗
              </a>
            </div>
          </div>

          <div className="stack-tags mono">
            {p.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>

          <ul className="plain-list">
            {p.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </TerminalWindow>
      ))}
    </section>
  );
}