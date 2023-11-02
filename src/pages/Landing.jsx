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
        data?.results?.map(({ title, overview, backdrop_path }, index) => (
          <Card key={index} {...{ title, overview, backdrop_path }} />
        ))}
    </GridContainer>
  );
};

export default Landing;
