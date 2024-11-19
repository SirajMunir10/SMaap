import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/usercredintials/userSlice";
export const store = configureStore({
  reducer: {
    userSlice,
  },
});
