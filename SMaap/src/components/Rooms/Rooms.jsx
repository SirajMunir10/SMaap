import { roomsdata } from "../../data/alldata";
import RoomsCard from "../Roomscards/RoomsCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { showToast, showErrorToast } from "../NotificationToast/index";
import "../../styles/RoomsStyle.css";
import axios from "axios";
import { useState } from "react";

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleBookRoom = async () => {
    if (!selectedRoom || !checkin || !checkout) {
      showErrorToast("Please select a room and dates.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/rooms", {
        userEmail: "sirajmunirfurc@gmail.com",
        roomId: selectedRoom.roomid,
        roomName: selectedRoom.name,
        roomType: selectedRoom.type,
        price: selectedRoom.price,
        checkinDate: checkin,
        checkoutDate: checkout,
      });
      showToast(response.data);
      setSelectedRoom({ ...selectedRoom, isBooked: true });
    } catch (err) {
      showErrorToast("Booking failed. Try again.");
    }
  };

  const handleCancelBooking = async () => {
    try {
      const response = await axios.delete("http://localhost:8081/rooms", {
        data: {
          userEmail: "sirajmunirfurc@gmail.com",
          roomId: selectedRoom.roomid,
        },
      });

      showToast(response.data);
      setSelectedRoom(null); // Reset the confirmation panel
    } catch (err) {
      showErrorToast("Cancellation failed. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="rooms-container">
        <h1>Our Rooms</h1>
        <div className="rooms">
          {roomsdata.map((room, index) => (
            <RoomsCard
              key={index}
              values={room}
              onBook={() => setSelectedRoom(room)}
            />
          ))}
        </div>

        {/* Confirmation Panel */}
        {selectedRoom && (
          <div className="confirmation-panel">
            <h3>{selectedRoom.name}</h3>
            <p>Type: {selectedRoom.type}</p>
            <p>Price: ${selectedRoom.price}</p>
            <input
              type="date"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              placeholder="Check-in Date"
            />
            <input
              type="date"
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              placeholder="Check-out Date"
            />
            <button
              onClick={
                selectedRoom.isBooked ? handleCancelBooking : handleBookRoom
              }
            >
              {selectedRoom.isBooked ? "Cancel Booking" : "Confirm Booking"}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Rooms;
