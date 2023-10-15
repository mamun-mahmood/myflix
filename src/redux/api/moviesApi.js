import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (type, page) => `/movie/${type}?page=${page}`,
    }),
    getImages: builder.query({
      query: (movie_id) => `/movie/${movie_id}/images}`,
    }),
    getAllMoviesGenres: builder.query({
      query: () => `/genre/movie/list?language=en`,
    }),
    getAllTvGenres: builder.query({
      query: () => `/genre/tv/list`,
    }),
    getNowPlaying: builder.query({
      query: () => `/movie/now_playing`,
    }),
    getMoviesWithGenre: builder.query({
      query: (genre_id) => `/discover/movie?with_genres=${genre_id}`,
    }),
    getTvWithGenre: builder.query({
      query: (genre_id) => `/discover/tv?with_genres=${genre_id}`,
    }),
    getKeyWordsByName: builder.query({
      query: (name) => `/search/keyword?query=${name}`,
    }),
    getSearchMulti: builder.query({
      query: (name) => `/search/multi?query=${name}`,
    }),
  }),
});
export const {
  useGetMoviesQuery,
  useGetImagesQuery,
  useGetNowPlayingQuery,
  useGetAllMoviesGenresQuery,
  useGetAllTvGenresQuery,
  useGetMoviesWithGenreQuery,
  useGetTvWithGenreQuery,
  useLazyGetKeyWordsByNameQuery,
  useLazyGetSearchMultiQuery,
} = moviesApi;
