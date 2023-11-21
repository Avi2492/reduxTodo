import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoApp/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
