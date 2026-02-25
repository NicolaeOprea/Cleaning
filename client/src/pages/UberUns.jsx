import firmaImg from "../assets/start/hose-back.png";
import logoImg from "../assets/start/hosseini.jpeg"; // imagine logo mare

export default function UeberUns() {
  return (
    <main>

      {/* DESKTOP HERO SPLIT */}
      <section className="about-hero-split">
        <div
          className="about-img left"
          style={{ backgroundImage: `url(${firmaImg})` }}
        />
        <div
          className="about-img right"
          style={{ backgroundImage: `url(${logoImg})` }}
        />
      </section>

      {/* MOBILE HERO (doar firma) */}
      <section className="about-hero-mobile">
        <div
          className="about-img-mobile"
          style={{ backgroundImage: `url(${firmaImg})` }}
        />
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container about-content">
          <h1>Über Hosseini Reinigung</h1>

          <p className="lead">
            Wir sind ein zuverlässiger Reinigungs- und Hausmeisterservice
            aus München mit Fokus auf Qualität, Diskretion und persönliche Betreuung.
          </p>

          <p>
            Besonders im Bereich Praxis- und Büroreinigung arbeiten wir
            strukturiert, sorgfältig und mit festen Abläufen.
          </p>

        </div>
      </section>

    </main>
  );
}