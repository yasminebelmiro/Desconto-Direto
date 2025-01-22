import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100wh;
  height: 100px;
  display: flex;
  flex-direction: column;
  margin: 30px
  justify-content: center;
`;

export const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Img = styled.img`
  width: 50px;
  animation: ${rotate} 1s linear infinite;
`;
