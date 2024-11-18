import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Divisor, Text } from './styled'
import Carousel from '../../components/Carousel/Carousel'

const HomeConsumer = () => {
  return (
    <>
    <Header authenticated={true}/>
    <Divisor>
      <Text>Panfletos</Text>
    </Divisor>
    <Carousel/>
    <Divisor>
      <Text>Top 10 ofertas</Text>
    </Divisor>
    <Divisor>
      <Text>Ofertas</Text>
    </Divisor>
  
    <Footer />
    </>
  )
}

export default HomeConsumer