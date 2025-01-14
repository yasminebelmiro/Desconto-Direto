import styled from "styled-components";

export const RegisterContainer = styled.div`
  background: radial-gradient(#219ebc 30%, #ffffff 100%);
  height: 95vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Left = styled.div`
  background-color: #ffb703;
  width: 560px;
  height: 460px;
  border-radius: 40px;

  z-index: 2;
  margin-right: -60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.p`
  font-size: 30px;
  font-family: Maharlika;
  color: #ffffff;
  margin: 20px 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const LargeInput = styled.input`
  width: 394px;
  height: 50px;

  margin: 5px;

  border: none;
  border-radius: 10px;

  color: #ffb703;
  font-size: 15px;
  font-family: Maharlika;
  padding: 0 20px;

  &:: placeholder {
    color: #ffb703;
    margin-left: 30px;
  }
  &:focus {
    outline: 2px solid #ffffff;
  }
`;

export const SmallInput = styled.input`
  width: 170px;
  height: 50px;

  margin: 5px;

  border: none;
  border-radius: 10px;

  color: #ffb703;
  font-size: 15px;
  font-family: Maharlika;
  padding: 0 20px;

  &:: placeholder {
    color: #ffb703;
    margin-left: 30px;
  }
  &:focus {
    outline: 2px solid #ffffff;
  }
`;
export const Row = styled.div`
  display: flex;
  width: 444px;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonLeft = styled.button`
  width: 228px;
  height: 38px;
  margin: 10px;

  background-color: #023047;
  border: none;
  border-radius: 50px;

  font-size: 17px;
  color: #ffffff;

  font-family: "Maharlika";

  &:hover {
    background-color: #e8c66f;
  }
`;

export const Right = styled.div`
  background-color: #023047;
  width: 560px;
  height: 460px;
  border-radius: 40px;

  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonRight = styled.button`
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

export const ErrorMessage = styled.p`
    color: red;
    margin-left: 10px;
`;
