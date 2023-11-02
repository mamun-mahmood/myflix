import { useParams } from "react-router-dom";
import {
  Container,
  PosterImage,
  Title,
} from "../components/styles/MoviePage.styles";
import {
  useGetMovieVideosQuery,
  useGetMoviesQuery,
} from "../redux/api/moviesApi";

const MoviePage = () => {
  const { title: movieTitle } = useParams();
  const { data, error } = useGetMoviesQuery({
    page: 5,
    type: "popular",
  });
  if (error) {
    console.log(error);
  }
  const movie = data?.results?.find((movie) => movie.title === movieTitle);
  if (!movie) {
    return <div>Loading...</div>;
  }
  const {
    title,
    overview,
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    popularity,
    original_title,
    original_language,
    id,
    genre_ids,
    adult,
  } = movie;
  const { data: videos } = useGetMovieVideosQuery(movie?.id);

  console.log(videos);
  return (
    <Container>
      <PosterImage
        src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt=""
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default MoviePage;
