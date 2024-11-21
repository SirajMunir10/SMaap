import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section SM">
          <h2 className="footer-title">SM</h2>
          <p className="footer-description">
            Build a professional website for your hotel business and grab the
            attention of new visitors upon your site’s launch.
          </p>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">CONTACT</h2>
          <p className="footer-text">
            <i className="fas fa-map-marker-alt footer-icon"></i> Bahria ph-8,
            Islamabad, PK
          </p>
          <p className="footer-text">
            <i className="fas fa-phone footer-icon"></i> +000 000 0000
          </p>
          <p className="footer-text">
            <i className="fas fa-envelope footer-icon"></i>{" "}
            sirajmunirfurc@gmail.com
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/?lang=ar" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/siraj_munir10?igsh=MW4waW11NGl6aW9rYg=="
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://pk.linkedin.com/" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-section company">
          <h2 className="footer-title">COMPANY</h2>
          <ul className="footer-links">
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section services">
          <h2 className="footer-title">SERVICES</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Food & Restaurant</a>
            </li>
            <li>
              <a href="#">Spa & Fitness</a>
            </li>
            <li>
              <a href="#">Sports & Gaming</a>
            </li>
            <li>
              <a href="#">Event & Party</a>
            </li>
            <li>
              <a href="#">GYM & Yoga</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
