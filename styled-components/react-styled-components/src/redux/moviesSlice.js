import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      title: "The Shawshank Redemption",
      year: "1994",
      overview: "sdjfhg",
    },
  ],
};
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
