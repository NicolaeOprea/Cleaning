import firmaImg from "../assets/start/clean-team.jpg";
import logoImg from "../assets/start/hosseini.jpeg";

export default function UeberUns() {
  return (
    <main>
      {/* HERO (firma + logo pe desktop, doar firma pe mobil) */}
      <section className="about-hero">
        <div
          className="about-img about-img-left"
          style={{ backgroundImage: `url(${firmaImg})` }}
        />
        <div
          className="about-img about-img-right"
          style={{ backgroundImage: `url(${logoImg})` }}
        />
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container about-content">
          <h1>Über Hosseini Reinigung</h1>

          <p className="lead">
            Wir sind ein zuverlässiger Reinigungs- und Hausmeisterservice aus
            München mit Fokus auf Qualität, Diskretion und persönliche
            Betreuung.
          </p>

          <p>
            Besonders im Bereich Praxis- und Büroreinigung arbeiten wir
            strukturiert, sorgfältig und mit festen Abläufen.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            veniam quidem sunt esse ratione iusto unde quisquam ipsa similique
            illum adipisci mollitia alias voluptate asperiores nemo, enim est ad
            sed!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ipsam
            perferendis nihil nostrum esse ducimus fuga illo excepturi! Modi id
            officiis pariatur fugiat alias repellendus fugit numquam earum,
            incidunt beatae obcaecati, eum soluta autem debitis est. Neque sit
            ratione, ex magni at id sed autem velit corporis totam molestiae ut.
          </p>
        </div>
      </section>

    </main>
  );
}
