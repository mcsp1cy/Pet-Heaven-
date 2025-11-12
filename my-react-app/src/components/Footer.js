import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    // site footer with 4 columns: brand mission, quick links, contact, social media
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-col brand">
          <img src="/assets/logo/logo.png" alt="Pet Heaven Society" className="footer-logo" />
          <p className="mission">At Pet Heaven Society we rescue, rehabilitate, and rehome animals while educating and supporting our community. </p>
        </div>

        <div className="footer-col links">
          <h4>Quick links</h4>
          <ul>
            <li><Link className="footer-link" to="/">Home</Link></li>
            <li><Link className="footer-link" to="/about">About Us</Link></li>
            <li><Link className="footer-link" to="/pets">Pets</Link></li>
            <li><Link className="footer-link" to="/register">Register</Link></li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h4>Contact</h4>
          <address>
            50 Sungei Tengah Rd<br />
            Singapore, 699012<br />
            <a href="tel:+6512345678">+65 12345678</a><br />
            <a href="mailto:info@petheaven.org">info@petheaven.org</a>
          </address>
        </div>

        <div className="footer-col social">
          <h4>Follow us</h4>
          <nav aria-label="social links" className="social-links">
            <a href="https://instagram.com" aria-label="Instagram" title="Instagram">
              <img src="/assets/logo/instagram.png" alt="" className="social-icon" />
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" title="Twitter">
              <img src="/assets/logo/twitter.png" alt="" className="social-icon" />
              <span>Twitter</span>
            </a>
            <a href="https://tiktok.com" aria-label="TikTok" title="TikTok">
              <img src="/assets/logo/tiktok.png" alt="" className="social-icon" />
              <span>TikTok</span>
            </a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Pet Heaven Society. All rights reserved.</small>
      </div>
    </footer>
  );
}
