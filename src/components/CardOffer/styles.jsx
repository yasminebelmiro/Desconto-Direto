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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Heart = styled.div`
  color: red;

  position: absolute;
  z-index: 1;
  left: 5px;
  top: 5px;
`;

export const ImgProduct = styled.img`
  width: auto;
  height: 112px;
  padding: 10px;
`;

export const Name = styled.h1`
  font-size: 25px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: grey;
`;

export const Validity = styled.div`
  width: 200px;
  height: 50px;
  background-color: #fb8500;
  border-radius: 40px;
  font-size: 25px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  bottom: -15px;
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
`;
