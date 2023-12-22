import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './index.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const TodaysFetch = () => {
  const [products, setProducts] = useState([])
  const [loadind, setLoadind] = useState(true)
  async function getProducts() {
    const data = await fetch("http://localhost:3000/products")
    const res = await data.json()
    setProducts(res)
    setLoadind(false)
  }
  useEffect(() => {
    getProducts()
  }, [])


  return (
    <>
      <div className="browseCategoryUpBox">
        <div className="todaysText">
          <div className='normalBox'></div>
          <p>This Month</p>
        </div>
        <div className="browseView">
          <div className='salesTimer'>
            <h1>Best Selling Products</h1>
          </div>
          <div className="viewAll">
            <button>View All</button>
          </div>
        </div>
      </div>
      {loadind ? (
        <p>Loading...</p>
      ) : (

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

          {products.map((product, index) => (
            <SwiperSlide >
              <Card key={index} id={product.id} image={product.image} name={product.name} price={product.price} noprice={product.noprice} raiting={product.raiting} />
            </SwiperSlide>

          ))}



        </Swiper>

      )}

    </>

  )
}

export default TodaysFetch