import { useParams } from "react-router-dom";
import { useGetMoviesWithGenreQuery } from "../redux/api/moviesApi";
import Card from "../components/Card";
import { MoviesContainer } from "../components/styles/GlobalStyles";

const Movies = () => {
  const { genre_id } = useParams();
  const { data, error } = useGetMoviesWithGenreQuery(genre_id);
  if (error) {
    console.log(error);
  }
  return (
    <>
      <h1>{genre_id}</h1>
      <MoviesContainer>
        {data?.results &&
          data?.results.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
      </MoviesContainer>
    </>
  );
};

export default Movies;
