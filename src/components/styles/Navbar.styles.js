import styled from "styled-components";
const Conatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const NavButton = styled.button`
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
const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const PasteButton = styled.div`
  margin: 0 10px;
  position: relative;
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #212121;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    border-radius: 15px 15px 0 0;
  }
`;

const DropdownContent = styled.div`
  display: none;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  min-width: 200px;
  background-color: #212121;
  border: 2px solid #4caf50;
  border-radius: 0 15px 15px 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const DropdownLink = styled.a`
  color: #4caf50;
  padding: 8px 10px;
  text-decoration: none;
  display: block;
  transition: 0.1s;

  &:hover {
    background-color: #4caf50;
    color: #212121;
  }

  &:focus {
    background-color: #212121;
    color: #4caf50;
  }
`;

const DropdownTop = styled(DropdownLink)`
  &:hover {
    border-radius: 0 13px 0 0;
  }
`;

const DropdownBottom = styled(DropdownLink)`
  &:hover {
    border-radius: 0 0 13px 13px;
  }
`;
const SuggestionContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #212121;
  padding: 1rem;
  border-radius: 0px 0px 1rem 1rem;
  transition: all 0.3s ease-in-out;
  transform-origin: top;
  height: 90vh;
  overflow-y: scroll;
`;
const MovieSuggestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  margin: 0.5rem 0rem;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  &:hover {
    background-color: #4caf50;
    color: #212121;
  }
`;
export {
  NavButton,
  PasteButton,
  DropdownContent,
  DropdownLink,
  DropdownTop,
  DropdownBottom,
  Conatiner,
  Button,
  SearchBar,
  Form,
  Logo,
  SuggestionContainer,
  MovieSuggestionContainer,
};
