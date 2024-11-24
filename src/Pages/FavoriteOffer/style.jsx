import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  margin-right: 600px;
  border-radius: 40px;
`;

export const Back = styled.button`
  background-color: #023047;
  width: 80px;
  height: 40px;
  margin: 60px;
  color: #ffffff;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Cards = styled.div`
  width: 90%;
  min-height: 50vh;
  border: 4px solid #023047;
  border-radius: 40px;
  margin: 40px;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 60px;
  justify-content: center;
  align-items: center;
  padding: 60px 0px 30px 0px;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
