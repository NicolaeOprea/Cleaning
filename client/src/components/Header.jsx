import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  color: isActive ? "var(--primary-dark)" : "var(--text)",
  fontWeight: isActive ? 700 : 500,
});

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
          gap: "1rem",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "rgba(14,165,233,0.15)",
              border: "1px solid var(--border)",
              display: "grid",
              placeItems: "center",
              fontWeight: 800,
              color: "var(--primary-dark)",
            }}
          >
            A
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 800 }}>ABBAS</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
              Reinigung • München
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          <NavLink to="/leistungen" style={linkStyle}>
            Leistungen
          </NavLink>
          <NavLink to="/praxis" style={linkStyle}>
            Praxis
          </NavLink>
          <NavLink to="/preise" style={linkStyle}>
            Preise
          </NavLink>
          <NavLink to="/referenzen" style={linkStyle}>
            Referenzen
          </NavLink>
          <NavLink to="/kontakt" className="btn">
            Angebot
          </NavLink>

          <a className="btn secondary" href="tel:+4917600000000" aria-label="Jetzt anrufen">
            Anrufen
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="btn secondary"
          style={{ padding: "0.6rem 0.9rem" }}
          aria-label="Menü öffnen"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div style={{ borderTop: "1px solid var(--border)", background: "white" }}>
          <div className="container" style={{ padding: "1rem 1rem 1.25rem" }}>
            <div className="grid" style={{ gap: 10 }}>
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
        </div>
      )}
    </header>
  );
}

