import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const HomeConsumer = () => {
  return (
    <>
    <Header authenticated={true}/>
    
    <Footer />
    </>
  )
}

export default HomeConsumer