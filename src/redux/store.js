import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import { moviesApi } from "./api/index";
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    moviesApi: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
export default store;
