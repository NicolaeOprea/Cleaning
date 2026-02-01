import { Link } from "react-router-dom";

export default function Praxis() {
  return (
    <main className="container section">
      <span className="badge">Praxisreinigung • München</span>
      <h1>Praxisreinigung – diskret, hygienisch, planbar</h1>
      <p className="small">
        Ideal für Arztpraxen, Zahnarzt, Physiotherapie, Therapie- und Gesundheitsbereiche.
        Reinigung außerhalb der Öffnungszeiten möglich.
      </p>

      <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
        <div className="card">
          <h3>Unser Fokus</h3>
          <ul className="small">
            <li>Hygienebewusste Abläufe</li>
            <li>Diskretion & Zuverlässigkeit</li>
            <li>Feste Reinigungspläne</li>
          </ul>
        </div>
        <div className="card">
          <h3>Optional: Reinigungsprotokoll</h3>
          <p className="small">
            Auf Wunsch erhalten Sie eine kurze Checkliste nach jedem Termin (PDF per Email).
          </p>
        </div>
      </div>

      <div className="hero-cta" style={{ marginTop: "1.5rem" }}>
        <Link className="btn" to="/kontakt">Praxis-Angebot anfordern</Link>
        <Link className="btn secondary" to="/leistungen">Alle Leistungen</Link>
      </div>
    </main>
  );
}
