import React from 'react'
import Header from '../../Components/HeaderCom/header'
import Flash from '../../Components/FlashSales/flash'
import FastAndFree from '../../Components/FreeAndFastCustomer/fast'
import Arrival from '../../Components/NewArrival/arrival'

const Home = () => {
  return (
    <div>
      <Header/>
      <Flash/>
      <FastAndFree/>
      <Arrival/>
    </div>
  )
}

export default Home
