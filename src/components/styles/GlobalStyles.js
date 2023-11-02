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
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 1rem;
  gap: 1rem;
`;
export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 1rem;
  margin-bottom: 0;
`;
