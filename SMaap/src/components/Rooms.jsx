import React, { useState } from "react";
import { rooms } from "../data/alldata"; // Adjust the import path as necessary

const RoomCard = ({ room }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="room-card">
      <div className="image-gallery">
        <button
          className="carousel-arrow left-arrow"
          onClick={() =>
            setSelectedImageIndex(
              (selectedImageIndex - 1 + room.imageurls.length) %
                room.imageurls.length
            )
          }
        >
          &lt;
        </button>
        <img
          src={room.imageurls[selectedImageIndex]}
          alt={room.name}
          className="room-image"
        />
        <button
          className="carousel-arrow right-arrow"
          onClick={() =>
            setSelectedImageIndex(
              (selectedImageIndex + 1) % room.imageurls.length
            )
          }
        >
          &gt;
        </button>
      </div>
      <h2 className="room-name">{room.name}</h2>
      <p className="room-description">{room.description}</p>
      <p className="room-type">Type: {room.type}</p>
      <p className="room-rent">Rent per day: ₹{room.rentperday}</p>
      <p className="room-capacity">Max Capacity: {room.maxcount}</p>
      <p className="room-phone">Contact: {room.phonenumber}</p>
      <div className="room-actions">
        <button className="btn favorite-btn">Add to Favorites</button>
        <button className="btn book-btn">Book Now</button>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="rooms-page">
      <h1 className="rooms-title">Our Rooms</h1>
      <div className="room-list">
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
