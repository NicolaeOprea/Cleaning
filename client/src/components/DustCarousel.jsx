import { useEffect, useRef, useState } from "react";

export default function DustCarousel({
  images = [],
  intervalMs = 5200,
  height,
  radius = 16,
  fadeMs = 420,      // cât durează fade-ul
  holdMs = 80,       // mic buffer între preload și start fade
}) {
  const [frontIndex, setFrontIndex] = useState(0);
  const [backIndex, setBackIndex] = useState(images.length > 1 ? 1 : 0);
  const [isFading, setIsFading] = useState(false);

  const timerRef = useRef(null);
  const runningRef = useRef(false);
  const frontRef = useRef(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // reset când se schimbă lista
    frontRef.current = 0;
    setFrontIndex(0);
    setBackIndex(images.length > 1 ? 1 : 0);
    setIsFading(false);

    if (timerRef.current) clearInterval(timerRef.current);

    if (images.length < 2) return;

    const tick = async () => {
      if (runningRef.current) return;
      runningRef.current = true;

      const curr = frontRef.current;
      const next = (curr + 1) % images.length;

      // 1) preload următoarea imagine (lazy dar sigur)
      await preloadImage(images[next]);

      // 2) setezi back layer cu următoarea imagine
      setBackIndex(next);

      // 3) mic buffer (opțional) ca să fie “așezată”
      if (holdMs) await wait(holdMs);

      // 4) pornești fade (front dispare, back rămâne)
      // folosim rAF ca să fim siguri că browserul prinde schimbarea
      requestAnimationFrame(() => setIsFading(true));

      // 5) după fade, “commit”: back devine front
      await wait(fadeMs);

      setFrontIndex(next);
      frontRef.current = next;
      setIsFading(false);

      runningRef.current = false;
    };

    timerRef.current = setInterval(tick, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [images, intervalMs, fadeMs, holdMs]);

  if (!images || images.length === 0) return null;

  const frontUrl = images[frontIndex];
  const backUrl = images[backIndex] || frontUrl;

  return (
    <div
      className="dust-wrap carousel-wrap"
      style={{
        ...(typeof height === "number" ? { height } : null),
        borderRadius: radius,
      }}
    >
      {/* Back layer (următoarea imagine) */}
      <div
        className="dust-slide dust-slide--back"
        style={{ backgroundImage: `url(${backUrl})` }}
        aria-hidden="true"
      />

      {/* Front layer (imaginea curentă) */}
      <div
        className="dust-slide dust-slide--front"
        style={{
          backgroundImage: `url(${frontUrl})`,
          opacity: isFading ? 0 : 1,
          transitionDuration: `${fadeMs}ms`,
        }}
      />
    </div>
  );
}

function preloadImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve();
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // nu blocăm caruselul dacă o imagine e problematică
    img.src = src;
  });
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
