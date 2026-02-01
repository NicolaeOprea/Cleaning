import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Praxis in München",
    text: "Zuverlässig, diskret und sehr gründlich. Terminabsprachen funktionieren einwandfrei.",
  },
  {
    name: "Büro (Unterhaltsreinigung)",
    text: "Sauberkeit konstant auf hohem Niveau – professionell und freundlich.",
  },
  {
    name: "Wohnanlage (Treppenhaus)",
    text: "Pünktlich und ordentlich. Kommunikation schnell und unkompliziert.",
  },
];

export default function Referenzen() {
  return (
    <main className="container section">
      <h1>Referenzen</h1>
      <p className="small">
        Einblicke in unsere Arbeit. Vorher/Nachher-Bilder können wir später mit echten Fotos ergänzen.
      </p>

      <div className="grid grid-3" style={{ marginTop: "1.5rem" }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card">
            <div
              style={{
                height: 140,
                borderRadius: 12,
                border: "1px dashed var(--border)",
                background: "rgba(14,165,233,0.06)",
                display: "grid",
                placeItems: "center",
                color: "var(--muted)",
                fontSize: 14,
              }}
            >
              Foto Platzhalter {i + 1}
            </div>
            <div style={{ marginTop: 12 }}>
              <b>Projekt</b>
              <div className="small">Büro / Praxis / Treppenhaus</div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "3rem" }}>Kundenstimmen</h2>
      <div className="grid grid-3" style={{ marginTop: "1rem" }}>
        {testimonials.map((t) => (
          <div key={t.name} className="card">
            <p style={{ marginTop: 0 }}>"{t.text}"</p>
            <div className="small" style={{ fontWeight: 700 }}>
              — {t.name}
            </div>
          </div>
        ))}
      </div>

      <div className="hero-cta" style={{ marginTop: "1.5rem" }}>
        <Link className="btn" to="/kontakt">Angebot anfordern</Link>
        <Link className="btn secondary" to="/leistungen">Leistungen ansehen</Link>
      </div>
    </main>
  );
}
