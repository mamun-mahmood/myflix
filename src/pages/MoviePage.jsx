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
  useGetMovieByIdQuery,
  useLazyGetMovieVideosQuery,
} from "../redux/api/index";
import { useEffect } from "react";

const MoviePage = () => {
  const { id } = useParams();
  const { data: movie } = useGetMovieByIdQuery(id);
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
    genre_ids,
    adult,
  } = movie || {};
  const [trigger, { data: videos }] = useLazyGetMovieVideosQuery();
  useEffect(() => {
      trigger(id);
    
  }, [id]);
  const { key, site } = videos?.results[0] || {};

  return (
    <Container>
      {site && key ? (
        <VideoEmbed src={`https://www.${site}.com/embed/${key}`} />
      ) : (
        <div> Loading trailer...</div>
      )}
      {movie ? (
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
      ) : (
        <div>Loading info...</div>
      )}
    </Container>
  );
};

export default MoviePage;
