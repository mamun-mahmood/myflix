import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover svg {
    transform: scale(0);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: -100%; /* Move the content below the card initially */
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(90deg); /* Rotate it by 90 degrees */
  transform-origin: top;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${CardContainer}:hover & {
    transform: rotateX(0deg); /* Rotate it back to 0 degrees on hover */
    bottom: 0; /* Move it up to its original position */
  }
`;

const CardTitle = styled.p`
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
`;

const CardDescription = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
`;
export { CardContainer, CardContent, CardTitle, CardDescription };
