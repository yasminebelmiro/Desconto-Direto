import React from 'react'
import img from "../../assets/logo.png"
import { ContainerLogo, Imglogo, Text, Text2 } from './style'

const Logo = ({infooter}) => {
  return (
    <ContainerLogo>
      
      <Imglogo src={img} />
      <Text>DESCONTO </Text>
      <Text2>DIRETO</Text2>
     
    </ContainerLogo>
  )
}

export default Logo