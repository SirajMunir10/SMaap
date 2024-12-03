import React from "react";
import "../styles/Terms&Co.css";
import { Link } from "react-router-dom";
const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h2>Welcome to SM Hotel!</h2>
      <p>
        These terms and conditions outline the rules and regulations for the use
        of SM Hotel's Website, located at
        <a href="https://smhotel.com" target="_blank" rel="noopener noreferrer">
          {" "}
          https://smhotel.com
        </a>
        .
      </p>
      <p>
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use SM Hotel if you do not agree to take
        all of the terms and conditions stated on this page.
      </p>
      <h2>Cookies</h2>
      <p>
        We employ the use of cookies. By accessing SM Hotel, you agreed to use
        cookies in agreement with SM Hotel's Privacy Policy.
      </p>
      <h2>License</h2>
      <p>
        Unless otherwise stated, SM Hotel and/or its licensors own the
        intellectual property rights for all material on SM Hotel. All
        intellectual property rights are reserved. You may access this from SM
        Hotel for your own personal use subject to restrictions set in these
        terms and conditions.
      </p>
      <ul>
        <li>Republish material from SM Hotel</li>
        <li>Sell, rent, or sub-license material from SM Hotel</li>
        <li>Reproduce, duplicate, or copy material from SM Hotel</li>
        <li>Redistribute content from SM Hotel</li>
      </ul>
      <h2>Additional Terms</h2>
      <ul>
        <li>Check-in / Check-out time is Noon.</li>
        <li>Visitors are not permitted in guest rooms after Midnight.</li>
        <li>
          The hotel is not responsible for the safety of any valuables left in
          the guest room.
        </li>
        <li>
          Safe deposit Lockers are available free of charge with the Cashier.
        </li>
        <li>
          I agree to pay all charges incurred by me during my stay in the hotel
          and to settle my account once it amounts to
          <strong> [Mention Floor Limit]</strong>, unless prior arrangements
          have been made.
        </li>
      </ul>
      <h2>Privacy Policy</h2>
      <p>Please read our Privacy Policy.</p>
      <h2>Disclaimer</h2>
      <p>
        As long as the website and the information and services on the website
        are provided free of charge, we will not be liable for any loss or
        damage of any nature.
      </p>
      <p>
        If you want to contact us, you can email us at{" "}
        <a href="mailto:sirajmunirfurc@gmail.com">sirajmunirfurc@gmail.com</a>.
      </p>
      <Link to="/" className="terms-homepage-link">
        Go to homepage
      </Link>
    </div>
  );
};

export default TermsAndConditions;
