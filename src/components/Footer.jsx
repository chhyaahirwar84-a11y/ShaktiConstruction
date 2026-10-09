import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            SHAKTI<span>.</span>
          </div>

          <p>
            Industrial and mechanical construction solutions
            focused on quality, safety and reliable execution.
          </p>

          <a href="#contacts" className="footer-cta">
            Start a Project
            <FiArrowUpRight />
          </a>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h4>Navigation</h4>

          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contacts">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>

          <a href="#services">Mechanical Works</a>
          <a href="#services">Industrial Piping</a>
          <a href="#services">Structural Steel</a>
          <a href="#services">Industrial Installation</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h4>Contact</h4>

          {/* Phone 1 */}
          <a
            href="tel:+919522867953"
            className="footer-contact-item"
          >
            <FiPhone />
            <span>+91 95228 67953</span>
          </a>

          {/* Phone 2 */}
          <a
            href="tel:+919424613604"
            className="footer-contact-item"
          >
            <FiPhone />
            <span>+91 94246 13604</span>
          </a>

          {/* Email 1 */}
          <a
            href="mailto:shakticonstructionbina@gmail.com"
            className="footer-contact-item"
          >
            <FiMail />
            <span>shakticonstructionbina@gmail.com</span>
          </a>

          {/* Email 2 */}
          <a
            href="mailto:rajy89823@gmail.com"
            className="footer-contact-item"
          >
            <FiMail />
            <span>rajy89823@gmail.com</span>
          </a>

          {/* Location */}
          <div className="footer-contact-item">
            <FiMapPin />
            <span>India</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} SHAKTI CONSTRUCTION.
          All rights reserved.
        </p>

        <p>
          Industrial • Mechanical • Construction
        </p>
      </div>
    </footer>
  );
}

export default Footer;