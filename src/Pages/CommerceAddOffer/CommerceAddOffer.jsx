import React, { useEffect, useState } from "react";
import CommerceHeader from "../../components/CommerceHeader/CommerceHeader";
import {
  Back,
  Container,
  Column,
  Row,
  Title,
  Button,
  ContainerImg,
  Icon,
  LongerInput,
  ShortInput,
  Left,
  Right,
  Text,
  Text2,
  Text4,
  LeftInput,
  AddOProduto,
} from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { api } from "../../service/api";
import { Result, ResultList, SearchResult } from "../CommerceEditOffer/style";

const CommerceAddOffer = () => {
  const navigate = useNavigate();
  const { idCommerce } = useParams();
  const [newOffer, setNewOffer] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(false);

  const fetchProducts = async () => {
    try {
      const responseProducts = await api.get(`/produtos/all`);
      setProducts(responseProducts.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!selectedProduct || !e.target.price.value || !e.target.validity.value) {
      alert("Preencha todos os campos antes de salvar.");
      return;
    }

    const offerData = {
      comercioId: idCommerce,
      produtoId: selectedProduct.id,
      preco: e.target.price.value,
      validade: e.target.validity.value,
    };

    try {
      const responseOffer = await api.post("/ofertas", offerData);
      console.log(responseOffer.data);
      alert("Oferta criada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar oferta. Tente novamente.");
    }
  };

  const toggleDropdown = () => setSearchResult((prev) => !prev);

  const handleOutsideClick = (event) => {
    if (searchResult && !event.target.closest(".dropdown-content")) {
      setSearchResult(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    fetchProducts();
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [searchResult]);

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => navigate(`/comercio/home/${idCommerce}`);
  const handleNewProduct = () =>
    navigate(`/comercio/${idCommerce}/novo-produto`);

  return (
    <>
      <CommerceHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Column>
        <Title>Adicione informações sobre sua oferta</Title>
        <Container>
          <Column as="form" onSubmit={onSubmit}>
            <Row>
              <Left>
                <Text>Selecione um produto já cadastrado</Text>
                <Column>
                  <LeftInput
                    placeholder="Procure por um produto aqui"
                    onChange={handleSearchChange}
                    value={searchQuery}
                    onClick={toggleDropdown}
                  />
                  {searchResult && (
                    <SearchResult className="dropdown-content show">
                      {filteredProducts.length > 0 ? (
                        <ResultList>
                          {filteredProducts.map((product) => (
                            <Result
                              key={product.id}
                              onClick={() => {
                                setSelectedProduct(product);
                                setSearchResult(false);
                              }}
                            >
                              {`${product.nome} ${product.medida}`}
                            </Result>
                          ))}
                        </ResultList>
                      ) : (
                        <ResultList>
                          <Result>Nenhum produto encontrado.</Result>
                        </ResultList>
                      )}
                    </SearchResult>
                  )}
                </Column>
                <ContainerImg>
                  {selectedProduct?.fotoUrl ? (
                    <>
                      <img
                        src={selectedProduct.fotoUrl}
                        alt={selectedProduct.nome}
                        style={{ width: "200px" }}
                      />
                      <Text2>{`${selectedProduct.nome} ${selectedProduct.medida}`}</Text2>
                    </>
                  ) : (
                    <Icon>
                      <CiImageOn size={100} />
                    </Icon>
                  )}
                </ContainerImg>
                <AddOProduto onClick={handleNewProduct}>
                  Cadastrar produto
                </AddOProduto>
              </Left>
              <Right>
                <Text4>Validade da oferta</Text4>
                <ShortInput id="validity" name="validity" type="date" />
                <Text4>Preço da oferta</Text4>
                <ShortInput id="price" name="price" placeholder="R$99,99" />
              </Right>
            </Row>
            <Button type="submit">Salvar</Button>
          </Column>
        </Container>
      </Column>
    </>
  );
};
export default CommerceAddOffer;
