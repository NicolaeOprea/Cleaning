import { Link } from "react-router-dom";

export default function Leistungen() {
  return (
    <main className="container section">
      <h1>Leistungen</h1>
      <p className="small">Gebäudereinigung in München und Umgebung. Fokus: Büro & Praxis. Keine Baustellenbereiche.</p>

      <div className="grid grid-2" style={{ marginTop: "1.5rem" }}>
        <div className="card">
          <h3>Büroreinigung</h3>
          <ul className="small">
            <li>Unterhaltsreinigung nach Plan</li>
            <li>Sanitärbereiche & Küchen</li>
            <li>Müllentsorgung (nach Absprache)</li>
          </ul>
        </div>

        <div className="card">
          <h3>Praxisreinigung</h3>
          <ul className="small">
            <li>Diskret & hygienebewusst</li>
            <li>Außerhalb der Sprechzeiten möglich</li>
            <li>Auf Wunsch: Reinigungsprotokoll</li>
          </ul>
          <Link className="btn secondary" to="/praxis">Praxis-Seite</Link>
        </div>

        <div className="card">
          <h3>Fenster- & Glasreinigung</h3>
          <ul className="small">
            <li>Fenster, Glasflächen, Eingänge</li>
            <li>Streifenfrei & materialschonend</li>
          </ul>
        </div>

        <div className="card">
          <h3>Treppenhausreinigung</h3>
          <ul className="small">
            <li>Flure, Treppen, Handläufe</li>
            <li>Regelmäßige Pflege</li>
          </ul>
        </div>

        <div className="card">
          <h3>Hausmeisterservice</h3>
          <ul className="small">
            <li>Kontrollgänge (nach Plan)</li>
            <li>Kleine Arbeiten (nach Absprache)</li>
          </ul>
        </div>

        <div className="card">
          <h3>Gartenpflege</h3>
          <ul className="small">
            <li>Laub sammeln</li>
            <li>Hecken schneiden & formen</li>
            <li>Pflege Außenbereiche</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <Link className="btn" to="/kontakt">Kostenloses Angebot anfordern</Link>
      </div>
    </main>
  );
}
