import styled from "styled-components";

export const ContainerHero = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding: 100px 0;
  background-color: #023047;
  font-family: Maharlika;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 200px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   margin: 0 200px;

`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 60px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 20px;
  max-width: 1000px;
`;

export const Image = styled.img`
  max-width: 340px;
`;

export const Button = styled.button`
  max-width: 200px;
  height: 40px;
  border: none;
  background-color: #219ebc;
  border-radius: 20px;
  color: #ffffff;
  font-size: 18px;
  font-family: Maharlika;
  cursor: pointer;

  &:hover {
  background-color: #1a7d8f;
  border: 2px solid #FFFFFF;
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;;
  background-color: #FFB703;
  font-family: Maharlika;`
