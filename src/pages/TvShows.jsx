import { useParams } from "react-router-dom";
import {
  useGetAllTvGenresQuery,
  useGetTvWithGenreQuery,
} from "../redux/api/index";
import Card from "../components/Card";
import { GridContainer, PageTitle } from "../components/styles/GlobalStyles";
const TvShows = () => {
  const { genre_name } = useParams();
  const { data: TVGenres } = useGetAllTvGenresQuery();
  const genre_id = TVGenres?.genres?.find(
    (genre) => genre.name === genre_name
  )?.id;
  const { data, error } = useGetTvWithGenreQuery(genre_id);
  if (error) {
    console.log(error);
  }
  const { results = [] } = data || {};
  return (
    <>
      <PageTitle>{genre_name}</PageTitle>
      <GridContainer>
      {results.map(({name:title, overview, backdrop_path, id}) => (
            <Card key={id} {...{title, overview, backdrop_path, id}} />
          ))}
      </GridContainer>
    </>
  );
};

export default TvShows;
