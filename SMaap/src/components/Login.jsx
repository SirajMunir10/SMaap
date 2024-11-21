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
  const validationErrors = useSelector(
    (state) => state.userSlice.validationErrors
  );
  const login = useSelector((state) => state.userSlice.login);

  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    setErrors(validationErrors);
  }, [validationErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateLogin(values));

    if (!errors.email && !errors.password) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
            showToast("Login Successful");
            dispatch(setLogin(true));
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div>
      <div className="auth-form">
        <h2>Log In</h2>
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
              autoComplete="email"
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
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
          <p>
            <strong>Or</strong>
          </p>
          <Link to="/Signup" className="create-account-button">
            Create Account
          </Link>
        </form>
        <p className="terms-text">
          By signing in or creating an account, you agree with our{" "}
          <a href="#">Terms & Conditions</a> and{" "}
          <a href="#">Privacy Statement</a>.
          <br />
          All rights reserved. Copyright (2006 - 2024) - SMhotels.com™
        </p>
      </div>
    </div>
  );
}

export default Login;
