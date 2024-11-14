import React from "react";
import { Container, Form, ImgLogo, Link, Search, Right } from "./style";
import imgLogo from "../../assets/logo.png";
import { FaBell, FaHeart  } from "react-icons/fa";

const Header = ({ authenticated }) => {
  return (
    <Container>
      
        <ImgLogo src={imgLogo}></ImgLogo> 

      {authenticated ? (
        <>
          <Right>
            <Form>
              <Search placeholder="O que está procurando?" />
            </Form>
            <Link>{<FaBell size={25} color="#FFB703"/>} </Link>
            <Link>{<FaHeart size={25} color="#FFB703"/>}</Link>
          </Right>
          <CategoryMenu>
            <DropdownCategory>
     {/* #TODO: dropdown e links do header */}
            </DropdownCategory>
            <Category></Category>
          </CategoryMenu>
        </>
      ) : null}
    </Container>
  );
};

export default Header;
