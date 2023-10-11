import { Outlet } from "react-router-dom";
import { Conatiner } from "./styles/Navbar.styles";
import {
  useGetAllMoviesGenresQuery,
  useGetAllTvGenresQuery,
} from "../redux/api/moviesApi";
import styled from "styled-components";
const Button = styled.button`
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
  }
`;
const SearchBar = styled.input`
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const navBtns = [
  // {
  //   name: "Home",
  //   path: "/",
  // },
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "TV Shows",
    path: "/tv",
  },
  {
    name: "People",
    path: "/people",
  },
  {
    name: "More",
    path: "/more",
  },
];
const Navbar = () => {
  const { data: MoviesGenres, error } = useGetAllMoviesGenresQuery();
  const { data: TVGenres, error: TVGenresError } = useGetAllTvGenresQuery();
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Conatiner>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {navBtns?.map((btn, index) => (
            <div class="paste-button" key={index}>
              <button class="button">{btn.name} &nbsp; ▼</button>
              <div class="dropdown-content">
                {btn.name === "Movies" &&
                  MoviesGenres?.genres?.map((genre, index) => (
                    <Button key={index}>{genre.name}</Button>
                  ))}
                {btn.name === "TV Shows" &&
                  TVGenres?.genres?.map((genre, index) => (
                    <Button key={index}>{genre.name}</Button>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {/* searchbar */}
        <Form onSubmit={handleSubmit}>
          <SearchBar type="text" onChange={handleChange} placeholder="Search" />
        </Form>
      </Conatiner>
      <Outlet />
    </>
  );
};

export default Navbar;
