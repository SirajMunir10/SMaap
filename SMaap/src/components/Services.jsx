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
          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit.
          </p>
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
      </div>
      <Footer />
    </>
  );
}
