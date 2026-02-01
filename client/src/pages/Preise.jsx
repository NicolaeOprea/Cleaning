import QuoteWizard from "../components/QuoteWizard";
import { Link } from "react-router-dom";

export default function Preise() {
  return (
    <main className="container section">
      <h1>Preise & Angebot</h1>
      <p className="small">
        Jedes Objekt ist anders – daher erstellen wir ein individuelles Angebot.
        Für Praxen und Büros arbeiten wir mit festen Plänen und klaren Leistungen.
      </p>

      <div className="grid grid-2" style={{ marginTop: "1.5rem", alignItems: "start" }}>
        <div>
          <div className="grid grid-3">
            <div className="card">
              <h3>Basis</h3>
              <p className="small">Kleine Büros / geringe Frequenz</p>
            </div>
            <div className="card">
              <h3>Standard</h3>
              <p className="small">Regelmäßige Unterhaltsreinigung</p>
            </div>
            <div className="card">
              <h3>Individuell</h3>
              <p className="small">Praxis / Glas / Außenbereiche</p>
            </div>
          </div>

          <div className="alert" style={{ marginTop: "1rem" }}>
            <b>Winterdienst:</b> auf Anfrage / in Vorbereitung (Warteliste möglich).
          </div>

          <div className="hero-cta" style={{ marginTop: "1rem" }}>
            <Link className="btn" to="/kontakt">Kostenloses Angebot</Link>
            <Link className="btn secondary" to="/leistungen">Leistungen</Link>
          </div>
        </div>

        <QuoteWizard />
      </div>
    </main>
  );
}
