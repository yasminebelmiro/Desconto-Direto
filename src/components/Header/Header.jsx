import React from 'react'
import { Container, ImgLogo } from './style'
import imgLogo from "../../assets/logo.png"
const Header = () => {
  return (
    <Container>
        <ImgLogo src={imgLogo}></ImgLogo>
    </Container>
  )
}

export default Header