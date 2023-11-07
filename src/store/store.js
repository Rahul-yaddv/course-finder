import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../Slice/courseSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});
