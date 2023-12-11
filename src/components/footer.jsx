// Footer.js
import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import img from "../sources/marvelogo.png";

const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-container">
        <div className="logo-column">
          <img src={img} alt="Logo" />
        </div>
        <div className="content-column">
          <div className="links-column">
            <h2>ABOUT MARVEL</h2>
            <h2>HELP/FAQS</h2>
            <h2>CAREERS</h2>
            <h2>INTERNSHIPS</h2>
          </div>
          <div className="social-column">
            <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 MARVEL STUDIOS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
