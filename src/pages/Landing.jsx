import Card from "../components/Card";
import { useGetMoviesQuery } from "../redux/api/moviesApi";
import { MoviesContainer } from "../components/styles/GlobalStyles";

const Landing = () => {
  const { data, error } = useGetMoviesQuery("now_playing");
  if (error) {
    console.log(error);
  }
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
