import { useParams } from "react-router-dom";
import {
  useGetAllTvGenresQuery,
  useGetTvWithGenreQuery,
} from "../redux/api/moviesApi";
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
  return (
    <>
      <PageTitle>{genre_name}</PageTitle>
      <GridContainer>
        {data?.results &&
          data.results.map((movie, index) => (
            <Card key={index} movie={{ ...movie, title: movie.name }} />
          ))}
      </GridContainer>
    </>
  );
};

export default TvShows;
