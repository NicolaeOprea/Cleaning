import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <a href="tel:01633806921">Mobil:01633806921</a>
          <a href="mailto:kontakt@hosseinireinigugsservice.de">
            Mail:kontakt@hosseinireinigugsservice.de
          </a>
        </div>

        <div className="footer-copy">
    © {new Date().getFullYear()} HOSSEINI Reinigungsservice
  </div>

  <div className="footer-powered">
    Powered by <span className="onra">ONRa</span>
  </div>
      </div>
    </footer>
  );
}
