import { Link } from "react-router-dom";
export default function CallToAction() {
  return (
    <section className="cta section">
      <div className="container">
        <h2>Ready to help a pet today?</h2>
        <p>Adopt, foster, donate, or surrender — we’re here to support you.</p>
        <div className="cta-actions">
          <Link to="/adoptpetform" className="btn btn-primary">Adopt a pet</Link>
          <Link to="/releasepetform" className="btn btn-outline">Release a pet</Link>
        </div>
      </div>
    </section>
  );
}