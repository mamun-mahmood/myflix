import { useParams } from "react-router-dom";
import {
  Container,
  Info,
  InfoContainer,
  InfoContainerBackgroundImage,
  PosterImage,
  Title,
  VideoEmbed,
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
  const { key, site } = videos?.results[0] || {};
  return (
    <Container>
      <VideoEmbed src={`https://www.${site}.com/embed/${key}`} />
      <InfoContainer>
        <PosterImage
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title + " poster"}
        />
        <InfoContainerBackgroundImage
          src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={title + " backdrop"}
        />
        <Info>
          <Title>{title}</Title>
          <p>{overview}</p>
          <p>Release Date: {release_date}</p>
          <p>Vote Average: {vote_average}</p>
          <p>Vote Count: {vote_count}</p>
          <p>Popularity: {popularity}</p>
          <p>Original Title: {original_title}</p>
          <p>Original Language: {original_language}</p>
          <p>Genre Ids: {genre_ids}</p>
          <p>Adult: {adult ? "Yes" : "No"}</p>
        </Info>
      </InfoContainer>
    </Container>
  );
};

export default MoviePage;
