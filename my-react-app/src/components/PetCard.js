import "./PetCard.css";

export default function PetCard({ data }) {
    return (
        // pet card component displaying pet details
        <div className="pet-card">
            <img src={data.image} alt={data.name} className="pet-image" />
            <h3>{data.name}</h3>
            <p>{data.species} - {data.age} years old</p>
        </div>
    );
}