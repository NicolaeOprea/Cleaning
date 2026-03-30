import { useEffect, useState } from "react";
import "../styles/HeroSlider.css";

import buroImg from "../assets/buro.webp";
import fensterImg from "../assets/fenster.webp";
import treppenImg from "../assets/treppen.webp";

const slides = [
  {
    image: buroImg,
    alt: "Büroreinigung in München",
    title: "Professionelle Reinigung in München",
    subtitle:
      "Zuverlässige Büro-, Praxis- und Gebäudereinigung für München .",
  },
  {
    image: fensterImg,
    alt: "Fensterreinigung in München",
    title: "Professionelle Reinigung in München",
    subtitle:
      "Saubere Fenster, heller Eindruck und professionelle Pflege für Büro und Gebäude.",
  },
  {
    image: treppenImg,
    alt: "Treppenhausreinigung in München",
    title: "Professionelle Reinigung in München",
    subtitle:
      "Gründlich, diskret und pünktlich – für Treppenhäuser, Praxen und Geschäftsräume.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== current}
        >
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="hero-badge">München + Umland</span>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <button
        className="hero-arrow hero-arrow-left"
        onClick={prevSlide}
        aria-label="Vorheriges Bild"
        type="button"
      >
        ‹
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Nächstes Bild"
        type="button"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Gehe zu Slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}