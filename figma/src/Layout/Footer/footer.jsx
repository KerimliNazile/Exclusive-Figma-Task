import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
import './footer.scss'
const Footer = () => {
  return (
    <>
      <div className='Footer'>
        <div className="footerbox1">
          <h3>Exclusive</h3><br />
          <h3>Subscribe</h3><br />
          <p>Get 10% off your first older</p><br />
          <div className='emailEnter'>
            <input className='input' type="text" placeholder='Enter your email'
            />
            <div className='iconAiOut'>
              <AiOutlineSend />
            </div>
          </div>
        </div>
        <div className='footerbox2'>

          <h3>Support</h3><br />
          <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p><br />
          <p>exclusive@gmail.com</p><br />
          <p>+88015-88888-9999</p><br />
        </div>
        <div className='footerbox2'>

          <h3>Account</h3><br />
          <p>My account</p><br />
          <p>Login / Register</p><br />
          <p>Cart</p><br />
          <p>Wishlist</p><br />
          <p>Shop</p><br />
        </div>
        <div className='footerbox2'>

          <h3>Quick Link</h3><br />
          <p>Privacy Policy</p><br />
          <p>Terms Of Use</p><br />
          <p>FAQ</p><br />
          <p>Contact</p>
        </div>
        <div className='footerbox3'>

          <h3>Download App</h3><br />
          <p>Save $3 with App New User Only</p><br />


        </div>


      </div>
      <div className='Rimelbox'>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </>
  )
}

export default Footer
