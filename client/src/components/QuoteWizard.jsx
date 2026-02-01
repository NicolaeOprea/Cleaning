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
      
    </div>
  );
}
