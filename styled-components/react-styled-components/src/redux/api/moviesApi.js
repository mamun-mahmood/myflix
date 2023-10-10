import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.API_KEY}`,
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/movie/now_playing`,
    }),
    getImages: builder.query({
      query: (movie_id) => `/movie/${movie_id}/images}`,
    }),
    getNowPlaying: builder.query({
      query: () => `/movie/now_playing`,
    }),
  }),
});
export const { useGetMoviesQuery, useGetImagesQuery, useGetNowPlayingQuery } =
  moviesApi;
