import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <img className="about-hero-img" src="/assets/icon/about-hero.jpg" alt="Volunteers caring for rescued pets at Pet Heaven Society" />
        <div className="about-hero-inner">
          <h1>About Pet Heaven Society</h1>
          <p className="lead">
            We rescue, rehabilitate, and rehome pets while educating our community.
          </p>
          <Link to="/pets" className="btn btn-primary">See Available Pets</Link>
        </div>
      </header>

      <section className="mission container" aria-labelledby="mission-heading">
        <h2 id="mission-heading">Who We Are</h2>
        <p>
          We are a non-profit, non-govermental registered animal welfare society
          dedicated to providing compassionate rescue, medical care, and long-term sheltering,
          working to place animals in safe, loving homes and to prevent future
          homelessness through education and support.
        </p>
      </section>

      <section className="facilities container" aria-labelledby="facilities-heading">
        <h2 id="facilities-heading">Our Facilities</h2>
        <div className="facility-grid">
          <article className="facility">
            <img src="/assets/facility/kennel.jpg" alt="Kennel and sleeping area" />
            <h3>Shelter & Kennels</h3>
            <p>Clean, climate-controlled housing with individual care plans.</p>
          </article>

          <article className="facility">
            <img src="/assets/facility/clinic.jpg" alt="On-site clinic" />
            <h3>On-site Clinic</h3>
            <p>Veterinary care, vaccinations, and spay/neuter services.</p>
          </article>

          <article className="facility">
            <img src="/assets/facility/playarea.jpg" alt="Play and social area" />
            <h3>Play & Social Areas</h3>
            <p>Supervised socialisation to assess temperament and behaviour.</p>
          </article>
        </div>
      </section>

      <section className="services container" aria-labelledby="services-heading">
        <h2 id="services-heading">What we offer</h2>
        <ul>
          <li>Detailed pet profiles and photos</li>
          <li>Adoption application & interview support</li>
          <li>Surrender intake form and assessment</li>
          <li>Foster & volunteer programmes</li>
          <li>Community education and behaviour resources</li>
        </ul>
      </section>

      <section className="visit container" aria-labelledby="visit-heading">
        <h2 id="visit-heading">Visit or Contact Us</h2>
        <p>
          Address: 50 Sungei Tengah Rd, Singapore, 699012 — Open Tue–Sun 10:00–17:00.
          <br />
          Phone: <a href="tel:+6512345678">+65 12345678</a> • Email: <a href="mailto:info@petheaven.org">info@petheaven.org</a>
        </p>
        <div className="visit-actions">
          <Link to="/register" className="btn btn-ghost">Become a Member</Link>
          <Link to="/release" className="btn btn-outline">Release a Pet</Link>
        </div>
      </section>
    </main>
  );
}