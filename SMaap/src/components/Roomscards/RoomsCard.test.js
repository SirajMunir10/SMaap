import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RoomsCard from "./RoomsCard";
// src/setupTests.js
import "@testing-library/jest-dom";

describe("RoomsCard Component", () => {
  const mockRoomData = {
    roomid: 1,
    name: "Deluxe Room",
    type: "Deluxe",
    space: 2,
    price: 150,
    image: "deluxe-room.jpg",
  };

  const mockOnBook = jest.fn();

  test("renders room details correctly", () => {
    render(<RoomsCard values={mockRoomData} onBook={mockOnBook} />);

    // Check if room details are rendered
    expect(screen.getByText("Deluxe Room")).toBeInTheDocument();
    expect(screen.getByText("Type: Deluxe")).toBeInTheDocument();
    expect(screen.getByText("Max People: 2")).toBeInTheDocument();
    expect(screen.getByText("Price: $150")).toBeInTheDocument();

    // Check if image is rendered with correct src and alt attributes
    const roomImage = screen.getByAltText("Deluxe Room");
    expect(roomImage).toBeInTheDocument();
    expect(roomImage).toHaveAttribute("src", "deluxe-room.jpg");
  });

  test("calls onBook when 'Book Now' button is clicked", () => {
    render(<RoomsCard values={mockRoomData} onBook={mockOnBook} />);

    // Simulate button click
    const bookNowButton = screen.getByText("Book Now");
    fireEvent.click(bookNowButton);

    // Verify that onBook was called
    expect(mockOnBook).toHaveBeenCalledTimes(1);
  });
});
