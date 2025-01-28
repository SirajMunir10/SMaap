import "../../styles/Signupstyle.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { validateSignup } from "../../features/usercredintials/userSlice";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { showErrorToast, showToast } from "../NotificationToast/index";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationErrors = useSelector(
    (state) => state.userSlice.validationErrors
  );

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value || "", // ensure no undefined values
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch validation action
    dispatch(validateSignup(values));
    setIsSubmitting(true); // Set submitting flag
  };

  useEffect(() => {
    // Only proceed if submitting and no validation errors
    if (
      isSubmitting &&
      !validationErrors.name &&
      !validationErrors.email &&
      !validationErrors.password
    ) {
      // If no errors, proceed with signup
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          console.log("Signup Success, navigating to Login page...");
          showToast("SignUp Successfull Now login");
          navigate("/Login");
        })
        .catch((err) => console.log("Signup Error:", err))
        .finally(() => setIsSubmitting(false)); // Reset submitting flag
    } else if (isSubmitting) {
      // Reset isSubmitting if errors are present
      setIsSubmitting(false);
    }
  }, [isSubmitting, validationErrors, values, navigate]);

  return (
    <div className="signup-container">
      <div className="signup-image"></div>
      <div className="signup-form">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              required
              name="name"
              value={values.name}
              onChange={handleInput}
              autoComplete="name"
            />
            {validationErrors.name && (
              <span className="text-danger">{validationErrors.name}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              name="email"
              value={values.email}
              onChange={handleInput}
              autoComplete="email"
            />
            {validationErrors.email && (
              <span className="text-danger">{validationErrors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              required
              name="password"
              value={values.password}
              onChange={handleInput}
              autoComplete="new-password"
            />
            {validationErrors.password && (
              <span className="text-danger">{validationErrors.password}</span>
            )}
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <p className="login-prompt">
            Already signed in? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
