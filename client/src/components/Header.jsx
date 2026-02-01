
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "var(--primary-dark)" : "var(--text)",
  fontWeight: isActive ? 700 : 600,
});

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        {/* Brand */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-badge">A</span>
          <span className="brand-text">
            <span className="brand-name">ABBAS</span>
            <span className="brand-sub">Reinigung • München</span>
          </span>
        </Link>

        {/* Right actions (mobile) */}
        <div className="header-actions">
          <a className="icon-btn" href="tel:+4917600000000" aria-label="Anrufen">
            📞
          </a>
          <button
            className="icon-btn"
            onClick={() => setOpen((p) => !p)}
            aria-label="Menü öffnen"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          <NavLink to="/leistungen" style={linkStyle}>Leistungen</NavLink>
          <NavLink to="/praxis" style={linkStyle}>Praxis</NavLink>
          <NavLink to="/preise" style={linkStyle}>Preise</NavLink>
          <NavLink to="/referenzen" style={linkStyle}>Referenzen</NavLink>
          <NavLink to="/kontakt" className="btn">Angebot</NavLink>
          <a className="btn secondary" href="tel:+4917600000000">Anrufen</a>
        </nav>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mobile-panel">
          <div className="container mobile-links">
            <NavLink to="/leistungen" style={linkStyle} onClick={() => setOpen(false)}>
              Leistungen
            </NavLink>
            <NavLink to="/praxis" style={linkStyle} onClick={() => setOpen(false)}>
              Praxisreinigung
            </NavLink>
            <NavLink to="/preise" style={linkStyle} onClick={() => setOpen(false)}>
              Preise & Angebot
            </NavLink>
            <NavLink to="/referenzen" style={linkStyle} onClick={() => setOpen(false)}>
              Referenzen
            </NavLink>
            <NavLink to="/kontakt" className="btn" onClick={() => setOpen(false)}>
              Kostenloses Angebot
            </NavLink>
            <a className="btn secondary" href="tel:+4917600000000" onClick={() => setOpen(false)}>
              Jetzt anrufen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

