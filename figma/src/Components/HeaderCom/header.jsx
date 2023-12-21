import React from 'react'
import './header.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";





import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className='Header'>
                <div className="headerLeftBox">
                    <div className="fashionBox">
                        <ul className='fashionMain'>
                            <li > <Link>Woman’s Fashion</Link></li>
                            <li> <Link>Men’s Fashion</Link></li>
                            <li> <Link>Electronics</Link></li>
                            <li><Link>Home & Lifestyle</Link></li>
                            <li> <Link>Medicine</Link></li>
                            <li><Link>Sports & Outdoor</Link></li>
                            <li><Link>Baby’s & Toys</Link></li>
                            <li><Link>Groceries & Pets</Link></li>
                            <li><Link>Health & Beauty</Link></li>

                        </ul>
                    </div>

                </div>
                <div className="headerRightBox">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="IphoneBox">
                                <div className="IphoneLeft">
                                    <div className="iphoneTitleOne">
                                        <div className="IphoneIcon">
                                            <FaApple />
                                        </div>
                                        <div className="IphoneIconText">
                                            <p>iPhone 14 Series</p>
                                        </div>
                                    </div>
                                    <div className="IphoneTitleTwo">
                                        <h1>Up to 10% <br />off Voucher</h1><br />
                                        <div className="showRight">
                                            <a href="shopp">Shop Now</a>
                                            <FaArrowRightLong  className='right'/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="IphoneRight">
                                    <div className="IphoneImage">
                                        <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="IphoneBox">
                                <div className="IphoneLeft">
                                    <div className="iphoneTitleOne">
                                        <div className="IphoneIcon">
                                            <FaApple />
                                        </div>
                                        <div className="IphoneIconText">
                                            <p>iPhone 14 Series</p>
                                        </div>
                                    </div>
                                    <div className="IphoneTitleTwo">
                                        <h1>Up to 10% <br />off Voucher</h1><br />
                                        <div className="showRight">
                                            <a href="shopp">Shop Now</a>
                                            <FaArrowRightLong  className='right'/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="IphoneRight">
                                    <div className="IphoneImage">
                                        <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="IphoneBox">
                                <div className="IphoneLeft">
                                    <div className="iphoneTitleOne">
                                        <div className="IphoneIcon">
                                            <FaApple />
                                        </div>
                                        <div className="IphoneIconText">
                                            <p>iPhone 14 Series</p>
                                        </div>
                                    </div>
                                    <div className="IphoneTitleTwo">
                                        <h1>Up to 10% <br />off Voucher</h1><br />
                                        <div className="showRight">
                                            <a href="shopp">Shop Now</a>
                                            <FaArrowRightLong  className='right'/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="IphoneRight">
                                    <div className="IphoneImage">
                                        <img src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1704067200&Signature=j-S6TmJG~QkvJSJ7RWz-3~mXCzhGhzBj2MVYPab8NmZLlbZjFaTWVd4urH0Wb4l4tljEjxwz0PmrcoxjtFVk~5rhFvlgSe4HaLEBbRkbZ-WT96Rwcgd~dGj11WGpg28OBHmosCF0OqQ~3MSEcatEnvqY~J4INP7foz132pHVyBBVrXBxSgahZHS5Zr4XbJvALazkdXy8~Fh07KbCNrS9ERtsgChW8GVU99GC1dJfEG17Bc5za-0NDSm2gheUIRxph7TF5tvIb7bdYsdAxZCUDJOfXjoBU19MXNQ9WycEoqV3meIHD1-MruN6IIDR9ZA0RPtN5F3iQ3FIN7KX1Tcxhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Header
