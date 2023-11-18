import { useParams } from "react-router-dom";
import {
  useGetTvWithGenreQuery,
} from "../redux/api/index";
import Card from "../components/Card";
import { GridContainer } from "../components/styles/GlobalStyles";
const TvShows = () => {
  const { id } = useParams();
  const { data, error } = useGetTvWithGenreQuery(id);
  if (error) {
    console.log(error);
  }
  const { results = [] } = data || {};
  return (
    <>
      {/* <PageTitle>{genre_name}</PageTitle> */}
      <GridContainer>
      {results.map(({name:title, overview, backdrop_path, id}) => (
            <Card key={id} {...{title, overview, backdrop_path, id}} />
          ))}
      </GridContainer>
    </>
  );
};

export default TvShows;
