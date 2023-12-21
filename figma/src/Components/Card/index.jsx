import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

import "./index.scss"
import { Link } from 'react-router-dom';

const generateStars = (raiting) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FaStar
        key={i}
        color={i <= raiting ? 'orange' : 'grey'}
        style={{ marginRight: '2px' }}
      />
    );
  }
  return stars;
};
const Card = ({ id, image, name, price, noprice, raiting }) => {
  const discountedPrice = price - (price * noprice) / 100;
  console.log(id);
  return (

    <div>
      <div className='card0'>
        <div className='CardIcon'>
          <div ><FaHeart /></div>
          <div ><Link to={`/details/` + id}> <FaRegEye className='regeye'/> </Link></div>
        </div>
        <div className='add'><Link>Add To Cart</Link>
        </div>
        <div className='card-comp'>
          <div className='image'>
            <img src={image} alt="" />
          </div>
        </div>

        <div className="content">
          <h2>{name}</h2>
          <span className='price'>${discountedPrice.toFixed(2)} </span>
          <span className='discount'> <del>${price}</del></span>
          <div className="raiting">
            {generateStars(raiting)}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Card