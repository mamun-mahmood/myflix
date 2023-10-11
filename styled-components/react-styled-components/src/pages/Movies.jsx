import { useParams } from "react-router-dom";
import { useGetMoviesWithGenreQuery } from "../redux/api/moviesApi";
import { MoviesContainer } from "../components/styles/LandingStyles";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const Movies = () => {
  const { genre_id } = useParams();
  const [movies, setMovies] = useState([]);
  const { data, error } = useGetMoviesWithGenreQuery(genre_id);
  useEffect(() => {
    setMovies(data?.results);
  }, [data]);
  console.log(data?.results[0]);
  return (
    <>
      <h1>{genre_id}</h1>
      <MoviesContainer>
        {movies &&
          movies.map((movie, index) => <Card key={index} movie={movie} />)}
      </MoviesContainer>
    </>
  );
};

export default Movies;
