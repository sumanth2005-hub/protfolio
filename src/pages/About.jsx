import TerminalWindow from "../components/TerminalWindow";
import { education, skills, achievements, currentlyBuilding } from "../data/profile";

const SKILL_GROUPS = [
  ["languages", skills.languages],
  ["backend", skills.backend],
  ["databases", skills.databases],
  ["tools", skills.tools],
  ["libraries", skills.libraries],
  ["core_cs", skills.core],
];

export default function About() {
  return (
    <section className="wrap page">
      <h1 className="page-title mono">
        <span className="accent-teal">$</span> cat about.md
      </h1>

      <TerminalWindow title="~/education.json">
        <p className="edu-school">{education.school}</p>
        <p className="text-dim">{education.degree}</p>
        <p className="mono">
          {education.years} · CGPA {education.cgpa}
        </p>
        <p className="text-dim mono small">{education.extra.join(" · ")}</p>
      </TerminalWindow>

      <TerminalWindow title="~/skills/ls -la">
        <div className="skills-grid">
          {SKILL_GROUPS.map(([key, list]) => (
            <div key={key} className="skill-group">
              <p className="mono skill-key accent-amber">{key}/</p>
              <ul className="skill-list">
                {list.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </TerminalWindow>

      <TerminalWindow title="~/achievements.log">
        <ul className="plain-list">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </TerminalWindow>

      <TerminalWindow title="~/currently_building.txt">
        <p>{currentlyBuilding}</p>
      </TerminalWindow>
    </section>
  );
}
