// AboutUs.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";

// Mock the image imports by using a string as a placeholder for the src
jest.mock("../assets/about1.jpg", () => "about1.jpg");
jest.mock("../assets/about2.jpg", () => "about2.jpg");
jest.mock("../assets/about3.jpg", () => "about3.jpg");
jest.mock("../assets/about4.jpg", () => "about4.jpg");

// Mock Navbar and Footer components since they are external components
jest.mock("../Navbar/Navbar", () => () => (
  <div data-testid="navbar">Navbar</div>
));
jest.mock("../Footer", () => () => <div data-testid="footer">Footer</div>);

// Create a custom render function that includes BrowserRouter (required for Link component)
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("AboutUs Component", () => {
  test("renders the Navbar component", () => {
    renderWithRouter(<AboutUs />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument(); // Ensure the Navbar renders
  });

  test("renders the Footer component", () => {
    renderWithRouter(<AboutUs />);
    expect(screen.getByTestId("footer")).toBeInTheDocument(); // Ensure the Footer renders
  });

  test("renders the About Us section correctly", () => {
    renderWithRouter(<AboutUs />);
    expect(screen.getByText("Welcome to SM Hotels")).toBeInTheDocument();
    expect(
      screen.getByText("SM Hotels offers a luxurious and memorable experience")
    ).toBeInTheDocument();
    expect(screen.getByText("Explore More")).toBeInTheDocument(); // Ensure the Explore More button renders
  });

  test("renders all the images correctly", () => {
    renderWithRouter(<AboutUs />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4); // Check if 4 images are rendered
    expect(images[0]).toHaveAttribute("src", "about1.jpg"); // Ensure the image src is mocked correctly
    expect(images[1]).toHaveAttribute("src", "about2.jpg");
    expect(images[2]).toHaveAttribute("src", "about3.jpg");
    expect(images[3]).toHaveAttribute("src", "about4.jpg");
  });

  test("checks Explore More button link", () => {
    renderWithRouter(<AboutUs />);
    const exploreButton = screen.getByText("Explore More");
    expect(exploreButton.closest("a")).toHaveAttribute("href", "/");
  });
});
