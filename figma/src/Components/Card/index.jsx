import React from 'react'

const Card = ({image,title,price,discount,raiting}) => {
  return (
    <div >
      <img src={image} alt="" />
      <h2>{title}</h2>
      <span>{price}</span>
      <span>{discount}</span>
      <div className="raiting">{raiting}</div>
    </div>
  )
}

export default Card
