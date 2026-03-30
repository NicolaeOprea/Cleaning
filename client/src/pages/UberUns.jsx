import firmaImg from "../assets/team.webp";

export default function UeberUns() {
  return (
    <main className="section about-page">
      <section className="container about-layout">
        <div className="about-hero">
          <div
            className="about-img about-img-left"
            style={{ backgroundImage: `url(${firmaImg})` }}
          />
        </div>

        <div className="about-content">
  <h1>Über Hosseini Reinigung</h1>

  <p className="lead">
    Hosseini Reinigung ist ein professioneller Reinigungsservice aus München,
    spezialisiert auf Gebäudereinigung, Büroreinigung und Praxisreinigung.
    Unser Ziel ist es, Unternehmen und privaten Kunden eine zuverlässige,
    gründliche und flexible Reinigungslösung anzubieten.
  </p>

  <p>
    Als erfahrene Gebäudereinigung in München betreuen wir Büros, Arztpraxen,
    Treppenhäuser sowie private Haushalte. Saubere und gepflegte Räume sind
    entscheidend für das Wohlbefinden von Mitarbeitern, Kunden und Besuchern.
    Deshalb arbeiten wir mit klaren Abläufen, modernen Reinigungsmethoden
    und einem hohen Qualitätsanspruch.
  </p>

  <p>
    Besonders im Bereich Büroreinigung und Praxisreinigung legen wir großen
    Wert auf Hygiene, Diskretion und Zuverlässigkeit. Unsere Mitarbeiter
    arbeiten sorgfältig, pünktlich und mit einem geschulten Blick für Details,
    damit Ihre Räume jederzeit einen professionellen Eindruck hinterlassen.
  </p>

  <p>
    Neben der klassischen Gebäudereinigung bieten wir auch Hausmeisterservice
    und regelmäßige Unterhaltsreinigung in München und Umgebung an. Gemeinsam
    mit unseren Kunden entwickeln wir individuelle Reinigungskonzepte,
    die genau auf das jeweilige Objekt abgestimmt sind.
  </p>

  <p>
    Hosseini Reinigung steht für Qualität, Vertrauen und langfristige
    Zusammenarbeit – Ihr zuverlässiger Partner für professionelle
    Reinigungsservices in München.
  </p>
</div>
      </section>
    </main>
  );
}
