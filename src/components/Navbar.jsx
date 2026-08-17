import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <NavLink to="/" className="brand mono">
          {profile.handle}@dev<span className="accent-teal">:~$</span>
        </NavLink>
        <nav className="nav-links mono">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}