import styled from "styled-components";

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: maharlika;
`;

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid #023047;
  margin: 40px 0;
  min-width: 1300px;
  border-radius: 40px;
  height: 60vh;
  position: relative;
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 60px;
`;

export const ContainerImg = styled.div`
  width: 461px;
  height: 280px;
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

  left: 6.7%;
  font-weight: bold;
`;

export const Text2 = styled.p`
  color: #fb8500;
`;

export const Text4 = styled.p`
  font-size: 17px;
`;

export const LeftInput = styled.input`
  width: 454px;
  height: 50px;

  left: 6.5%;
  border: 4px solid #fb8500;
  border-radius: 10px;
  padding-left: 10px;
  margin: 10px 0;
  font-size: 17px;

  &::placeholder {
    color: #fb8500;
    font-family: maharlika;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchResult = styled.div`
  display: none;
  position: absolute;
  border: 4px solid #fb8500;
  border-radius: 10px;
  top: 25%;
  width: 454px;
  background-color: white;

  &.show {
    display: block;
  }
`;

export const ResultList = styled.ul`
  list-style-type: none;
`;

export const Result = styled.li`
  padding: 10px;
  cursor: pointer;
`;

export const LongerInput = styled.input`
  width: 400px;
  height: 50px;
  border: 4px solid #fb8500;
  border-radius: 10px;
  padding-left: 5px;
  margin: 10px 0;
  font-size: 17px;

  &::placeholder {
    color: #fb8500;
  }
  &:focus {
    outline: none;
  }
`;

export const ShortInput = styled.input`
  width: 200px;
  height: 50px;
  border: 4px solid #fb8500;
  border-radius: 10px;
  padding-left: 5px;
  margin: 10px 0;
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

export const AddOProduto = styled.button`
  width: 470px;
  height: 40px;
  position: absolute;
  bottom: -13%;
  border: none;
  background-color: #023047;
  border-radius: 20px;
  color: #fff;
  font-size: 17px;

  &:hover {
    background: #219ebc;
    cursor: pointer;
  }
`;
