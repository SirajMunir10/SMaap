import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Rooms from "./Rooms";

test("renders room cards and confirms booking", async () => {
  const mockRooms = [
    {
      roomid: 1,
      name: "Deluxe Room",
      type: "Deluxe",
      price: 100,
      isBooked: false,
    },
    {
      roomid: 2,
      name: "Standard Room",
      type: "Standard",
      price: 80,
      isBooked: false,
    },
  ];

  // Mocking API responses
  global.axios.post.mockResolvedValueOnce({ data: "Booking confirmed!" });

  render(<Rooms />);

  // Check if room cards are rendered
  mockRooms.forEach((room) => {
    expect(screen.getByText(room.name)).toBeInTheDocument();
    expect(screen.getByText(`Type: ${room.type}`)).toBeInTheDocument();
    expect(screen.getByText(`Price: $${room.price}`)).toBeInTheDocument();
  });

  // Simulate booking process
  fireEvent.click(screen.getByText("Deluxe Room"));
  const checkinInput = screen.getByPlaceholderText("Check-in Date");
  const checkoutInput = screen.getByPlaceholderText("Check-out Date");

  fireEvent.change(checkinInput, { target: { value: "2025-01-30" } });
  fireEvent.change(checkoutInput, { target: { value: "2025-02-05" } });

  const confirmButton = screen.getByText("Confirm Booking");
  fireEvent.click(confirmButton);

  // Wait for booking confirmation
  await waitFor(() => {
    expect(screen.getByText("Booking confirmed!")).toBeInTheDocument();
  });
});
