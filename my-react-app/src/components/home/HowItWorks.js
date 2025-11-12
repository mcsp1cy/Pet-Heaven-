import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <section className="how section" aria-labelledby="how-heading">
      <div className="container">
        <h2 id="how-heading">How it works</h2>
        <p className="how-intro">
          Simple, caring steps to find a forever home — or to surrender a pet safely.
        </p>

        <ol className="steps" aria-hidden="false">
          <li>
            <div className="step-icon" aria-hidden="true">
              <img src="/assets/icon/find.png" alt="" />
            </div>
            <div className="step-body">
              <div className="step-title">Find</div>
              <div className="step-desc">Browse current pets with profiles, photos, and care notes.</div>
            </div>
          </li>

          <li>
            <div className="step-icon" aria-hidden="true">
              <img src="/assets/icon/meet.png" alt="" />
            </div>
            <div className="step-body">
              <div className="step-title">Meet</div>
              <div className="step-desc">Schedule a visit or request a meet-and-greet to see compatibility.</div>
            </div>
          </li>

          <li>
            <div className="step-icon" aria-hidden="true">
              <img src="/assets/icon/adopt-release.png" alt="" />
            </div>
            <div className="step-body">
              <div className="step-title">Adopt or Release</div>
              <div className="step-desc">
                Start the online form — adopt a specific pet or submit a surrender form. We review and email the administrator.
              </div>
            </div>
          </li>
        </ol>

        <div className="how-cta" role="group" aria-label="How it works actions">
          <Link to="/pets" className="btn btn-ghost">View Pets</Link>
          <Link to="/adoptpetform" className="btn btn-primary">Adopt a Pet</Link>
          <Link to="/releasepetform" className="btn btn-outline">Release a Pet</Link>
          <Link to="/register" className="btn btn-ghost">Register</Link>
        </div>
      </div>
    </section>
  );
}