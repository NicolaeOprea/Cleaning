import { useState } from "react";
const API = process.env.REACT_APP_API_BASE || "";

export default function Kontakt() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot anti-spam
  });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    if (!form.name || !form.email || !form.message) {
      setStatus({
        type: "error",
        msg: "Bitte Name, Email und Nachricht ausfüllen.",
      });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({
          type: "error",
          msg: data?.message || "Fehler beim Senden.",
        });
        return;
      }

      setStatus({
        type: "success",
        msg: "Danke! Ihre Anfrage wurde gesendet. Wir melden uns schnellstmöglich.",
      });
      setForm({ name: "", email: "", phone: "", message: "", company: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Server nicht erreichbar. Bitte später erneut versuchen.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container section">
      <h1>Kontakt</h1>
      <p className="small">
        Angebot für München + Umland (Umkreis ~40 km). Fokus: Büro- und
        Praxisreinigung.
      </p>

      <div
        className="grid grid-2"
        style={{ marginTop: "1.5rem", alignItems: "start" }}
      >
        <div className="card">
          <h3>Kontaktinformationen</h3>
          <p className="small">
            Telefon: <a href="tel:+4917600000000">+49 176 00000000</a>
            <br />
            Email:{" "}
            <a href="mailto:kontakt@hosseinireinigugsservice.de">
              Kontakt@hosseinireinigugsservice.de
            </a>
          </p>
          <div className="alert">
            <b>Hinweis:</b> Winterdienst ist aktuell auf Anfrage / in
            Vorbereitung.
          </div>
        </div>

        <div className="card">
          <h3>Kontaktformular</h3>

          {status.msg && (
            <div className="alert" style={{ marginBottom: "1rem" }}>
              {status.msg}
            </div>
          )}

          <form onSubmit={onSubmit}>
            <label className="label">Name*</label>
            <input
              className="input"
              name="name"
              value={form.name}
              onChange={onChange}
            />

            <div style={{ height: 12 }} />

            <label className="label">Email*</label>
            <input
              className="input"
              name="email"
              value={form.email}
              onChange={onChange}
            />

            <div style={{ height: 12 }} />

            <label className="label">Telefon</label>
            <input
              className="input"
              name="phone"
              value={form.phone}
              onChange={onChange}
            />

            <div style={{ height: 12 }} />

            <label className="label">Nachricht*</label>
            <textarea
              className="textarea"
              name="message"
              value={form.message}
              onChange={onChange}
            />

            <div style={{ height: 12 }} />

            <button className="btn" disabled={loading}>
              {loading ? "Senden..." : "Anfrage senden"}
            </button>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={onChange}
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              style={{ display: "none" }}
            />
            <p className="small" style={{ marginTop: "0.75rem" }}>
              Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß
              Datenschutz zu.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
