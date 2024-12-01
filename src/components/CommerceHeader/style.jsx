import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(45deg, #023047 50%, #219ebc 100%);
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgLogo = styled.img`
  display: flex;
  justify-content: flex-start;
  margin: 0 30px;
  width: 40px;
  cursor: pointer;
`;

export const Right = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 20px;
`;

export const Form = styled.form``;

export const Search = styled.input`
  width: 300px;
  height: 35px;

  border: none;
  border-radius: 10px;
  padding-left: 20px;
  color: #ffb703;

  &::placeholder {
    color: #ffb703;
  }

  &:focus {
    outline: 2px solid #ffffff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #ffff;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const CategoryMenu = styled.div`
  background-color: #8ecae6;
  width: 100%;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Dropdown = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #8ecae6;
  color: white;
  width: 284px;
  height: 50px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: Maharlika;
  font-weight: bold;
  &:hover,
  &:focus {
    background-color: #2980b9;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 284px;
  z-index: 1;
  top: 100%;
  left: 0;
  &.show {
    display: block;
  }
`;

export const Item = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #ffb703;
  }
`;

export const Category = styled.a`
  color: #ffffff;
  padding: 0 40px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    background-color: #2980b9;
  }
`;

export const Options = styled.div`
  background-color: #8ecae6;
  margin-right: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Perfil = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 3px solid #ffb703;
`;
