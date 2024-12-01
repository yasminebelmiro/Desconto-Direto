import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50vh;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid #023047;
  margin: 40px;
  width: 70%;
  border-radius: 40px;
  height: 50vh;
  position: relative;
  font-family: maharlika;
`;

export const Left = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin: 60px;
`;

export const ContainerImg = styled.div`
  width: 461px;
  height: 302px;
  border: 4px solid #fb8500;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.div`
  color: #fb8500;
`;

export const Text = styled.p`
  font-size: 25px;
  position: absolute;
  top: 5%;
  left: 5%;
  font-weight: bold;
`;

export const Text2 = styled.p`
  color: #fb8500;
`;

export const Text3 = styled.p`
  color: #fb8500;
`;

export const Text4 = styled.p`
  font-size: 17px;
  margin-top: 28px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
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
  position: absolute;
  bottom: 5%;
  right: 5%;
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
