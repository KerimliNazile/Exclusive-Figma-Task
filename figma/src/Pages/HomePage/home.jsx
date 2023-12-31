import React from 'react'
import Header from '../../Components/HeaderCom/header'
import Flash from '../../Components/FlashSales/flash'
import FastAndFree from '../../Components/FreeAndFastCustomer/fast'
import Arrival from '../../Components/NewArrival/arrival'
import Category from '../../Components/BrowseByCategory/category'
import Enhance from '../../Components/EnhanceTimer/enhance'
import Music from '../../Components/MusicExperience/music'
import TodaysFetch from '../../Components/Todays'
import MonthFetch from '../../Components/Month'
import OurProducts from '../../Components/OurProducts'
import OurProductsTwo from '../../Components/OurProductsTwo'


const Home = () => {
  return (
    <div>
      <Header />
      
      <Flash />
      <MonthFetch/>
     
      <Category /> 
      <TodaysFetch/>
      <Music/>
      <OurProducts/>
      <OurProductsTwo/>
      <Arrival />
      <FastAndFree />
    

    </div>
  )
}

export default Home
