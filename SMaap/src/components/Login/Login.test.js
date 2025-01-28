import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import { store } from "../../store"; // Adjust to your actual store location
import { validateLogin } from "../../features/usercredintials/userSlice"; // Mocked action

// Mock Redux hooks and action dispatch
jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => ({ validationErrors: {}, login: false }),
}));

describe("Login Component", () => {
  it("renders the login form correctly", () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    // Check if form fields and buttons are rendered
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/create account/i)).toBeInTheDocument();
  });

  it("displays validation errors when fields are empty", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.click(loginButton);

    // Wait for validation errors to appear
    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  it("dispatches the correct actions on form submission", async () => {
    // Mock dispatch to verify action being dispatched
    const dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    // Fill the form with test data
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    // Dispatch form submission
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Simulate validation logic (mock validation errors state if needed)
    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith(
        validateLogin({ email: "test@example.com", password: "password123" })
      );
    });
  });

  it("shows validation errors when there are invalid fields", async () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    // Wait for validation error messages
    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });
});
