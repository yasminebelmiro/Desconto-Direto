import React from 'react'
import Loading from "../Loading/Loading"
import { Container, Img, Title, Text } from './style';
const ErrorPage = () => {
  return (
    <Container>
      <Img src="https://media-public.canva.com/FqTaA/MAFIQ8FqTaA/1/tl.png" alt="" /> 
      <Text>A página que você tentou acessar não existe ou não está disponível.</Text>
      <Loading />
    </Container>
    
  );
}

export default ErrorPage