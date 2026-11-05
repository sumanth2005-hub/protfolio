
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState(
      () => localStorage.getItem("portfolio-theme") || "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
      <header className="navbar">
        <div className="navbar-inner">
          {/* Brand */}
          <Link
              to="/"
              className="brand"
              aria-label="Sumanth home"
              onClick={() => setMenuOpen(false)}
          >
            SUMANTH<span>.</span>
          </Link>

          {/* Mobile menu */}
          <button
              type="button"
              className="mobile-menu"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          {/* Navigation links */}
          <nav
              className={`nav-links ${menuOpen ? "is-open" : ""}`}
              aria-label="Main navigation"
          >
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
            ))}
          </nav>

          {/* Theme and Resume actions */}
          <div className="nav-actions">
            <button
                type="button"
                className="theme-toggle"
                onClick={() =>
                    setTheme((value) =>
                        value === "dark" ? "light" : "dark"
                    )
                }
                aria-label="Toggle color theme"
            >
              <span>☼</span>
              <i></i>
              <span>☾</span>
            </button>

            {/* Always opens the latest deployed resume */}
            <a
                className="resume-button"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume PDF in a new tab"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </header>
  );
}
