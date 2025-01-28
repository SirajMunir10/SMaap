import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Navbar from "./Navbar";
import "@testing-library/jest-dom"; // Correct import

const mockStore = configureStore([]);

describe("Navbar Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      userSlice: { login: false },
    });
  });

  const renderWithProviders = (ui, { store }) => {
    return render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    );
  };

  test("renders all navigation links correctly", () => {
    renderWithProviders(<Navbar />, { store });

    const navLinks = screen
      .getAllByRole("link")
      .filter((link) => !link.closest(".social-icons")); // Exclude social media links
    expect(navLinks.length).toBe(6); // Adjusted to 6
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Rooms")).toBeInTheDocument();
  });

  test("renders social media icons", () => {
    renderWithProviders(<Navbar />, { store });

    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("YouTube")).toBeInTheDocument();
  });

  test("renders login button when user is not logged in", () => {
    renderWithProviders(<Navbar />, { store });

    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
    expect(loginButton.closest("a")).toHaveAttribute("href", "/Login");
  });

  test("renders profile button when user is logged in", () => {
    store = mockStore({
      userSlice: { login: true },
    });

    renderWithProviders(<Navbar />, { store });

    const profileButton = screen.getByText("Profile");
    expect(profileButton).toBeInTheDocument();
    expect(profileButton.closest("a")).toHaveAttribute("href", "/AllBookings");
  });

  test("renders the logo correctly", () => {
    renderWithProviders(<Navbar />, { store });

    const logo = screen.getByText("SM Hotels");
    expect(logo).toBeInTheDocument();
  });
});
