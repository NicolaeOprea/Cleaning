import "../styles/impressum.css";

export default function Impressum() {
  return (
    <main className="container section impressum-page">
      <h1 className="impressum-title">Impressum</h1>

      <div className="impressum-card">
        <p className="impressum-company">
          <b>Hosseini Reinigungsservice</b>
        </p>

        <p className="impressum-text">
          Angaben gemaess Paragraph 5 TMG

          Hosseini Reinigungsservice
          Inhaber: [Dein Vorname] Hosseini
          [Deine Strasse und Hausnummer]
          [Deine PLZ und Dein Wohnort]

          Kontakt

          Telefon: [Deine Telefonnummer]
          E-Mail: kontakt@hosseinireinigungsservice.de

          Umsatzsteuer-ID

          Umsatzsteuer-Identifikationsnummer gemaess Paragraph
          27 a Umsatzsteuergesetz:
          [Hier deine Nummer eintragen - falls du sie noch
          nicht hast, schreib: "Steuernummer folgt nach
          Zuteilung durch das Finanzamt"]

          Aufsichtsbehoerde

          Gewerbeamt [Name deiner Stadt/Gemeinde]

          Redaktionell verantwortlich

          [Dein Vorname] Hosseini
          [Deine Adresse]

          EU-Streitschlichtung

          Die Europaeische Kommission stellt eine Plattform
          zur Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr/

          Unsere E-Mail-Adresse finden Sie oben im
          Impressum.

          Verbraucherstreitbeilegung /
          Universalschlichtungsstelle

          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p className="impressum-text">
          Telefon: +49 176 00000000
          <br />
          E-Mail: kontakt@hosseinireinigungsservice.de
        </p>

        <p className="impressum-text">
          Umsatzsteuer-ID: (falls vorhanden)
          <br />
          Verantwortlich fuer den Inhalt: Inhaber ABBAS
        </p>

        <p className="impressum-note">
          Hinweis: Diese Angaben sind Platzhalter und werden vor
          Veroeffentlichung mit den echten Firmendaten ersetzt.
        </p>
      </div>
    </main>
  );
}
