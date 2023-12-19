import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";

import './fast.scss'
const FastAndFree = () => {
  return (
    <>
      <section id='FastandFree'>
        <div className='FastFree'>
          <div className='deliveryBox'>
            <div className="deliverygreyIcon">
              <div className='deliveryIcon'>
                <TbTruckDelivery className='TbTruck'/>
              </div>
            </div><br />
            <h3>FREE AND FAST DELIVERY</h3><br />
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className='deliveryBox'>
            <div className="deliverygreyIcon">
              <div className='deliveryIcon'>
                <RiCustomerService2Fill className='TbTruck' />
              </div>
            </div><br />
            <h3>24/7 CUSTOMER SERVICE</h3><br />
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className='deliveryBox'>
            <div className="deliverygreyIcon">
              <div className='deliveryIcon'>
                <RiSecurePaymentLine className='TbTruck' />
              </div>
            </div><br />
            <h3>MONEY BACK GUARANTEE</h3><br />
            <p>We reurn money within 30 days</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default FastAndFree