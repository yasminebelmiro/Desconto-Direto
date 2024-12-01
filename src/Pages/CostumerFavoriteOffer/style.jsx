import styled from "styled-components";

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  background-color: #023047;
  width: 700px;
  height: 60px;
  color: #ffffff;
  font-family: maharlika;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
`;

export const Back = styled.button`
  background-color: #023047;
  width: 80px;
  height: 40px;
  margin: 20px;
  color: #ffffff;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #023047;
  margin: 40px;
  width: 90%;
  border-radius: 40px;
  min-height: 50vh;
  padding: 30px;
`;
