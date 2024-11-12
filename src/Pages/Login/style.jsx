import styled from "styled-components";

export const LoginContainer = styled.div`
  background: radial-gradient(#219ebc 30%, #ffffff 100%);
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  background-color: #023047;
  width: 560px;
  height: 460px;
  border-radius: 40px;

  position: relative;
  z-index: 1;
  margin-right: -60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonLeft = styled.button`
  width: 228px;
  height: 38px;
  margin: 10px;

  background-color: #ffb703;
  border: none;
  border-radius: 50px;

  font-size: 17px;
  color: #ffffff;

  font-family: "Maharlika";
`;

export const ContainerRight = styled.div`
  background-color: #ffb703;
  width: 560px;
  height: 460px;
  border-radius: 40px;

  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.p`
  font-size: 30px;
  font-family: Maharlika;
  color: #ffffff;
  margin: 40px 0px;
`;

export const ButtonRight = styled.button`
  width: 228px;
  height: 38px;
  margin: 40px;

  background-color: #023047;
  border: none;
  border-radius: 50px;

  font-size: 17px;
  color: #ffffff;

  font-family: "Maharlika";
`;

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;`;

