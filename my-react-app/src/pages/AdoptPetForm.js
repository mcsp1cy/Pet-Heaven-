import "./Form.css";
import { useState } from "react";
import FormInput from "../components/FormInput";
import pets from "../data/pets.json";

const hero = `${process.env.PUBLIC_URL}/assets/icon/adopt-hero.jpg`;

export default function AdoptPetForm() {
  const [form, setForm] = useState({ petId: "", name: "", email: "", reason: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData();
      data.append("form-name", "adopt");
      data.append("bot-field", "");
      Object.entries(form).forEach(([key, val]) =>
        data.append(key, val ?? "")
      );
      await fetch("/", { method: "POST", body: data });
      setStatus("sent");
      setForm({ petId: "", name: "", email: "", reason: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="container register-page">
      <div className="page-header" style={{ backgroundImage: `url(${hero})` }}>
        <h1>Adoption Request</h1>
        <p className="form-lead">
          Thanks for your interest in adopting. Please complete this form with accurate contact details and
          information about why you'd like to adopt this pet. Our team will review your request and email the
          administrator to arrange the next steps (meet-and-greet, vet checks and onboarding).
        </p>
      </div>

      <form
        name="adopt"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={submit}
        className="form-panel"
        aria-label="Adoption form"
      >
        <input type="hidden" name="form-name" value="adopt" />
        <input type="hidden" name="bot-field" />

        <label>
          <div className="form-label">Pet</div>
          <select name="petId" value={form.petId} onChange={onChange} required className="form-input">
            <option value="">Select a pet</option>
            {pets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name ?? `${p.type || p.species} — ${p.breed ?? ""}`}
              </option>
            ))}
          </select>
        </label>

        <FormInput label="Your name" name="name" value={form.name} onChange={onChange} required />
        <FormInput label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <FormInput
          label="Why do you want to adopt?"
          name="reason"
          value={form.reason}
          onChange={onChange}
          as="textarea"
          rows={4}
        />

        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit request"}
          </button>
        </div>

        {status === "sent" && <p className="form-success">Request sent. Administrator will be emailed.</p>}
        {status === "error" && <p className="form-error">Submission failed. Try again later.</p>}
      </form>
    </main>
  );
}