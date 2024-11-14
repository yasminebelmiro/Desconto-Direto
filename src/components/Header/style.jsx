import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(45deg,#023047 50% ,  #219EBC 100% );
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

  &:: placeholder {
    color: #ffb703;

  }
  &:focus {
    outline: 2px solid #ffffff;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #ffff;
`;


