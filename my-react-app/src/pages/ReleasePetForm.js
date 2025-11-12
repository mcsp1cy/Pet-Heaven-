import "./Form.css";
import { useState } from "react";
import FormInput from "../components/FormInput";

export default function ReleasePetForm() {
  const [form, setForm] = useState({ ownerName: "", email: "", petName: "", species: "", details: "" });
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData();
      data.append("form-name", "release");
      data.append("bot-field", "");
      Object.entries(form).forEach(([key, val]) => data.append(key, val ?? ""));
      await fetch("/", { method: "POST", body: data });
      setStatus("sent");
      setForm({ ownerName: "", email: "", petName: "", species: "", details: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="container register-page">
      <div className="page-header no-image">
        <h1>Surrender a Pet</h1>
        <p className="form-lead">
          If you need to surrender a pet, please complete this form with honest details about the animal and your situation.
          Our team will review and contact you to arrange a safe intake. We prioritise animal welfare and aim for a smooth, compassionate process.
        </p>
      </div>

      <form
        name="release"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={submit}
        className="form-panel"
        aria-label="Surrender form"
      >
        <input type="hidden" name="form-name" value="release" />
        <input type="hidden" name="bot-field" />

        <FormInput label="Your name" name="ownerName" value={form.ownerName} onChange={onChange} required />
        <FormInput label="Email" name="email" type="email" value={form.email} onChange={onChange} required />
        <FormInput label="Pet name" name="petName" value={form.petName} onChange={onChange} />
        <FormInput label="Species" name="species" value={form.species} onChange={onChange} required />
        <FormInput label="Details about the pet / reason for surrender" name="details" value={form.details} onChange={onChange} as="textarea" rows={5} />

        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </div>

        {status === "sent" && <p className="form-success">Form received. We will contact you shortly.</p>}
        {status === "error" && <p className="form-error">Submission failed. Try later.</p>}
      </form>
    </main>
  );
}