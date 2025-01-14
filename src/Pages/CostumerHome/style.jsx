import styled from "styled-components";

export const Divisor = styled.div`
  background-color: #ffb703;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 60px;
  justify-content: center;
  align-items: center;
  padding: 60px 0px 30px 0px;
`
