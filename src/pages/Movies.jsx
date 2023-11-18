import { useParams } from "react-router-dom";
import { useGetMoviesWithGenreQuery } from "../redux/api/index";
import Card from "../components/Card";
import { GridContainer } from "../components/styles/GlobalStyles";

const Movies = () => {
  const { id } = useParams();
  const { data, error } = useGetMoviesWithGenreQuery(id);
  if (error) {
    console.log(error);
  }
  const { results = [] } = data || {};
  return (
    <>
      {/* <PageTitle>{genre_name}</PageTitle> */}
      <GridContainer>
        {results.map(({title, overview, backdrop_path, id}) => (
            <Card key={id} {...{title, overview, backdrop_path, id}} />
          ))}
      </GridContainer>
    </>
  );
};

export default Movies;
