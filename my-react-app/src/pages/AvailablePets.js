import "./AvailablePets.css";
import { useState, useMemo } from "react";
import pets from "../data/pets";
import PetCard from "../components/PetCard";
import { Link } from "react-router-dom";

export default function AvailablePets() {
  const [query, setQuery] = useState("");
  const [species, setSpecies] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const s = species.trim().toLowerCase();

    return pets.filter((p) => {
      const type = (p.type || "").toLowerCase(); 

      // species filter
      let matchesSpecies = true;
      if (s) {
        if (s === "other") {
          matchesSpecies = type && !["dog", "cat"].includes(type);
        } else {
          matchesSpecies = type === s;
        }
      }
      if (!matchesSpecies) return false;

      if (!q) return true;

      const hay = [
        p.name,
        p.breed,
        p.species,
        p.description,
        p.age?.toString(),
        p.type,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return hay.includes(q);
    });
  }, [query, species]);

  return (
    <main className="available-pets-page">
      <header className="available-hero">
        <div className="available-hero-inner container">
          <div className="available-hero-title">
            <h1>Available Pets</h1>
            <p className="lead">
              Browse animals ready for adoption with detailed profiles and photos to
              help you choose.
            </p>
          </div>

          <div className="available-hero-actions">
            <div className="search-wrap" role="search" aria-label="Search pets">
              <input
                className="search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, breed or keyword"
                aria-label="Search pets"
              />
            </div>

            <div className="filter-actions">
              <select
                className="filter-select"
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                aria-label="Filter by species"
              >
                <option value="">All species</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>

              <Link to="/adoptpetform" className="btn btn-primary">
                Adoption Form
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="pets-list container" aria-labelledby="pets-heading">
        <h2 id="pets-heading" className="visually-hidden">
          Pets list
        </h2>

        <div className="pets-summary">
          <span className="count">{filtered.length}</span>
          <span className="count-label">pets available</span>
        </div>

        <div className="pets-grid" role="list">
          {filtered.map((pet) => (
            <div role="listitem" key={pet.id} className="pet-grid-item">
              <PetCard data={pet} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}