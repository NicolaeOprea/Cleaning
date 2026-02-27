import { Link } from "react-router-dom";
import praxis from "../assets/start/praxis-1.jpg"

export default function Praxis() {
  return (
    <main className="container section">
      <span className="badge">Praxisreinigung • München</span>
      <h1>Praxisreinigung – diskret, hygienisch, planbar</h1>
      <p className="small">
        Ideal für Arztpraxen, Zahnarzt, Physiotherapie, Therapie- und Gesundheitsbereiche.
        Reinigung außerhalb der Öffnungszeiten möglich.
      </p>
<div className="card card-media">
              <div className="card-media-img">
                <img src={praxis} alt="Büroreinigung" />
              </div>

              <div className="card-media-text">
                <h3>Praxisreinigung</h3>
                <p className="small">
                  Ein sauberes Arbeitsumfeld für mehr Produktivität. Wir
                  reinigen Ihre Büroräume diskret und gründlich – ob täglich
                  oder in festen Intervallen. So schaffen wir die Basis für ein
                  konzentriertes Arbeiten und einen professionellen Eindruck bei
                  Ihren Kunden.
                </p>
              </div>
            </div>
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
        <Link className="btn secondary" to="/uberuns">Alle Leistungen</Link>
      </div>
    </main>
  );
}
