// global styles
import { createGlobalStyle, styled } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Roboto', sans-serif;
`;
export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem 0rem;
  align-items: center;
  align-content: space-around;
  width: 100%;
  height: 100%;
  // margin: 0 auto;
  padding: 0.5rem 0rem;
`;
