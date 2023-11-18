import { useNavigate } from "react-router-dom";
import { MovieSuggestionContainer } from "./styles/Navbar.styles";

const MovieSuggestionCard = ({ data }) => {
  const {
    title,
    name,
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
    id,
    media_type,
  } = data;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${media_type}/${id}`);
    console.log("clicked", id);
  }
  return (
    <MovieSuggestionContainer onClick={handleClick} >
      <img
        src={
          poster_path
            ? `http://image.tmdb.org/t/p/w500/${poster_path}`
            : `http://image.tmdb.org/t/p/w500/${backdrop_path}`
        }
        alt={title}
      />
      <div >
        <h4>{title || name}</h4>
        <p>{release_date}</p>
        <p>{vote_average}</p>
      </div>
    </MovieSuggestionContainer>
  );
};

export default MovieSuggestionCard;
