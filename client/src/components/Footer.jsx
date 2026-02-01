import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: "4rem" }}>
      <div className="container" style={{ padding: "2rem 1rem", fontSize: "0.9rem", color: "var(--muted)" }}>
        <p>© {new Date().getFullYear()} ABBAS Gebäudereinigung</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
