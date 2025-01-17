import React, { useEffect, useState } from "react";
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
  Perfil,
} from "./style";
import imgLogo from "../../assets/logo.png";
import { FaBell, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PublicHeader from "../PublicHeader/PublicHeader";
import { api } from "../../service/api";

const CommerceHeader = ({ authenticated }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { idCommerce } = useParams();
  const [commerce, setCommerce] = useState([]);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownVisible && !event.target.closest(".dropdown-content")) {
      setDropdownVisible(false);
    }
  };

  const fetchCommerce = async () => {
    try {
      const response = await api.get(`/comercios/find/${idCommerce}`);
      setCommerce(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCommerce();
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownVisible]);

  const handleProfile = () => {
    navigate(`/comercio/${idCommerce}/meu-perfil`);
  };
  const handleHome = () => {
    navigate(`/comercio/home/${idCommerce}`);
  };

  return (
    <>
      {authenticated ? (
        <>
          <Container>
            <ImgLogo src={imgLogo} alt="Logo" onClick={handleHome} />
            <Right>
              <Form>
                <Search placeholder="O que está procurando?" />
              </Form>
              <Link>{<FaBell size={25} color="#FFB703" />} </Link>
              <Link onClick={handleProfile}>
                <Perfil key={commerce.id} src={commerce.fotoUrl} alt={commerce.nome} />
              </Link>
            </Right>
          </Container>
          <CategoryMenu>
            <Dropdown>
              {dropdownVisible === false ? (
                <Button className="dropBtn" onClick={toggleDropdown}>
                  Todos os produtos &nbsp; <FaChevronDown />
                </Button>
              ) : (
                <Button className="dropBtn" onClick={toggleDropdown}>
                  Todos os produtos &nbsp; <FaChevronUp />
                </Button>
              )}

              {dropdownVisible && (
                // TODO: Add categorias
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
        <PublicHeader />
      )}
    </>
  );
};

export default CommerceHeader;
