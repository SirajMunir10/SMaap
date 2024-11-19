import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Loginstyle.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { validateLogin } from "../features/usercredintials/userSlice";
import {
  showErrorToast,
  showToast,
} from "../components/NotificationToast/index";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get errors from Redux
  const validationErrors = useSelector(
    (state) => state.userSlice.validationErrors
  );

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Update local errors state whenever validationErrors in Redux state changes
  useEffect(() => {
    setErrors(validationErrors);
  }, [validationErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch validation action to update Redux state
    dispatch(validateLogin(values));

    // Check for errors after validation is dispatched
    if (!errors.email && !errors.password) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            showToast("Login Successful");
            navigate("/");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form">
        <h2>Log In to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={handleInput}
              autoComplete="email" // Add autocomplete attribute here
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              onChange={handleInput}
              autoComplete="current-password" // Add autocomplete attribute here
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p>
            <strong>Or</strong>
          </p>
          <Link to="/Signup" className="create-account-button">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
