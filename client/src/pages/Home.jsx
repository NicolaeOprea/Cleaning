import { Link } from "react-router-dom";

import buro1 from "../assets/start/buro-1.jpg";
import garten1 from "../assets/start/garten-1.jpg";
import fenster1 from "../assets/start/fenster-1.jpg";
import praxis1 from "../assets/start/praxis-1.jpg";
import treppe1 from "../assets/start/treppe-1.jpg";
import heroImg from "../assets/start/hose-back.png";
import winter from "../assets/start/winter1.jpg";
import hausmeister from "../assets/start/hausmeister1.jpg";
import inner from "../assets/start/inner1.jpg";
import party from "../assets/start/party1.jpg";
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-split">
          {/* TEXT (mobile -> sus) */}
          <div className="hero-copy">
            

            <section className="hero-bg">
              <img src={heroImg} alt="" className="hero-bg-img" />

              <div className="hero-bg-content  ">
               

                <Link className="btn hero-btn" to="/kontakt">
                  Kostenloses Angebot
                </Link>

                <p>
                  Qualität, die man sieht – Service, den man spürt. Vereinbaren
                  Sie heute noch Ihr kostenloses Beratungsgespräch!
                </p>
                 <h1>
                  Hosseini Reinigungsservice: Strahlende Sauberkeit für Ihr
                  Objekt!
                </h1>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div className="kpi">
        <span>✅ Feste Pläne</span>
        <span>✅ Diskret (Praxis)</span>
        <span>✅ Persönlicher Service</span>
        <span>✅ Flexible Zeiten</span>
      </div>
      <section className="section">
        <span className="badge">München + Umland • Umkreis ~40 km</span>
        <div className="container">
          <h2>Unsere Dienstleistungen für Sie</h2>

          <div className="grid grid-3" style={{ marginTop: "1.25rem" }}>
            <div className="card card-media">
              <div className="card-media-img">
                <img src={praxis1} alt="Praxisreinigung" />
              </div>

              <div className="card-media-text">
                <h3>1. Praxisreinigung</h3>
                <p className="small">
                  Maximale Hygiene für Ihre Patienten. In Arztpraxen und
                  medizinischen Einrichtungen steht Sauberkeit an oberster
                  Stelle. Wir sorgen mit fachgerechter Reinigung und
                  Desinfektion für ein hygienisches Umfeld, in dem sich
                  Patienten und Personal sicher fühlen können.
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={buro1} alt="Büroreinigung" />
              </div>

              <div className="card-media-text">
                <h3>2. Büroreinigung</h3>
                <p className="small">
                  Ein sauberes Arbeitsumfeld für mehr Produktivität. Wir
                  reinigen Ihre Büroräume diskret und gründlich – ob täglich
                  oder in festen Intervallen. So schaffen wir die Basis für ein
                  konzentriertes Arbeiten und einen professionellen Eindruck bei
                  Ihren Kunden.
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={fenster1} alt="Büroreinigung" />
              </div>

              <div className="card-media-text">
                <h3>3. Glasreinigung</h3>
                <p className="small">
                  Klarer Durchblick ohne Streifen. Egal ob Schaufenster,
                  Wintergarten oder Glasfassaden: Wir befreien Ihre Glasflächen
                  von Schmutz und Umwelteinflüssen. Mit professionellem
                  Equipment sorgen wir für streifenfreien Glanz, auch an schwer
                  zugänglichen Stellen.
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={treppe1} alt="Treppenhausreinigung" />
              </div>

              <div className="card-media-text">
                <h3>4. Treppenhausreinigung</h3>
                <p className="small">
                  Die Visitenkarte Ihres Hauses. Das Treppenhaus ist der erste
                  Bereich, den Bewohner und Gäste betreten. Wir sorgen für eine
                  regelmäßige und gründliche Pflege vom Keller bis zum
                  Dachboden, damit Ihr Objekt immer einen gepflegten Eindruck
                  macht.
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={inner} alt="Unterhaltsreinigung" />
              </div>

              <div className="card-media-text">
                <h3>5. Unterhaltsreinigung</h3>
                <p className="small">
                  Regelmäßige Pflege für dauerhaften Werterhalt. Wir kümmern uns
                  um die kontinuierliche Sauberkeit Ihrer Räumlichkeiten. Nach
                  einem individuell auf Sie abgestimmten Plan erledigen wir alle
                  anfallenden Reinigungsarbeiten zuverlässig und in höchster
                  Qualität.
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={party} alt="Party- & Eventreinigung" />
              </div>

              <div className="card-media-text">
                <h3>6. Party- & Eventreinigung</h3>
                <p className="small">
                  Sauberkeit vor und nach dem Feiern. Genießen Sie Ihr Event,
                  wir kümmern uns um den Rest. Wir bereiten Ihre Location
                  perfekt vor und sorgen nach der Veranstaltung dafür, dass
                  alles schnell wieder in den ursprünglichen, sauberen Zustand
                  versetzt wird..
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={hausmeister} alt="Hausmeisterservice" />
              </div>

              <div className="card-media-text">
                <h3>7. Hausmeisterservice</h3>
                <p className="small">
                  Ihr Objekt in besten Händen. Wir übernehmen die Kontrolle und
                  kleinere Instandsetzungen an Ihrem Gebäude. Von der
                  Überwachung der Haustechnik bis hin zur allgemeinen Ordnung
                  sorgen wir dafür, dass alles reibungslos funktioniert.
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={winter} alt="Winterdienst" />
              </div>

              <div className="card-media-text">
                <h3>8. Winterdienst</h3>
                <p className="small">
                  Sicherheit bei Eis und Schnee. Wenn es glatt wird, sind wir
                  für Sie da. Wir räumen und streuen Gehwege, Einfahrten und
                  Parkplätze gemäß den gesetzlichen Vorschriften, damit Sie und
                  Ihre Besucher sicher ans Ziel kommen.
                </p>
              </div>
            </div>

            <div className="card card-media">
              <div className="card-media-img">
                <img src={garten1} alt="Gartenarbeit" />
              </div>

              <div className="card-media-text">
                <h3>9. Gartenarbeit</h3>
                <p className="small">
                  Grünanlagen, die begeistern. Ein gepflegter Garten wertet jede
                  Immobilie auf. Wir übernehmen das Rasenmähen, den
                  Heckenschnitt und die allgemeine Beetpflege, damit Ihre
                  Außenanlage zu jeder Jahreszeit top aussieht.
                </p>
              </div>
            </div>
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
            Unsere Kompetenz ist Ihr strahlender Vorteil. Wer auf den Hosseini
            Reinigungsservice setzt, erhält ein perfektes Ergebnis auf Basis von
            höchster Gründlichkeit und absoluter Zuverlässigkeit. Als
            inhabergeführtes Familienunternehmen stehen wir mit unserem Namen
            für eine persönliche Betreuung und eine Qualität, die keine
            Kompromisse macht. Wir verstehen, dass Sauberkeit nicht nur eine
            Aufgabe, sondern die Voraussetzung für Wohlbefinden und
            Professionalität in Ihren Räumen ist. Egal ob es um die tägliche
            Büroreinigung, die anspruchsvolle Pflege Ihrer Praxis oder die
            Instandhaltung Ihrer Außenanlagen geht – wir arbeiten mit modernen
            Methoden und einem scharfen Blick fürs Detail. Mit unserem
            engagierten Service, unserer familiären Zuverlässigkeit und dem
            Anspruch, immer das Beste für unsere Kunden herauszuholen, sind wir
            für Ihr Objekt die richtige Wahl.
          </p>

          <div className="hero-cta" style={{ marginTop: "1rem" }}>
            <Link className="btn" to="/kontakt">
              Angebot anfordern
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
