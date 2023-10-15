import { useParams } from "react-router-dom";
import {
  useGetAllMoviesGenresQuery,
  useGetMoviesWithGenreQuery,
} from "../redux/api/moviesApi";
import Card from "../components/Card";
import { MoviesContainer } from "../components/styles/GlobalStyles";

const Movies = () => {
  const { genre_name } = useParams();
  const { data: MoviesGenres } = useGetAllMoviesGenresQuery();
  const genre_id = MoviesGenres?.genres?.find(
    (genre) => genre.name === genre_name
  )?.id;
  const { data, error } = useGetMoviesWithGenreQuery(genre_id);
  if (error) {
    console.log(error);
  }
  return (
    <>
      <h1>{genre_name}</h1>
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
