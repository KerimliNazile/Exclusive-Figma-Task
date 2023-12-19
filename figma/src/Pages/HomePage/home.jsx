import React from 'react'
import Header from '../../Components/HeaderCom/header'
import Flash from '../../Components/FlashSales/flash'
import FastAndFree from '../../Components/FreeAndFastCustomer/fast'
import Arrival from '../../Components/NewArrival/arrival'
import Category from '../../Components/BrowseByCategory/category'
import Enhance from '../../Components/EnhanceTimer/enhance'
import Music from '../../Components/MusicExperience/music'

const Home = () => {
  return (
    <div>
      <Header />
      <Flash />
      <Category />
      <Music/>
      <Arrival />
      <FastAndFree />


    </div>
  )
}

export default Home
