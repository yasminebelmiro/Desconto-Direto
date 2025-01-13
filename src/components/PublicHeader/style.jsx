import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #023047;
`;

export const ContainerMenuList = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Item = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: #ffb703;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  width: 5rem;
  height: 2rem;
  cursor: pointer;

  &:hover{
  background-color: #ff9900;
  border: 2px solid #FFFFFF;
    }
`;

export const Logo = styled.img`
  width: 40px;
  padding: 10px;
`;
