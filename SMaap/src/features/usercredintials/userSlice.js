import { createSlice } from "@reduxjs/toolkit";
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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
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
      } else {
        error.password = "";
      }

      state.validationErrors = error; // Store errors in Redux state
    },
    validateSignup: (state, action) => {
      let error = {};

      // Validate name
      if (action.payload.name === "") {
        error.name = "Name should not be empty";
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
      } else {
        error.password = "";
      }

      state.validationErrors = error;
    },
    setLogin(state, action) {
      state.login = action.payload; // Update login state
    },
  },
});

export const { setLogin, validateLogin, validateSignup } = userSlice.actions;
export default userSlice.reducer;
