import React from "react";
import "../../styles/RoomscardStyle.css";

const RoomsCard = ({ values, onBook }) => {
  const { roomid, name, type, space, price, image } = values;

  return (
    <div className="room-card">
      <img src={image} alt={name} className="room-card-image" />
      <div className="room-card-details">
        <h3 className="room-card-title">{name}</h3>
        <p className="room-card-type">Type: {type}</p>
        <p className="room-card-maxcount">Max People: {space}</p>
        <p className="room-card-price">Price: ${price}</p>
        <button className="book-now-button" onClick={() => onBook()}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomsCard;
