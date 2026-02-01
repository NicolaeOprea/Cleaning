import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const baseRanges = {
  buero: { min: 0.18, max: 0.35 },     // €/m² (orientativ)
  praxis: { min: 0.25, max: 0.45 },
  treppenhaus: { min: 0.15, max: 0.30 },
};

function roundEUR(x) {
  return Math.round(x / 5) * 5; // rotunjim la 5 EUR pentru “clean”
}

export default function QuoteWizard() {
  const [objectType, setObjectType] = useState("buero");
  const [sqmInput, setSqmInput] = useState("120"); // string

  const [interval, setInterval] = useState("woechentlich"); // wöchentlich / 2x / monatlich
  const [extras, setExtras] = useState({ fenster: false, grund: false, garten: false });

  const multiplier = useMemo(() => {
    if (interval === "woechentlich") return 4; // aproximăm lunar
    if (interval === "2x") return 8;
    return 1;
  }, [interval]);

  const extraFactor = useMemo(() => {
    let f = 1;
    if (extras.fenster) f += 0.15;
    if (extras.grund) f += 0.20;
    if (extras.garten) f += 0.10;
    return f;
  }, [extras]);

 const range = useMemo(() => {
  if (sqmInput.trim() === "") return null;

  const sqm = Number(sqmInput);
  if (!Number.isFinite(sqm) || sqm < 1) return null;

  const r = baseRanges[objectType];
  const min = roundEUR(sqm * r.min * multiplier * extraFactor);
  const max = roundEUR(sqm * r.max * multiplier * extraFactor);
  return { min, max };
}, [objectType, sqmInput, multiplier, extraFactor]);



  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Instant-Angebot (60 Sek.)</h3>
      <p className="small">
        Unverbindlicher Preisrahmen (Orientierung). Für ein exaktes Angebot empfehlen wir eine kurze Abstimmung / Besichtigung.
      </p>

      <div className="grid grid-2" style={{ marginTop: 12 }}>
        <div>
          <label className="label">Objekt</label>
          <select className="input" value={objectType} onChange={(e) => setObjectType(e.target.value)}>
            <option value="buero">Büro</option>
            <option value="praxis">Praxis</option>
            <option value="treppenhaus">Treppenhaus</option>
          </select>
        </div>

        <div>
          <label className="label">Fläche (m²)</label>
         <input
  className="input"
  type="number"
  min={1}
  max={5000}
  placeholder="z.B. 120"
  value={sqmInput}
  onChange={(e) => {
    const v = e.target.value;

    // permite gol (ca să nu rămână 0)
    if (v === "") {
      setSqmInput("");
      return;
    }

    // acceptă doar numere întregi pozitive
    if (!/^\d+$/.test(v)) return;

    setSqmInput(v);
  }}
  onBlur={() => {
    // când iese din câmp, dacă e gol sau <1, îl setăm la 1 (sau la 120 dacă preferi)
    const n = Number(sqmInput);
    if (!sqmInput || !Number.isFinite(n) || n < 1) setSqmInput("1");
  }}
/>

        </div>

        <div>
          <label className="label">Intervall</label>
          <select className="input" value={interval} onChange={(e) => setInterval(e.target.value)}>
            <option value="woechentlich">Wöchentlich</option>
            <option value="2x">2× pro Woche</option>
            <option value="monatlich">Monatlich / einmalig</option>
          </select>
        </div>

        <div>
          <label className="label">Extras</label>
          <div className="small" style={{ display: "grid", gap: 8 }}>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={extras.fenster}
                onChange={(e) => setExtras((p) => ({ ...p, fenster: e.target.checked }))}
              />
              Fenster / Glas
            </label>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={extras.grund}
                onChange={(e) => setExtras((p) => ({ ...p, grund: e.target.checked }))}
              />
              Grundreinigung
            </label>
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={extras.garten}
                onChange={(e) => setExtras((p) => ({ ...p, garten: e.target.checked }))}
              />
              Gartenpflege
            </label>
          </div>
        </div>
      </div>

      <div className="alert" style={{ marginTop: 14 }}>
  {range ? (
    <>
      <b>Orientierung:</b> {range.min}€ – {range.max}€ (geschätzt)
      <div className="small" style={{ marginTop: 6 }}>
        *Preis hängt von Objekt, Verschmutzung, Zugang und Umfang ab.
      </div>
    </>
  ) : (
    <>
      <b>Orientierung:</b> Bitte Fläche (m²) eingeben.
      <div className="small" style={{ marginTop: 6 }}>
        Beispiel: 120 m²
      </div>
    </>
  )}
</div>


      <div className="hero-cta" style={{ marginTop: 14 }}>
        <Link className="btn" to="/kontakt">Exaktes Angebot anfordern</Link>
        <a className="btn secondary" href="tel:+4917600000000">Rückruf</a>
      </div>
    </div>
  );
}
