import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    // site header with navigation links
    <header className="site-header">
      <div className="navbar">
        <div className="brand">
          <Link to="/" className="brand-link">
            <img src="/assets/logo/logo.png" alt="Pet Heaven Society Logo" width="50" />
          </Link>
          <span className="site-title">Pet Heaven Society</span>
        </div>

        <nav className="links" role="navigation" aria-label="Main navigation">
          <Link to="/">Home</Link> 
          <Link to="/about">About Us</Link> 
          <Link to="/pets">Available Pets</Link> 
          <Link to="/register">Register</Link> 
          <Link to="/adoptpetform" className="cta adopt">Adopt</Link>
          <Link to="/releasepetform" className="cta release">Release a Pet</Link>
        </nav>
      </div>
    </header>
  );
}
