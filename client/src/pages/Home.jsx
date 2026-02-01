import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="badge">München + Umland • Umkreis ~40 km</span>

          <h1>Gebäudereinigung & Hausmeisterservice in München</h1>

          <p>
            ABBAS bietet zuverlässige Reinigung für <b>Büros, Praxen</b> und Wohnanlagen –
            diskret, gründlich und planbar. Fenster, Treppenhäuser und Außenbereiche inklusive.
          </p>

          <div className="hero-cta">
            <Link className="btn" to="/kontakt">Kostenloses Angebot anfordern</Link>
            <a className="btn secondary" href="tel:+4917600000000">Jetzt anrufen</a>
            <Link className="btn secondary" to="/praxis">Praxisreinigung ansehen</Link>
          </div>

          <div className="kpi">
            <span>✅ Feste Pläne</span>
            <span>✅ Diskret (Praxis)</span>
            <span>✅ Persönlicher Service</span>
            <span>✅ Flexible Zeiten</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Leistungen</h2>
          <p className="small">
            Fokus: Büro & Praxis. Keine Baustellenbereiche.
          </p>

          <div className="grid grid-3" style={{ marginTop: "1.25rem" }}>
            <div className="card">
              <h3>Büroreinigung</h3>
              <p className="small">Regelmäßige Unterhaltsreinigung – sauber, planbar, zuverlässig.</p>
            </div>
            <div className="card">
              <h3>Praxisreinigung</h3>
              <p className="small">Hygienebewusst, diskret, auf Wunsch mit Protokoll.</p>
            </div>
            <div className="card">
              <h3>Fenster & Glas</h3>
              <p className="small">Streifenfreie Glasreinigung für Eingänge, Büros und Praxen.</p>
            </div>
            <div className="card">
              <h3>Treppenhausreinigung</h3>
              <p className="small">Saubere Flure und Gemeinschaftsbereiche in Wohnanlagen.</p>
            </div>
            <div className="card">
              <h3>Hausmeisterservice</h3>
              <p className="small">Kontrollgänge & kleine Arbeiten – zuverlässig organisiert.</p>
            </div>
            <div className="card">
              <h3>Gartenpflege</h3>
              <p className="small">Laub, Hecken schneiden & formen, Pflege von Außenbereichen.</p>
            </div>
          </div>

          <div style={{ marginTop: "1.25rem" }}>
            <Link className="btn secondary" to="/leistungen">Alle Leistungen</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(14,165,233,0.06)" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <h2>Praxisreinigung – diskret & hygienisch</h2>
              <p className="small">
                Reinigung außerhalb der Sprechzeiten möglich. Klare Abläufe, feste Ansprechpartner,
                auf Wunsch kurze Checkliste / Reinigungsprotokoll nach jedem Termin.
              </p>
              <div className="hero-cta" style={{ marginTop: "1rem" }}>
                <Link className="btn" to="/praxis">Mehr zur Praxisreinigung</Link>
                <Link className="btn secondary" to="/kontakt">Praxis-Angebot</Link>
              </div>
            </div>

            <div className="card">
              <h3>So läuft’s</h3>
              <ol className="small" style={{ lineHeight: 1.8, margin: 0, paddingLeft: "1.2rem" }}>
                <li>Kurze Anfrage (Objekt, m², Intervall)</li>
                <li>Optional Besichtigung / Rückruf</li>
                <li>Fester Plan + Starttermin</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Einsatzgebiet</h2>
          <p className="small">
            München + Umland (z.B. Dachau, Freising, Erding, Fürstenfeldbruck, Starnberg) – je nach Auftrag.
          </p>

          <div className="alert" style={{ marginTop: "1rem" }}>
            <b>Winterdienst:</b> auf Anfrage / in Vorbereitung (Warteliste möglich).
          </div>

          <div className="hero-cta" style={{ marginTop: "1rem" }}>
            <Link className="btn" to="/kontakt">Angebot anfordern</Link>
            <Link className="btn secondary" to="/preise">Preise & Pakete</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
