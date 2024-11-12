import styled from "styled-components";

export const RegisterChoiseContainer = styled.div`
  background: radial-gradient(#219ebc 30%, #ffffff 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChoiseContainer = styled.div`
  background-color: #023047;
  height: 460px;
  width: 1120px;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 35px;
  font-family: Lazy Dog;
`;

export const Row = styled.div`
  display: flex;
  width: 1000px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 228px;
  height: 38px;
  margin: 10px;

  background-color: #ffb703;
  border: none;
  border-radius: 50px;

  font-size: 17px;
  color: #ffffff;

  font-family: "Maharlika";

  &:hover {
    background-color: #e8c66f;
  }
`;
