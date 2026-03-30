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
          Angaben gemÃ¤ÃŸ Â§ 5 TMG

          Hosseini Reinigungsservice
          Inhaber: [Dein Vorname] Hosseini
          [Deine StraÃŸe und Hausnummer]
          [Deine PLZ und Dein Wohnort]

          Kontakt

          Telefon: [Deine Telefonnummer]
          E-Mail: Kontakt@hosseinireinigungsservice.de

          Umsatzsteuer-ID

          Umsatzsteuer-Identifikationsnummer gemÃ¤ÃŸ Â§
          27 a Umsatzsteuergesetz:
          [Hier deine Nummer eintragen â€“ falls du sie noch
          nicht hast, schreib: â€žSteuernummer folgt nach
          Zuteilung durch das Finanzamtâ€œ]

          AufsichtsbehÃ¶rde

          Gewerbeamt [Name deiner Stadt/Gemeinde]

          Redaktionell verantwortlich

          [Dein Vorname] Hosseini
          [Deine Adresse]

          EU-Streitschlichtung

          Die EuropÃ¤ische Kommission stellt eine Plattform
          zur Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr/
          .

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
          E-Mail: Kontakt@hosseinireinigungsservice.de
        </p>

        <p className="impressum-text">
          Umsatzsteuer-ID: (falls vorhanden)
          <br />
          Verantwortlich fÃ¼r den Inhalt: Inhaber ABBAS
        </p>

        <p className="impressum-note">
          Hinweis: Diese Angaben sind Platzhalter und werden vor VerÃ¶ffentlichung
          mit den echten Firmendaten ersetzt.
        </p>
      </div>
    </main>
  );
}
