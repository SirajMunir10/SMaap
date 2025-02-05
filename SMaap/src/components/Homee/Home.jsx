// Home.jsx
import React from "react";

import { Link } from "react-router-dom";
import "../../styles/Homestyle.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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
        </header>
      </div>
      <Footer />
    </>
  );
};

export default Home;
