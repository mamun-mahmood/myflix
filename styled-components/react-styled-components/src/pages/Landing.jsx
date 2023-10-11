import { useSelector } from "react-redux";
import Card from "../components/Card";
import { MoviesContainer } from "../components/styles/LandingStyles";
import { useGetMoviesQuery } from "../redux/api/moviesApi";

const Landing = () => {
  const { data, error } = useGetMoviesQuery("now_playing");
  console.log(error);
  return (
    <MoviesContainer>
      {data?.results &&
        data?.results?.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
    </MoviesContainer>
  );
};

export default Landing;
