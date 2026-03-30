export default function ServiceCard({ title, img, text }) {
  return (
    <article className="card">
      <div className="card__img" style={{ backgroundImage: `url(${img})` }} />
      <div className="card__body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
