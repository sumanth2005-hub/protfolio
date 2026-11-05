import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <span>© {new Date().getFullYear()} {profile.name}. Designed with intent.</span>
      <span>{profile.location} · <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>
    </footer>
  );
}
