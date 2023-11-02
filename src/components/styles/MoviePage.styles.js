import styled from "styled-components";

export const Container = styled.div``;
export const BackDropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PosterImage = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 0 5px #ffffff80;
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin: 1rem;
  margin-bottom: 0;
`;
export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 1rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
