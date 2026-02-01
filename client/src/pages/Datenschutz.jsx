export default function Datenschutz() {
  return (
    <main className="container section">
      <h1>Datenschutzerklärung</h1>

      <div className="card">
        <p className="small">
          Diese Datenschutzerklärung informiert über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten
          auf dieser Website.
        </p>

        <h3>Kontaktformular</h3>
        <p className="small">
          Wenn Sie uns über das Formular kontaktieren, werden Ihre Angaben (Name, E-Mail, ggf. Telefon, Nachricht)
          zur Bearbeitung der Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
          bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
        </p>

        <h3>Server-Logs</h3>
        <p className="small">
          Beim Aufruf der Website können technisch notwendige Daten (z.B. IP-Adresse, Zeitpunkt, Browserinformationen)
          verarbeitet werden. Diese Daten dienen der Sicherheit und Stabilität.
        </p>

        <h3>Ihre Rechte</h3>
        <p className="small">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch.
          Außerdem besteht ein Beschwerderecht bei einer Aufsichtsbehörde.
        </p>

        <p className="small">
          Hinweis: Dies ist eine allgemeine Vorlage. Vor Live-Schaltung sollte sie an die tatsächlichen Tools
          (Analytics, Cookies, Hosting, Newsletter usw.) angepasst werden.
        </p>
      </div>
    </main>
  );
}
