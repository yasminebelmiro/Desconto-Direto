import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  height: 300px;
  border: 4px solid #fb8500;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const ImgProduct = styled.img`
  width: auto;
  height: 112px;
  padding: 10px;
`;

export const Name = styled.h1`
  font-size: 20px;
  margin: 0;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 15px;
  color: grey;
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: white;
  font-size: 20px;

  position: absolute;
  z-index: 1;
  bottom: -15px;
`;

export const Delete = styled.div`
  width: 100px;
  height: 50px;
  background-color: #d91d04;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 50px 50px 0px;
  border: 2px solid #fb8500;
  cursor: pointer;
  &:hover {
    background-color: #b11905;
    color: black;
  }
`;
export const Edit = styled.div`
  background-color: #ffb703;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px 0px 0px 50px;
  border: 2px solid #fb8500;
  cursor: pointer;
  &:hover {
    background-color: #ffe703;
    color: black;
  }
`;

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 4px solid #fb8500;
  position: absolute;
  z-index: 1;
  right: -40px;
  top: -40px;
  cursor: pointer;
`;

export const Validity = styled.div`
  font-size: 20px;
`;
