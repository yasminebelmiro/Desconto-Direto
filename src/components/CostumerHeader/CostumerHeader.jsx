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
} from "./style";
import imgLogo from "../../assets/logo.png";
import { FaBell, FaHeart, FaChevronDown, FaSearch } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import PublicHeader from "../PublicHeader/PublicHeader";

const CostumerHeader = ({ authenticated }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { idConsumer } = useParams();
  const [search, setSearch] = useState("");

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (dropdownVisible && !event.target.closest(".dropdown-content")) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownVisible]);

  const handleFavoriteOffer = () => {
    navigate(`/consumidor/ofertas-favoritas/${idConsumer}`);
  };

  const handleHome = () => {
    navigate(`/consumidor/home/${idConsumer}`);
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (search.trim() !== "") {
        navigate(`/consumidor/${idConsumer}/search?query=${encodeURIComponent(search)}`);
      } else {
        console.log("Campo de busca está vazio.");
      }
    }
  };
  return (
    <>
      {authenticated ? (
        <>
          <Container>
            <ImgLogo src={imgLogo} alt="Logo" onClick={handleHome} />
            <Right>
              <Link>
                <Form>
                  <Search
                    placeholder="O que está procurando?"
                    placeholder={search}
                    onChange={handleInputChange}
                    onKeyDown={handleSearch}
                  />
                </Form>
              </Link>
              <Link>{<FaBell size={25} color="#FFB703" />} </Link>
              <Link onClick={handleFavoriteOffer}>
                {<FaHeart size={25} color="#FFB703" />}
              </Link>
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
        <PublicHeader />
      )}
    </>
  );
};

export default CostumerHeader;
