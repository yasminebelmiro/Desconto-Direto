import React, { useState } from "react";
import {
  Container,
  Form,
  ImgLogo,
  Link,
  Search,
  Right,
  Button,
  CategoryMenu,
  Content,
  Dropdown,
  Item,
  Category,
  Options,
  Perfil
} from "./style";
import imgLogo from "../../assets/logo.png";
import { FaBell, FaHeart, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CommerceHeader = ({ authenticated }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownVisible && !event.target.closest(".dropdown-content")) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownVisible]);

  const handleProfile = () => {
    navigate("/comercio/meu-perfil");
   }
   const handleHome = () => {
    navigate("/comercio/home");
   }

  return (
    <>
      {authenticated ? (
        <>
          <Container>
            <ImgLogo src={imgLogo} alt="Logo" onClick={handleHome}/>
            <Right>
              <Form>
                <Search placeholder="O que está procurando?" />
              </Form>
              <Link>{<FaBell size={25} color="#FFB703" />} </Link>
              <Link onClick={handleProfile}><Perfil src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgZsMtVpteI3mH2yHr0p31syr08i2MPrMeQQ&s"/></Link>
            </Right>
          </Container>
          <CategoryMenu>
            <Dropdown>
              <Button className="dropBtn" onClick={toggleDropdown}>
                Todos os produtos &nbsp; <FaChevronDown />
              </Button>
              {dropdownVisible && (
                <Content className="dropdown-content show">
                  <Item>Link 1</Item>
                  <Item>Link 2</Item>
                  <Item>Link 3</Item>
                </Content>
              )}
            </Dropdown>
            <Options>
              <Category>Mercearia</Category>
              <Category>Limpeza</Category>
              <Category>Bebidas</Category>
              <Category>Açougue</Category>
              <Category>Higiene</Category>
              <Category>Drogaria</Category>
            </Options>
          </CategoryMenu>
        </>
      ): (
        <Container>
          <ImgLogo src={imgLogo} alt="Logo" />
        </Container>
      )}
    </>
  );
};

export default CommerceHeader;
