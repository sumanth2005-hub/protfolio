import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner mono">
        <span className="text-dim">© {new Date().getFullYear()} {profile.name}</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">github</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>
          <a href={`mailto:${profile.email}`}>email</a>
        </div>
      </div>
    </footer>
  );
}
