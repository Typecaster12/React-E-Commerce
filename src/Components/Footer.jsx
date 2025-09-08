import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main-container">
      <div className="footer">
        {/* Company Info Section */}
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <h2>Shop This</h2>
          </div>
          <p className="footer-description">
            Your one-stop destination for quality products at amazing prices. 
            Discover the latest trends and timeless classics in our carefully 
            curated collection.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="footer-section footer-service">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section footer-contact">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>123 Shopping Street, City, State 12345</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>info@shopthis.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <span>Mon - Sat: 9AM - 8PM</span>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get updates on new products and exclusive offers!</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Shop This. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
