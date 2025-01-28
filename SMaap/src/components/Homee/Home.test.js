import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

// Render the Home component with Router (since it uses Link)
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Home Component", () => {
  test("renders the homepage with header, buttons, and footer", () => {
    renderWithRouter(<Home />);

    // Check if the Navbar component is rendered (since it's imported)
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Check if the subtitle and title are present in the header
    expect(screen.getByText("Welcome to")).toBeInTheDocument();
    expect(screen.getByText("SM Hotels")).toBeInTheDocument();
    expect(screen.getByText("World of Luxurious Rooms")).toBeInTheDocument();

    // Check if the button linking to rooms is present
    const button = screen.getByText("Our Rooms");
    expect(button).toBeInTheDocument();
    expect(button.closest("a")).toHaveAttribute("href", "/rooms");

    // Check if Footer component is rendered (since it's imported)
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
