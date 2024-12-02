import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Column2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 14px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const Title = styled.h1`
  background-color: #023047;
  width: 700px;
  min-height: 60px;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #023047;
  margin: 40px;
  width: 90%;
  border-radius: 40px;
  min-height: 100vh;
  position: relative;
  font-family: maharlika;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;
  border: 4px solid #fb8500;
  border-radius: 100%;
  margin: 20px;
`;

export const Icon = styled.div`
  color: #fb8500;
`;

export const Text4 = styled.p`
  font-size: 17px;
  margin-top: 28px;
  margin-bottom: 10px;
`;

export const LongerInput = styled.input`
  width: 600px;
  height: 50px;
  border: 4px solid #fb8500;
  border-radius: 10px;
  padding-left: 5px;

  font-size: 17px;

  &::placeholder {
    color: #fb8500;
  }
  &:focus {
    outline: none;
  }
`;

export const ShortInput = styled.input`
  width: 280px;
  height: 50px;
  border: 4px solid #fb8500;
  border-radius: 10px;
  padding-left: 5px;

  &::placeholder {
    color: #fb8500;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 30px 0;
  border: none;
  background-color: #fb8500;
  border-radius: 20px;
  color: #fff;
  font-size: 17px;

  &:hover {
    background: #ffb703;
    cursor: pointer;
  }
`;
