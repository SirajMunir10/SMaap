import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TermsAndConditions from "./Terms&Co";
import "@testing-library/jest-dom";

describe("TermsAndConditions Component", () => {
  test("renders the heading", () => {
    render(
      <BrowserRouter>
        <TermsAndConditions />
      </BrowserRouter>
    );

    expect(screen.getByText("Welcome to SM Hotel!")).toBeInTheDocument();
  });

  test("renders the link to the SM Hotel website", () => {
    render(
      <BrowserRouter>
        <TermsAndConditions />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link", {
      name: /https:\/\/smhotel.com/i,
    });
    expect(linkElement).toHaveAttribute("href", "https://smhotel.com");
    expect(linkElement).toHaveAttribute("target", "_blank");
  });

  test("renders the email contact link", () => {
    render(
      <BrowserRouter>
        <TermsAndConditions />
      </BrowserRouter>
    );

    const emailLink = screen.getByRole("link", {
      name: /sirajmunirfurc@gmail.com/i,
    });
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:sirajmunirfurc@gmail.com"
    );
  });

  test("renders the go to homepage link", () => {
    render(
      <BrowserRouter>
        <TermsAndConditions />
      </BrowserRouter>
    );

    const homepageLink = screen.getByRole("link", { name: /go to homepage/i });
    expect(homepageLink).toHaveAttribute("href", "/");
  });

  test("renders all sections and subheadings", () => {
    // Check specific elements instead of relying on ambiguous text matches
    const headingCookies = screen.getByRole("heading", { name: /cookies/i });
    const paragraphCookies = screen.getByText(
      /we employ the use of cookies\. by accessing sm hotel, you agreed to use cookies in agreement with sm hotel's privacy policy\./i
    );

    // Assert that the elements are in the document
    expect(headingCookies).toBeInTheDocument();
    expect(paragraphCookies).toBeInTheDocument();

    // Continue for other headings and sections
    expect(
      screen.getByRole("heading", { name: /license/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /additional terms/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /privacy policy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /disclaimer/i })
    ).toBeInTheDocument();
  });
});
