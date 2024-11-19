import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/AboutUs.css";
import aboutImage1 from "../assets/about1.jpg";
import aboutImage2 from "../assets/about2.jpg";
import aboutImage3 from "../assets/about3.jpg";
import aboutImage4 from "../assets/about4.jpg";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-section">
        <div className="about-text">
          <h5>About Us</h5>
          <h2>
            Welcome to <span>SM Hotels</span>
          </h2>
          <p>
            SM Hotels offers a luxurious and memorable experience at beautiful
            destinations. From spacious rooms with stunning views to world-class
            amenities, we provide our guests with a perfect blend of relaxation
            and adventure. Our dedicated staff ensures that each stay is as
            comfortable as possible, catering to all needs with exceptional
            service. Join us at SM Hotels, where your comfort is our top
            priority, and every moment is crafted to create lasting memories.
          </p>
          <div className="stats">
            <Link to="/rooms">
              <div className="stat-item">
                <i className="fas fa-hotel"></i>
                <p>7861</p>
                <span>Rooms</span>
              </div>
            </Link>
            <div className="stat-item">
              <i className="fas fa-users"></i>
              <p>1234</p>
              <span>Staff</span>
            </div>
            <div className="stat-item">
              <i className="fas fa-user-friends"></i>
              <p>4321</p>
              <span>Clients</span>
            </div>
          </div>
          <Link to="/">
            <button className="toExploremore">Explore More</button>
          </Link>
        </div>
        <div className="about-images">
          <img src={aboutImage1} alt="Poolside view" />
          <img src={aboutImage2} alt="Beach resort" />
          <img src={aboutImage3} alt="Luxury suite" />
          <img src={aboutImage4} alt="Spa area" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
