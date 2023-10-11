import { useParams } from "react-router-dom";
import { useGetTvWithGenreQuery } from "../redux/api/moviesApi";
import { MoviesContainer } from "../components/styles/LandingStyles";
import Card from "../components/Card";
import { useEffect, useState } from "react";
const TvShows = () => {
  const { genre_id } = useParams();
  const { data, error } = useGetTvWithGenreQuery(genre_id);
  if (error) {
    console.log(error);
  }
  return (
    <>
      <h1>{genre_id}</h1>
      <MoviesContainer>
        {data?.results &&
          data.results.map((movie, index) => (
            <Card key={index} movie={{ ...movie, title: movie.name }} />
          ))}
      </MoviesContainer>
    </>
  );
};

export default TvShows;
