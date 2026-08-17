import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TerminalWindow from "../components/TerminalWindow";
import { profile } from "../data/profile";

const BOOT_LINES = [
  "$ whoami",
  profile.name,
  "$ cat role.txt",
  profile.role,
  "$ echo $STATUS",
  "available for internships and jobs — 2026/27",
];

export default function Home() {
  const [visibleLines, setVisibleLines] = useState(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? BOOT_LINES.length : 0
  );

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 420);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="wrap page">
      <TerminalWindow title={`~/${profile.handle}/intro.sh`}>
        <div className="boot-log mono">
          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className={line.startsWith("$") ? "boot-cmd" : "boot-out accent-teal"}
            >
              {line}
            </div>
          ))}
          {visibleLines < BOOT_LINES.length && <span className="cursor" />}
        </div>
      </TerminalWindow>

      <h1 className="hero-title">
        Building backend systems that don't <span className="accent-amber">fall over</span>.
      </h1>
      <p className="hero-summary">{profile.summary}</p>

      <div className="cta-row">
        <Link to="/projects" className="btn btn-primary">
          view projects →
        </Link>
        <Link to="/contact" className="btn btn-ghost">
          get in touch
        </Link>
      </div>
    </section>
  );
}