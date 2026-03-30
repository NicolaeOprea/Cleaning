import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import büro from "../assets/buro.webp";
import garten1 from "../assets/garten.webp";
import fenster1 from "../assets/fenster.webp";
import praxis1 from "../assets/praxis.webp";
import treppe1 from "../assets/treppen.webp";

import winter from "../assets/winter.webp";
import hausmeister from "../assets/hausmeister.webp";
import gebeude from "../assets/gebeude.webp";
import party from "../assets/party.webp";

export default function Home() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (!activeService) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveService(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeService]);

  const onServiceClick = (event) => {
    if (typeof window !== "undefined" && window.innerWidth <= 900) return;

    const card = event.target.closest(".service-card");
    if (!card) return;

    const img = card.querySelector("img");
    const title = card.querySelector("h3");
    const desc = card.querySelector(".small");
    if (!img || !title || !desc) return;

    setActiveService({
      image: img.getAttribute("src") || "",
      alt: img.getAttribute("alt") || "",
      title: title.textContent || "",
      description: desc.textContent || "",
    });
  };

  return (
    <main>
      <section className="hero">
        <div className="container hero-split">
          <div className="hero-copy">
            <section className="hero-bg">
              
             <HeroSlider />

              <div className="hero-bg-content">
                <Link className="btn hero-btn" to="/kontakt">
                  Kostenlos Angebot
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="kpi">
        <span>✅ Feste Plane</span>
        <span>✅ Diskret (Praxis)</span>
        <span>✅ Persönlicher Service</span>
        <span>✅ Flexible Zeiten</span>
      </div>

      <section className="section">
        <div className="container">
          <h1>Professionelle Reinigung in München</h1>
          <span className="badge">München + Umland • Umkreis ~40 km</span>
          <h2>Unsere Dienstleistungen fur Sie</h2>

          <div
            className="grid grid-3 services-puzzle"
            style={{ marginTop: "1.25rem" }}
            onClick={onServiceClick}
          >
            <div className="card card-media service-card service-card-1">
              <div className="card-media-img service-img service-img-1">
                <img src={praxis1} alt="Praxisreinigung" />
              </div>
              <div className="card-media-text">
                <h3>Praxisreinigung</h3>
                <p className="small">
                  Maximale Hygiene für Ihre Patienten. In Arztpraxen und
                  medizinischen Einrichtungen steht Sauberkeit an oberster
                  Stelle. Wir sorgen mit fachgerechter Reinigung und
                  Desinfektion für ein hygienisches Umfeld, in dem sich
                  Patienten und Personal sicher fühlen können.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-2">
              <div className="card-media-img service-img service-img-2">
                <img src={büro} alt="Büroreinigung" />
              </div>
              <div className="card-media-text">
                <h3>Büroreinigung</h3>
                <p className="small">
                  Ein sauberes Arbeitsumfeld für mehr Produktivität. Wir
                  reinigen Ihre Büroräume diskret und gründlich – ob täglich
                  oder in festen Intervallen. So schaffen wir die Basis für ein
                  konzentriertes Arbeiten und einen professionellen Eindruck bei
                  Ihren Kunden.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-3">
              <div className="card-media-img service-img service-img-3">
                <img src={fenster1} alt="Glasreinigung" />
              </div>
              <div className="card-media-text">
                <h3>Glasreinigung</h3>
                <p className="small">
                  Klarer Durchblick ohne Streifen. Egal ob Schaufenster,
                  Wintergarten oder Glasfassaden: Wir befreien Ihre Glasflächen
                  von Schmutz und Umwelteinflüssen. Mit professionellem
                  Equipment sorgen wir für streifenfreien Glanz, auch an schwer
                  zugänglichen Stellen.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-4">
              <div className="card-media-img service-img service-img-4">
                <img src={treppe1} alt="Treppenhausreinigung" />
              </div>
              <div className="card-media-text">
                <h3>Treppenhausreinigung</h3>
                <p className="small">
                  Die Visitenkarte Ihres Hauses. Das Treppenhaus ist der erste
                  Bereich, den Bewohner und Gäste betreten. Wir sorgen für eine
                  regelmäßige und gründliche Pflege vom Keller bis zum
                  Dachboden, damit Ihr Objekt immer einen gepflegten Eindruck
                  macht.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-5">
              <div className="card-media-img service-img service-img-5">
                <img src={gebeude} alt="Unterhaltsreinigung" />
              </div>
              <div className="card-media-text">
                <h3>Unterhaltsreinigung</h3>
                <p className="small">
                  Regelmäßige Pflege für dauerhaften Werterhalt. Wir kümmern uns
                  um die kontinuierliche Sauberkeit Ihrer Räumlichkeiten. Nach
                  einem individuell auf Sie abgestimmten Plan erledigen wir alle
                  anfallenden Reinigungsarbeiten zuverlässig und in höchster
                  Qualität.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-6">
              <div className="card-media-img service-img service-img-6">
                <img src={party} alt="Party- und Eventreinigung" />
              </div>
              <div className="card-media-text">
                <h3>Party- & Eventreinigung</h3>
                <p className="small">
                  Sauberkeit vor und nach dem Feiern. Genießen Sie Ihr Event,
                  wir kümmern uns um den Rest. Wir bereiten Ihre Location
                  perfekt vor und sorgen nach der Veranstaltung dafür, dass
                  alles schnell wieder in den ursprünglichen, sauberen Zustand
                  versetzt wird.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-7">
              <div className="card-media-img service-img service-img-7">
                <img src={hausmeister} alt="Hausmeisterservice" />
              </div>
              <div className="card-media-text">
                <h3>Hausmeisterservice</h3>
                <p className="small">
                  Ihr Objekt in besten Händen. Wir übernehmen die Kontrolle und
                  kleinere Instandsetzungen an Ihrem Gebäude. Von der
                  Überwachung der Haustechnik bis hin zur allgemeinen Ordnung
                  sorgen wir dafür, dass alles reibungslos funktioniert.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-8">
              <div className="card-media-img service-img service-img-8">
                <img src={winter} alt="Winterdienst" />
              </div>
              <div className="card-media-text">
                <h3>Winterdienst</h3>
                <p className="small">
                  Sicherheit bei Eis und Schnee. Wenn es glatt wird, sind wir
                  für Sie da. Wir räumen und streuen Gehwege, Einfahrten und
                  Parkplätze gemäß den gesetzlichen Vorschriften, damit Sie und
                  Ihre Besucher sicher ans Ziel kommen.
                </p>
              </div>
            </div>

            <div className="card card-media service-card service-card-9">
              <div className="card-media-img service-img service-img-9">
                <img src={garten1} alt="Gartenarbeit" />
              </div>
              <div className="card-media-text">
                <h3>Gartenarbeit</h3>
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
            <Link className="btn btn-kontact" to="/kontakt">
              Angebot anfordern
            </Link>
          </div>
        </div>
      </section>

      {activeService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setActiveService(null)}
        >
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="service-modal-close"
              type="button"
              onClick={() => setActiveService(null)}
              aria-label="Close"
            >
              X
            </button>
            <img
              className="service-modal-img"
              src={activeService.image}
              alt={activeService.alt}
            />
            <div className="service-modal-content">
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
