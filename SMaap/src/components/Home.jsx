// Home.jsx
import React from "react";
import AboutUs from "./AboutUs";
import Services from "./Services";
import { Link } from "react-router-dom";
import "../styles/Homestyle.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <Navbar />
        <header className="header">
          <div className="header-content">
            <h3 className="subtitle">Welcome to</h3>
            <h1 className="main-title">
              SM Hotels <br />
              World of Luxurious Rooms
            </h1>
            <div className="buttons">
              <Link to="/rooms">
                <button className="btn primary-btn">Our Rooms</button>
              </Link>
            </div>
          </div>
          <div className="carousel-controls">
            <span
              className="carousel-arrow left-arrow"
              role="button"
              tabIndex={0}
            >
              &lt;
            </span>
            <span
              className="carousel-arrow right-arrow"
              role="button"
              tabIndex={0}
            >
              &gt;
            </span>
          </div>
        </header>
      </div>
      <Footer />
    </>
  );
};

export default Home;
