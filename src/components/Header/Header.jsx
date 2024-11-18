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
  Options
} from "./style";
import imgLogo from "../../assets/logo.png";
import { FaBell, FaHeart, FaChevronDown } from "react-icons/fa";

const Header = ({ authenticated }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

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

  return (
    <>
      {authenticated ? (
        <>
          <Container>
            <ImgLogo src={imgLogo} alt="Logo" />
            <Right>
              <Form>
                <Search placeholder="O que está procurando?" />
              </Form>
              <Link>{<FaBell size={25} color="#FFB703" />} </Link>
              <Link>{<FaHeart size={25} color="#FFB703" />}</Link>
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
      ) : (
        <Container>
          <ImgLogo src={imgLogo} alt="Logo" />
        </Container>
      )}
    </>
  );
};

export default Header;
