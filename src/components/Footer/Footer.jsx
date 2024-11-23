import React from "react";
import {
  Column,
  Contato,
  ContatoContainer,
  CopyrightText,
  FooterContainer,
  LogoContainer,
  Row,
  RowContato,
} from "./style";
import Logo from "../Logo/Logo";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Row>
          <LogoContainer>
            {/*TODO: Dar um jeito de diminuir o tamanho atravez do style*/}
            <Logo />
          </LogoContainer>
          <ContatoContainer>
            <RowContato>
              <FaInstagram className="icon" color="#FFFFFF" size={14} />
              <Contato>Desconto_direto</Contato>
            </RowContato>
            <RowContato>
              <IoLogoLinkedin className="icon" color="#FFFFFF" size={14} />
              <Contato>Desconto Direto</Contato>
            </RowContato>
            <RowContato>
              <MdEmail className="icon" color="#FFFFFF" size={14} />
              <Contato>descontodireto@dd.org.br</Contato>
            </RowContato>
            <RowContato>
              <FaPhoneAlt className="icon" color="#FFFFFF" size={14} />
              <Contato>0800-7777</Contato>
            </RowContato>
          </ContatoContainer>
        </Row>
        <CopyrightText>
          Todos os direitos reservados Desconto Direto © 2024
        </CopyrightText>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
