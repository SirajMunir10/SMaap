import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const login = useSelector((state) => state.userSlice.login);

  return (
    <nav className="navbar">
      <div className="logo">SM Hotels</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Rooms">Rooms</Link>
        </li>
        <li>
          <Link to="#page">Page</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
      <div className="social-icons">
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/?lang=ar" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/siraj_munir10?igsh=MW4waW11NGl6aW9rYg=="
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://pk.linkedin.com/" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@s1rajmunir10" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="auth-buttons">
        {!login ? (
          <Link to="/Login">
            <button className="btn1 auth-btn">Login</button>
          </Link>
        ) : (
          <Link to="/AllBookings">
            <button className="btn1 auth-btn">Profile</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
