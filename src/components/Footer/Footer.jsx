import React from 'react'
import { Column, Contato, ContatoContainer, CopyrightText, FooterContainer, LogoContainer, Row } from './style'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <FooterContainer>
        <Column>
        <Row>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <ContatoContainer>
                <Contato>Desconto_direto</Contato>
                <Contato>Desconto Direto</Contato>
                <Contato>descontodireto@dd.org.br</Contato>
                <Contato>0800-7777</Contato>
            </ContatoContainer>
        </Row>
        <CopyrightText>Todos os direitos reservados Desconto Direto © 2024</CopyrightText>
        </Column>
        
    </FooterContainer>
  )
}

export default Footer