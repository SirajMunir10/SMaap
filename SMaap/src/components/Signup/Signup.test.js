import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import axios from "axios";
import SignUp from "./SignUp";
import { validateSignup } from "../../features/usercredintials/userSlice";

// Mock axios
jest.mock("axios");

// Mock showToast and showErrorToast
jest.mock("../NotificationToast/index", () => ({
  showToast: jest.fn(),
  showErrorToast: jest.fn(),
}));

const mockStore = configureStore([]);
let store;

describe("SignUp Component", () => {
  beforeEach(() => {
    // Mock initial Redux state
    store = mockStore({
      userSlice: {
        validationErrors: {},
      },
    });
  });

  test("renders the SignUp form", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    // Check if form elements are rendered
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });

  test("handles input changes", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("displays validation errors", async () => {
    // Mock validation errors
    store = mockStore({
      userSlice: {
        validationErrors: {
          name: "Name is required",
          email: "Invalid email",
          password: "Password must be at least 6 characters",
        },
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText(/Sign Up/i));

    // Expect validation errors to appear
    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Invalid email/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  test("submits the form successfully", async () => {
    // Mock no validation errors
    store = mockStore({
      userSlice: {
        validationErrors: {},
      },
    });

    axios.post.mockResolvedValue({ data: { message: "Success" } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(screen.getByText(/Sign Up/i));

    // Wait for axios to be called
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith("http://localhost:8081/signup", {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    });
  });

  test("handles API error during form submission", async () => {
    // Mock no validation errors
    store = mockStore({
      userSlice: {
        validationErrors: {},
      },
    });

    axios.post.mockRejectedValue(new Error("Network Error"));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const nameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(screen.getByText(/Sign Up/i));

    // Wait for axios to be called and error to be logged
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
  });
});
