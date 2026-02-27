
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/start/hosseini.jpeg";

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
      <img src={logo} alt="SABA Reinigung München" className="brand-logo" />
      <span className="brand-text">
        <span className="brand-name">HOSSEINI</span>
        <span className="brand-sub">Reinigungsservice</span>
      </span>
    </Link>

    <div className="header-mail">
      <a href="mailto:contact@exemplu.de">
        <span className="mail-icon">✉️</span>
        <span className="mail-text">Kontakt@hosseinireinigugsservice</span>
      </a>
    </div>

    {/* Right actions (mobile) */}
    <div className="header-actions">
      <a className="icon-btn" href="tel:+4917600000000" aria-label="Anrufen">
        📞
      </a>

      <button
        className="icon-btn"
        onClick={() => setOpen((p) => !p)}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobileMenu"
        type="button"
      >
        {open ? "✕" : "☰"}
      </button>
    </div>

    {/* Desktop nav */}
    <nav className="desktop-nav">
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/praxis" style={linkStyle}>Praxis</NavLink>
      <NavLink to="/uberuns" style={linkStyle}>UberUns</NavLink>
      <NavLink to="/kontakt" className="btn">Angebot</NavLink>
      <a className="btn secondary" href="tel:+4917600000000">Anrufen</a>
    </nav>
  </div>

  {/* Mobile menu panel (mereu în DOM, animat din CSS) */}
  <div
    id="mobileMenu"
    className={`mobile-panel ${open ? "is-open" : ""}`}
    aria-hidden={!open}
  >
    <div className="container mobile-links">
      <NavLink to="/" style={linkStyle} onClick={() => setOpen(false)}>
        Home
      </NavLink>

      <NavLink to="/kontakt" style={linkStyle} onClick={() => setOpen(false)}>
        Kontakt
      </NavLink>

      <NavLink to="/praxis" style={linkStyle} onClick={() => setOpen(false)}>
        Praxisreinigung
      </NavLink>

      {/* Dacă vrei “Über uns”, fă o rută clară, ex: /uber-uns */}
      <NavLink to="/uberuns" style={linkStyle} onClick={() => setOpen(false)}>
        Über uns
      </NavLink>

      
    </div>
  </div>
</header>

  );
}

