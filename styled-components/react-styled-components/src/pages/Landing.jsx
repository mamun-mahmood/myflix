import Card from "../components/Card";
import { MoviesContainer } from "../components/styles/LandingStyles";

const Landing = () => {
  const movies = [];
  return (
    <MoviesContainer>
      {movies.results && movies.results.map((movie) => <Card movie={movie} />)}
    </MoviesContainer>
  );
};

export default Landing;
