import { useEffect, useMemo, useRef, useState } from "react";

export default function DustCarousel({
  images = [],
  cols = 26,
  rows = 14,
  intervalMs = 5200,
  height = 320,
  radius = 16,
}) {
  const total = cols * rows;

  // indexul imaginii de sus (cea care se “sparge”)
  const [currIndex, setCurrIndex] = useState(0);
  // indexul imaginii de jos (cea care rămâne după val)
  const [nextIndex, setNextIndex] = useState(images.length > 1 ? 1 : 0);

  // phase: idle | dissolve
  const [phase, setPhase] = useState("idle");

  const currRef = useRef(0);
  const timerRef = useRef(null);
  const runningRef = useRef(false);

  // Durate “reale” pentru așteptare (trebuie să includă și cel mai mare delay)
  // wave max ~ (cols-1)*14 + (rows-1)*6, jitter max 89
  const maxDelay = useMemo(() => {
    const waveMax = (cols - 1) * 14 + (rows - 1) * 6;
    const jitterMax = 89;
    return waveMax + jitterMax; // ms
  }, [cols, rows]);

  const dissolveMs = 700; // trebuie să corespundă cu CSS transition pe transform
  const totalDissolveTime = maxDelay + dissolveMs + 40; // mic buffer

  const tiles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < total; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;

      // val: stânga -> dreapta + puțin de sus -> jos
      const wave = c * 14 + r * 6;
      const jitter = (i * 17) % 90;
      const delay = wave + jitter;

      const sx = ((i * 29) % 60) - 30;
      const sy = ((i * 31) % 50) - 25;
      const rot = ((i * 13) % 18) - 9;

      arr.push({ i, r, c, delay, sx, sy, rot });
    }
    return arr;
  }, [cols, rows, total]);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // init
    currRef.current = 0;
    setCurrIndex(0);
    setNextIndex(images.length > 1 ? 1 : 0);
    setPhase("idle");

    if (timerRef.current) clearInterval(timerRef.current);

const tick = () => {
  if (runningRef.current) return;
  if (images.length < 2) return;

  runningRef.current = true;

  const curr = currRef.current;
  const next = (curr + 1) % images.length;

  // pregătești imaginea dedesubt (opțional, dar ok)
  setNextIndex(next);

  // schimbare imediată (fără dust, fără wait)
  setCurrIndex(next);
  currRef.current = next;

  // nu mai folosim phase deloc
  setPhase("idle");

  runningRef.current = false;
};


    // pornește periodic
    timerRef.current = setInterval(tick, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [images, intervalMs, totalDissolveTime]);

  if (!images || images.length === 0) return null;

  const currUrl = images[currIndex];
  const nextUrl = images[nextIndex];

  if (!currUrl) return null;

  return (
    <div
      className="dust-wrap"
      style={{
        height,
        borderRadius: radius,
      }}
    >
      {/* Imaginea dedesubt (următoarea) */}
      <div
        className="dust-slide dust-slide--next"
        style={{ backgroundImage: `url(${nextUrl || currUrl})` }}
      />

      {/* Imaginea de sus (curentă) */}
      <div
        className="dust-slide dust-slide--current"
        style={{ backgroundImage: `url(${currUrl})` }}
      />

      {/* Tiles: reprezintă DOAR imaginea curentă (de sus) */}
      <div
        className="dust-grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
        aria-hidden="true"
      >
        {tiles.map((t) => {
          const x = (t.c / (cols - 1)) * 100;
          const y = (t.r / (rows - 1)) * 100;

          return (
            <div
              key={t.i}
              className={`dust-tile ${phase === "dissolve" ? "ready dissolve-out" : "idle"}`}

              style={{
                backgroundImage: `url(${currUrl})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${x}% ${y}%`,
                transitionDelay: `${t.delay}ms`,
                "--sx": `${t.sx}px`,
                "--sy": `${t.sy}px`,
                "--rot": `${t.rot}deg`,
              }}
            />
          );
        })}
      </div>

      <div className="dust-overlay" />
    </div>
  );
}

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
