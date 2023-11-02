import styled from "styled-components";

export const Container = styled.div``;
export const BackDropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const VideoEmbed = styled.iframe`
  width: 100%;
  height: 90vh;
  border: none;
  allowfullscreen="true";
`;
export const InfoContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 80vh;
`;
export const InfoContainerBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  filter: blur(15px);
  z-index: -1;
`;
export const PosterImage = styled.img`
  flex: 0.5;
  height: auto;
  object-fit: cover;
  box-shadow: 0 0 0 2px #ffffff80;
  margin: 1rem;
  border-radius: 10px;
`;
export const Info = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
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
