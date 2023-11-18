import { useParams } from "react-router-dom";
import {
  useGetAllMoviesGenresQuery,
  useGetMoviesWithGenreQuery,
} from "../redux/api/index";
import Card from "../components/Card";
import { GridContainer, PageTitle } from "../components/styles/GlobalStyles";

const Movies = () => {
  const { genre_name } = useParams();
  const { data: MoviesGenres } = useGetAllMoviesGenresQuery();
  const genre_id = MoviesGenres?.genres?.find(
    (genre) => genre.name === genre_name
  )?.id;
  const { data, error } = useGetMoviesWithGenreQuery(genre_id);
  if (error) {
    console.log(error);
  }
  const { results = [] } = data || {};
  return (
    <>
      <PageTitle>{genre_name}</PageTitle>
      <GridContainer>
        {results.map(({title, overview, backdrop_path, id}) => (
            <Card key={id} {...{title, overview, backdrop_path, id}} />
          ))}
      </GridContainer>
    </>
  );
};

export default Movies;
