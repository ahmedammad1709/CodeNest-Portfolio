import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Company<span className="neon-text">Name</span></h3>
            <p>Creating exceptional digital experiences that drive business growth.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Website Development</a></li>
                <li><a href="#services">E-Commerce Solutions</a></li>
                <li><a href="#services">Graphic Design</a></li>
                <li><a href="#services">Brand Identity</a></li>
                <li><a href="#services">UI/UX Design</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li>123 Business Avenue, Tech City</li>
                <li>info@companyname.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
              
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  <span className="social-icon">fb</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">tw</span>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <span className="social-icon">ig</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} CompanyName. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;