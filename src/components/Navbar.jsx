import { Outlet, useNavigate } from "react-router-dom";
import {
  useGetAllMoviesGenresQuery,
  useGetAllTvGenresQuery,
  useLazyGetSearchMultiQuery,
} from "../redux/api/index";
import { Form, Logo, Conatiner, SuggestionContainer, Select, Option } from "./styles/Navbar.styles";
import {  useState } from "react";
import MovieSuggestionCard from "./MovieSuggestionCard";
const navBtns = [
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "TV Shows",
    path: "/tv",
  },
];

const Navbar = () => {
  const { data: MoviesGenres, error } = useGetAllMoviesGenresQuery();
  const { data: TVGenres, error: TVGenresError } = useGetAllTvGenresQuery();
  if (error || TVGenresError) {
    console.log(error, TVGenresError);
  }
  const [trigger, data] = useLazyGetSearchMultiQuery();
  const handleChange = (e) => {
    // after 1 second, trigger the query
    setTimeout(() => {
      const query = e.target.value;
      trigger(query);
    }, 2000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    trigger(query);
  };
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleFocus = () => {
    setOpenDropdown(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setOpenDropdown(false);
    }
    , 200);
  };
  const { data: { results = [] } = {} } = data;
  const handleSelect = (e) => {
    const value = e.target.value;
    navigate(value);
  };

  return (
    <>
      <Conatiner>
        <Logo src="/images/logo.svg" onClick={() => navigate(`/`)} alt="logo" />
        <Form onSubmit={handleSubmit} >
          <div className="container">
            <div className="search-container">
              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Search"
                className="input"
                type="text"
                name="query"
              />
              <svg viewBox="0 0 24 24" className="search__icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
            </div>
            {openDropdown && results && (
              <SuggestionContainer>
                {results?.map((e, index) => (
                  <MovieSuggestionCard data={e} key={index} />
                ))}
              </SuggestionContainer>
            )}
          </div>
        </Form>
        <div style={{ display: "flex", flexWrap: "wrap", paddingRight: 50 }}>
          {navBtns?.map((btn, index) => (
            <Select key={index} onChange={handleSelect}>
              {btn.name === "Movies" &&
                MoviesGenres?.genres?.map((genre, index) => (
                  <Option value={`/movies/${genre.id}`} key={index}>
                    {genre.name}
                  </Option>
                ))}
              {btn.name === "TV Shows" &&
                TVGenres?.genres?.map((genre, index) => (
                  <Option value={`/tv/${genre.id}`} key={index}>
                    {genre.name}
                  </Option>
                ))}
            </Select>
          ))}
        </div>
        {/* searchbar */}
      </Conatiner>
      <Outlet />
    </>
  );
};

export default Navbar;
