import styled from "styled-components";

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

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: maharlika;
`;

export const Profile = styled.div`
  background-color: #fb8500;
  width: 80%;
  min-height: 50vh;
  border-radius: 40px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Nome = styled.h1`
  font-size: 40px;
  margin-top: 50px;
`;

export const Categoria = styled.p`
  font-size: 30px;
   margin-top: 20px;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 4px solid #fb8500;
  position: absolute;
  top: -100px;
  z-index: 1;
`;

export const Row = styled.div`
width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const RowCards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 60px;
  justify-content: center;
  padding: 60px 0px 30px 0px;
`;

export const Column = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Contato = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  gap: 10px;
`;
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

export const Button = styled.button`
  width: 150px;
  height: 40px;
  position: absolute;
  top: 5%;
  right: 3%;
  border: none;
  background-color: #023047;
  border-radius: 20px;
  color: #fff;
  font-size: 17px;

  &:hover {
    background: #219EBC;
    cursor: pointer;
  }
`;
