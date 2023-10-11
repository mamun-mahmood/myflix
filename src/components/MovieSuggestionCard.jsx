import { useNavigate } from "react-router-dom";
import { MovieSuggestionContainer } from "./styles/Navbar.styles";

const MovieSuggestionCard = ({ data }) => {
  const {
    title,
    name,
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
    media_type,
  } = data;
  const navigate = useNavigate();
  return (
    <MovieSuggestionContainer onClick={() => navigate(`/${media_type}/${id}`)}>
      <img
        src={
          poster_path
            ? `http://image.tmdb.org/t/p/w500/${poster_path}`
            : `http://image.tmdb.org/t/p/w500/${backdrop_path}`
        }
        alt={title}
      />
      <div>
        <h4>{title || name}</h4>
        <p>{release_date}</p>
        <p>{vote_average}</p>
      </div>
    </MovieSuggestionContainer>
  );
};

export default MovieSuggestionCard;
