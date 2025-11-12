import "./Form.css";
import FormInput from "../components/FormInput";
import { useState } from "react";

const hero = `${process.env.PUBLIC_URL}/assets/icon/register-hero.jpg`;

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    interests: "",
    volunteer: false,
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData();
      data.append("form-name", "register");
      data.append("bot-field", ""); // honeypot

      Object.entries(form).forEach(([key, val]) =>
        data.append(key, typeof val === "boolean" ? String(val) : val ?? "")
      );

      await fetch("/", { method: "POST", body: data });
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        interests: "",
        volunteer: false,
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="container register-page">
      <div
        className="page-header"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <h1>Become a Valued Member</h1>
        <p className="form-lead">
          Join us at Pet Heaven Society to receive event invites, adoption priority, and volunteer opportunities.
          We'll only contact you for society business — your details are kept private.
          Make a difference in the lives of animals today!
        </p>
      </div>

      <form
        name="register"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        className="form-panel"
        aria-label="Register form"
      >
        {/* Netlify requires these hidden inputs */}
        <input type="hidden" name="form-name" value="register" />
        <input type="hidden" name="bot-field" />

        <FormInput label="Full name" name="name" value={form.name} onChange={onChange} required placeholder="Jane Doe" />
        <FormInput label="Email" name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@example.com" />
        <FormInput label="Phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+65 9123 4567" />
        <FormInput label="Address" name="address" value={form.address} onChange={onChange} placeholder="Street address (optional)" />
        <FormInput label="City / Area" name="city" value={form.city} onChange={onChange} placeholder="e.g. Singapore" />
        <FormInput label="Interests / Notes" name="interests" value={form.interests} onChange={onChange} as="textarea" rows={3} placeholder="e.g., fostering, fundraising, events" />

        <label className="form-row checkbox-row">
          <div className="form-label">Volunteer?</div>
          <div className="checkbox-wrap">
            <input type="checkbox" name="volunteer" checked={form.volunteer} onChange={onChange} id="volunteer" />
            <label htmlFor="volunteer" className="checkbox-label">I am interested in volunteering</label>
          </div>
        </label>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Register"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() =>
              setForm({
                name: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                interests: "",
                volunteer: false,
              })
            }
          >
            Reset
          </button>
        </div>

        {status === "sent" && <div className="form-success">Registration received — check your email for confirmation.</div>}
        {status === "error" && <div className="form-error">Submission failed. Please try again later.</div>}
      </form>
    </main>
  );
}