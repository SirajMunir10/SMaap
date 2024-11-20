import React, { useState } from "react";
import { roomsdata } from "../data/alldata";
import RoomsCard from "./RoomsCard";
import "../styles/RoomsStyle.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Rooms() {
  const [selectedType, setSelectedType] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [filteredRooms, setFilteredRooms] = useState(roomsdata); // Initially show all rooms

  const handleSearch = () => {
    const filtered = roomsdata.filter((room) => {
      // Filter based on room type and availability
      if (!selectedType && room.maxcount > 0) return true; // Show all if no type selected
      if (selectedType && room.type !== selectedType) return false;
      if (room.maxcount <= 0) return false;

      return true;
    });

    setFilteredRooms(filtered); // Update rooms shown
  };

  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleCheckinChange = (e) => setCheckin(e.target.value);
  const handleCheckoutChange = (e) => setCheckout(e.target.value);

  return (
    <>
      <Navbar />
      <div className="rooms-container">
        <h1>Our Rooms</h1>
        <div className="searchbar">
          <input
            type="date"
            name="checkin"
            placeholder="Checkin"
            value={checkin}
            onChange={handleCheckinChange}
            required={!!checkout}
          />
          <input
            type="date"
            name="checkout"
            placeholder="Checkout"
            value={checkout}
            onChange={handleCheckoutChange}
            required={!!checkin}
          />
          <input
            list="roomtype"
            name="selectedRoomtype"
            placeholder="Choose type"
            onChange={handleTypeChange}
          />
          <datalist id="roomtype">
            <option value="Standard"></option>
            <option value="Luxury"></option>
          </datalist>
          <button className="check-now-btn" onClick={handleSearch}>
            Check Now
          </button>
        </div>

        <div className="rooms">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, index) => (
              <RoomsCard key={index} values={room} />
            ))
          ) : (
            <p>No rooms available for the selected criteria.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
