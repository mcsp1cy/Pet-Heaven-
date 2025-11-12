import "./FeaturedPets.css";
import pets from "../../data/pets";
import { Link } from "react-router-dom";

export default function FeaturedPets() {
  const featured = pets.slice(0, 4);
  return (
    <section className="featured section" aria-labelledby="featured-heading">
      <div className="container">
        <h2 id="featured-heading">Featured Pets</h2>
        <div className="pet-grid">
          {featured.map(p => (
            <article key={p.id} className="pet-card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>{p.species} • {p.age} yrs</p>
              <div className="pet-actions">
                <Link to={`/pets`} className="btn">View</Link>
                <Link to="/adoptpetform" className="btn btn-primary">Adopt</Link>
              </div>
            </article>
          ))}
        </div>
        <Link to="/pets" className="btn btn-ghost">See all pets</Link>
      </div>
    </section>
  );
}