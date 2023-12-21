import React, { useEffect, useState } from 'react'
import Card from '../Card'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OurProducts = () => {
    const [products, setProducts] = useState([])
    const [loadind, setLoadind] = useState(true)
    async function getProducts() {
        const data = await fetch("http://localhost:3000/explore")
        const res = await data.json()
        setProducts(res)
        setLoadind(false)
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>

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
                            <Card id={product.id} image={product.image} name={product.name} price={product.price} noprice={product.noprice} rating={product.raiting} />
                        </SwiperSlide>

                    ))}

                    <div className='BtnMonth'>
                        <button className='btnn'>View All Products</button>
                    </div>

                </Swiper>

            )}

        </>

    )
}

export default OurProducts