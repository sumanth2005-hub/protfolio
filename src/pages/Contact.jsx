import TerminalWindow from "../components/TerminalWindow";
import { profile } from "../data/profile";

const rows = [
  { key: "email", value: profile.email, href: `mailto:${profile.email}` },
  { key: "phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { key: "github", value: profile.github.replace("https://", ""), href: profile.github },
  { key: "linkedin", value: profile.linkedin.replace("https://", ""), href: profile.linkedin },
  { key: "location", value: profile.location, href: null },
];

export default function Contact() {
  return (
    <section className="wrap page">
      <h1 className="page-title mono">
        <span className="accent-teal">$</span> cat contact.env
      </h1>

      <TerminalWindow title="~/contact.env">
        <div className="contact-rows mono">
          {rows.map((r) => (
            <div key={r.key} className="contact-row">
              <span className="accent-amber">{r.key}</span>
              <span className="text-dim">=</span>
              {r.href ? (
                <a href={r.href} target="_blank" rel="noreferrer" className="contact-value">
                  {r.value}
                </a>
              ) : (
                <span className="contact-value">{r.value}</span>
              )}
            </div>
          ))}
        </div>
      </TerminalWindow>

      <p className="text-dim">
        Fastest way to reach me is email. Open to backend engineering internships and
        collaboration on projects that ship.
      </p>
    </section>
  );
}
