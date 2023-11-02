import Card from "../components/Card";
import { GridContainer } from "../components/styles/GlobalStyles";
import { useGetMoviesQuery } from "../redux/api/moviesApi";
const Landing = () => {
  const { data, error } = useGetMoviesQuery({
    page: 5,
    type: "popular",
  });
  if (error) {
    console.log(error);
  }
  return (
    <GridContainer>
      {data?.results &&
        data?.results?.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
    </GridContainer>
  );
};

export default Landing;
