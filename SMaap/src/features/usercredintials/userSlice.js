import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  user: {
    userId: "",
    userName: "",
    email: "",
    phno: "",
    pass: "",
    cnfmPass: "",
    totalbooking: "",
    totalservices: "",
    totalprice: "",
  },
  loginUsers: [],
  validationErrors: {},
  login: false, // Add this to store validation errors
};

// Regex Patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/; // Allow lowercase or uppercase, numeric, and at least 8 characters
const usernamePattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,}$/; // Must contain alphabets and numbers
const namePattern = /^[a-zA-Z\s]+$/; // Must contain alphabets only

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    // Validate Login
    validateLogin: (state, action) => {
      let error = {};

      if (action.payload.email === "") {
        error.email = "Email should not be empty";
      } else if (!emailPattern.test(action.payload.email)) {
        error.email = "Email didn't match";
      } else {
        error.email = "";
      }

      if (action.payload.password === "") {
        error.password = "Password should not be empty";
      } else if (!passwordPattern.test(action.payload.password)) {
        error.password =
          "Password must include uppercase, lowercase, and numeric characters.";
      } else {
        error.password = "";
      }

      state.validationErrors = error; // Store errors in Redux state
    },

    // Validate Signup
    validateSignup: (state, action) => {
      let error = {};

      // Validate name
      if (action.payload.name === "") {
        error.name = "Name should not be empty";
      } else if (!namePattern.test(action.payload.name)) {
        error.name = "Name should only contain alphabets";
      } else {
        error.name = "";
      }

      // Validate email
      if (action.payload.email === "") {
        error.email = "Email should not be empty";
      } else if (!emailPattern.test(action.payload.email)) {
        error.email = "Email didn't match";
      } else {
        error.email = "";
      }

      // Validate password
      if (action.payload.password === "") {
        error.password = "Password should not be empty";
      } else if (!passwordPattern.test(action.payload.password)) {
        error.password =
          "Password must include uppercase, lowercase, and numeric characters.";
      } else {
        error.password = "";
      }

      // Validate username (optional: if it's part of the payload)
      if (action.payload.userName === "") {
        error.userName = "Username should not be empty";
      } else if (!usernamePattern.test(action.payload.userName)) {
        error.userName = "Username must contain both alphabets and numbers";
      } else {
        error.userName = "";
      }

      state.validationErrors = error; // Store errors in Redux state
    },

    // Set Login state
    setLogin(state, action) {
      state.login = action.payload; // Update login state
    },
  },
});

export const { setLogin, validateLogin, validateSignup } = userSlice.actions;
export default userSlice.reducer;
