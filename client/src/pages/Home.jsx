import { Link } from "react-router-dom";
import DustCarousel from "../components/DustCarousel";
import buro1 from "../assets/buro/buro-1.jpg";
import garten1 from "../assets/garten/garten-1.jpg";
import fenster1 from "../assets/fenster/fenster-1.jpg";
import praxis1 from "../assets/praxis/praxis-1.jpg";
import treppe1 from "../assets/treppe/treppe-1.jpg";
import hausmeister1 from "../assets/meister/hausmeister1.jpg"

const heroImages = [buro1, praxis1, fenster1, garten1, treppe1,hausmeister1];
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-split">
          {/* TEXT (mobile -> sus) */}
          <div className="hero-copy">
            <span className="badge">München + Umland • Umkreis ~40 km</span>

            <h1>Gebäudereinigung & Hausmeisterservice in München</h1>

            <p>
              ABBAS bietet zuverlässige Reinigung für <b>Büros, Praxen</b> und
              Wohnanlagen – diskret, gründlich und planbar. Fenster,
              Treppenhäuser und Außenbereiche inklusive.
            </p>

            <div className="hero-cta">
              <Link className="btn" to="/kontakt">
                Kostenloses Angebot
              </Link>
              <a className="btn secondary" href="tel:+4917600000000">
                Anrufen
              </a>
              <Link className="btn secondary" to="/praxis">
                Praxisreinigung
              </Link>
            </div>

            <div className="kpi">
              <span>✅ Feste Pläne</span>
              <span>✅ Diskret (Praxis)</span>
              <span>✅ Persönlicher Service</span>
              <span>✅ Flexible Zeiten</span>
            </div>
          </div>

          {/* CAROUSEL (desktop -> stânga, mobile -> jos) */}
          <div className="hero-media">
            <DustCarousel
              images={heroImages}
              height={340}
              cols={26}
              rows={14}
              intervalMs={2200}
            />
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
            <Link to="/buroreinigung" className="card card-media">
              <div className="card-media-img">
                <img src={buro1} alt="Büroreinigung" />
              </div>

              <div className="card-media-text">
                <h3>Büroreinigung</h3>
                <p className="small">
                  Regelmäßige Unterhaltsreinigung – sauber, planbar,
                  zuverlässig.
                </p>
              </div>
            </Link>

            <Link to="/praxis" className="card card-media">
              <div className="card-media-img">
                <img src={praxis1} alt="Praxisreinigung" />
              </div>

              <div className="card-media-text">
                <h3>Praxisreinigung</h3>
                <p className="small">
                  Hygienebewusst, diskret, auf Wunsch mit Protokoll.
                </p>
              </div>
            </Link>

            <Link to="/fenster" className="card card-media">
              <div className="card-media-img">
                <img src={fenster1} alt="Büroreinigung" />
              </div>

              <div className="card-media-text">
                <h3>Fenster & Glas</h3>
                <p className="small">
                  Streifenfreie Glasreinigung für Eingänge, Büros und Praxen.
                </p>
              </div>
            </Link>

            <Link to="/treppen" className="card card-media">
              <div className="card-media-img">
                <img src={treppe1} alt="Treppenhausreinigung" />
              </div>

              <div className="card-media-text">
                <h3>Treppenhausreinigung</h3>
                <p className="small">
                  Saubere Flure und Gemeinschaftsbereiche in Wohnanlagen.
                </p>
              </div>
            </Link>

            <Link to="/meister" className="card card-media">
              <div className="card-media-img">
                <img src={hausmeister1} alt="Hausmeisterservice" />
              </div>

              <div className="card-media-text">
                <h3>Hausmeisterservice</h3>
                <p className="small">
                  Kontrollgänge & kleine Arbeiten – zuverlässig organisiert.
                </p>
              </div>
            </Link>
          </div>
          <Link to="/garten" className="card card-media">
            <div className="card-media-img">
              <img src={garten1} alt="Hausmeisterservice" />
            </div>

            <div className="card-media-text">
              <h3>Gartenpflege</h3>
              <p className="small">
                Laub, Hecken schneiden & formen, Pflege von Außenbereichen.
              </p>
            </div>
          </Link>

          <div style={{ marginTop: "1.25rem" }}>
            <Link className="btn secondary" to="/leistungen">
              Alle Leistungen
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "rgba(14,165,233,0.06)" }}
      >
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <h2>Praxisreinigung – diskret & hygienisch</h2>
              <p className="small">
                Reinigung außerhalb der Sprechzeiten möglich. Klare Abläufe,
                feste Ansprechpartner, auf Wunsch kurze Checkliste /
                Reinigungsprotokoll nach jedem Termin.
              </p>
              <div className="hero-cta" style={{ marginTop: "1rem" }}>
                <Link className="btn" to="/praxis">
                  Mehr zur Praxisreinigung
                </Link>
                <Link className="btn secondary" to="/kontakt">
                  Praxis-Angebot
                </Link>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Einsatzgebiet</h2>
          <p className="small">
            München + Umland (z.B. Dachau, Freising, Erding, Fürstenfeldbruck,
            Starnberg) – je nach Auftrag.
          </p>

          <div className="alert" style={{ marginTop: "1rem" }}>
            <b>Winterdienst:</b> auf Anfrage / in Vorbereitung (Warteliste
            möglich).
          </div>

          <div className="hero-cta" style={{ marginTop: "1rem" }}>
            <Link className="btn" to="/kontakt">
              Angebot anfordern
            </Link>
            <Link className="btn secondary" to="/preise">
              Preise & Pakete
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
