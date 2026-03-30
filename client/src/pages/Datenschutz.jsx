import "../styles/datenschutz.css";

export default function Datenschutz() {
  return (
    <main className="container section datenschutz-page">
      <h1 className="datenschutz-title">Datenschutzerklaerung</h1>

      <div className="datenschutz-card">
        <p className="datenschutz-text">
          1. Datenschutz auf einen Blick

          Allgemeine Hinweise

          Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persoenlich identifiziert werden koennen.

          Wer ist verantwortlich fuer die Datenerfassung auf dieser Website?

          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber:
          Hosseini Reinigungsservice
          Inhaber: [Dein Vorname] Hosseini
          E-Mail: kontakt@hosseinireinigungsservice.de
        </p>

        <p className="datenschutz-text">
          2. Datenerfassung durch das Kontaktformular

          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und fuer den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.

          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfuellung eines Vertrags
          zusammenhaengt oder zur Durchfuehrung vorvertraglicher Massnahmen
          erforderlich ist. In allen uebrigen Faellen beruht die Verarbeitung
          auf unserem berechtigten Interesse an der effektiven Bearbeitung der
          an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <p className="datenschutz-text">
          3. Ihre Rechte

          Sie haben jederzeit das Recht, unentgeltlich Auskunft ueber Herkunft,
          Empfaenger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder
          Loeschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen
          zum Thema Datenschutz koennen Sie sich jederzeit unter der im
          Impressum angegebenen Adresse an uns wenden.

          Ein paar wichtige Hinweise:
          - Erreichbarkeit: Das Impressum muss von jeder Unterseite Ihrer
          Webseite mit einem Klick erreichbar sein, meist im Footer.
          - Steuernummer: Wenn Sie die Kleinunternehmerregelung nutzen, reicht
          oft die normale Steuernummer, falls Sie noch keine USt-IdNr. haben.
          - Berufsgenossenschaft: Im Reinigungsservice ist die zustaendige
          Berufsgenossenschaft oft BG Bau, auch wenn sie nicht zwingend im
          Impressum genannt werden muss.
        </p>

        <h3 className="datenschutz-subtitle">Ihre Rechte</h3>

        <p className="datenschutz-text">
          Sie haben das Recht auf Auskunft, Berichtigung, Loeschung,
          Einschraenkung der Verarbeitung sowie Widerspruch. Ausserdem besteht
          ein Beschwerderecht bei einer Aufsichtsbehoerde.
        </p>

        <p className="datenschutz-note">
          Hinweis: Dies ist eine allgemeine Vorlage. Vor der
          Live-Schaltung sollte sie an die tatsaechlich verwendeten Tools
          wie Analytics, Cookies, Hosting oder Newsletter angepasst werden.
        </p>
      </div>
    </main>
  );
}
