
import React from 'react'
import './flash.scss'
import Enhance from '../EnhanceTimer/enhance'
const Flash = () => {
  return (
    <>
     <section id='FlashSales'>
      <div className='FlashLeft'>
      <div className="todayssText">
          <div className='normallBox'></div>
          <p>Today's</p>
        </div>
        <div className='salessTimer'>
          <h1>Flash Sales</h1>
        </div>
      </div>
      <div className='FlashRight'>
        <Enhance/>
      </div>
     </section>
    </>
  )
}

export default Flash
