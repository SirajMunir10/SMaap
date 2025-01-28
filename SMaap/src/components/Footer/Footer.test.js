import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import "@testing-library/jest-dom"; // No need for '/extend-expect'

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Footer Component", () => {
  test("renders the footer with all sections", () => {
    renderWithRouter(<Footer />);

    // Check if footer sections render by checking the titles
    expect(screen.getByText("SM")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
    expect(screen.getByText("COMPANY")).toBeInTheDocument();
    expect(screen.getByText("SERVICES")).toBeInTheDocument();
  });

  test("renders social media icons with correct classes", () => {
    renderWithRouter(<Footer />);

    // Check if social media links have correct icon classes
    const facebookLink = screen.getByRole("link", { name: /facebook/i });
    expect(facebookLink.querySelector("i")).toHaveClass("fab fa-facebook-f");

    const twitterLink = screen.getByRole("link", { name: /twitter/i });
    expect(twitterLink.querySelector("i")).toHaveClass("fab fa-twitter");

    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    expect(instagramLink.querySelector("i")).toHaveClass("fab fa-instagram");

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink.querySelector("i")).toHaveClass("fab fa-linkedin-in");
  });

  test("renders footer links correctly", () => {
    renderWithRouter(<Footer />);

    // Check if the footer links are displayed and have correct routing
    const aboutUsLink = screen.getByText("About Us");
    expect(aboutUsLink.closest("a")).toHaveAttribute("href", "/AboutUs");

    const contactUsLink = screen.getByText("Contact Us");
    expect(contactUsLink.closest("a")).toHaveAttribute("href", "/ContactUs");

    const termsLink = screen.getByText("Terms & Condition");
    expect(termsLink.closest("a")).toHaveAttribute("href", "/Terms&Co");
  });

  test("renders the footer description correctly", () => {
    renderWithRouter(<Footer />);

    // Check if footer description is correct
    expect(
      screen.getByText(/Build a professional website for your hotel business/i)
    ).toBeInTheDocument();
  });
});
