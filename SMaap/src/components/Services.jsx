import React from "react";
import { services } from "../data/alldata";
import "../styles/Services.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="services-section">
        <div className="services-header">
          <h2 className="services-title">OUR AWESOME SERVICES</h2>
        </div>
        <div className="services-grid-wrapper">
          <div className="services-grid">
            {services.map((item, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{item.icon}</div>
                <h3 className="service-name">{item.name}</h3>
                <p className="service-info">{item.discription}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="services-description">
          To avail all these Services book now into our hotel.
        </p>
      </div>
      <Footer />
    </>
  );
}
