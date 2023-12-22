import React from 'react'
import './founder.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';







function Founder() {
    return (<>
        <section id='FounderAbout'>
            <div className="FounderArea">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="FounderInBox">
                            <div className="ImageFounder">
                                <img src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1704067200&Signature=ZPnn85lInyajHK4XAJ-ipxqBhe4aG9XI1buM2cII6aTY64W69elIbTafffNbJZf-CurC6wfd0w0-j-cIj0SGBR55sKTG54GP6hBhrl3R0AKOXaY8NsdnIaQa-ax1GhIZLeqYMds46rknUU9Ljkh~u4eDMWDAggon0Yn1GXyocJ3w8QvAkvpqVRBnk9IAL7JwVE8Q8yE6ohlH9VbOyavaIJ9zl9bY1iIPptaeXLJoEK~Jf9CLejPWr1TtudLETol3w1mJaKj2vPN3l2k7HrSpP3YjCznkn124zcpuxdRQxAi972RZzrLXhyzLU0nRtkdSB337HfFlHNq1wRgJKHfOlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>

                            <h1>Tom Cruise</h1>
                            <p>Founder & Chairman</p><br />
                            <div className="IconFounder">
                                <FiTwitter />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="FounderInBox">
                            <div className="ImageFounder">
                                <img src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1704067200&Signature=E5MccMjv72XeK8ijLXaN5XI5tmcI~04ZhEL1EaAbck9HSms00ISO8~fr329CZfaydefkfbSvgeqln5pDBpWSLUHjGM6nIOofAwIjJDVDnuFOdUkhkyYepyYHg1oz~wcema0uSajOXKZmV0bIaLLMQjxqTDL3g4EzGnYbcy5jXll5~CV5MSRH09KC4o04qaoxARiEkrNl7GWgxA2SgVT1lF8ZXLoLAfqwip~7hzZGqG9w6j601J-VEP6ZtLv6wAn18gXSlbvhCTS2mNQ5GEfN3L86M0VsGh-haZ7hXF29ew6gEyxQypFOBf-YN~2W~C1q3YPlv0OrTyFRjS4u6BnLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>

                            <h1>Emma Watson</h1>
                            <p>Managing Director</p><br />
                            <div className="IconFounder">
                                <FiTwitter />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="FounderInBox">
                            <div className="ImageFounder">
                                <img src="../../../image/image 47.png" alt="" />
                            </div>

                            <h1>Will Smith</h1>
                            <p>Product Designer</p><br />
                            <div className="IconFounder">
                                <FiTwitter />
                                <FaInstagram />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="FounderInBox">
                            <div className="ImageFounder">
                                <img src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1704067200&Signature=ZPnn85lInyajHK4XAJ-ipxqBhe4aG9XI1buM2cII6aTY64W69elIbTafffNbJZf-CurC6wfd0w0-j-cIj0SGBR55sKTG54GP6hBhrl3R0AKOXaY8NsdnIaQa-ax1GhIZLeqYMds46rknUU9Ljkh~u4eDMWDAggon0Yn1GXyocJ3w8QvAkvpqVRBnk9IAL7JwVE8Q8yE6ohlH9VbOyavaIJ9zl9bY1iIPptaeXLJoEK~Jf9CLejPWr1TtudLETol3w1mJaKj2vPN3l2k7HrSpP3YjCznkn124zcpuxdRQxAi972RZzrLXhyzLU0nRtkdSB337HfFlHNq1wRgJKHfOlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <div className='content'>

                                <h1>Tom Cruise</h1>
                                <p>Founder & Chairman</p><br />
                                <div className="IconFounder">
                                    <FiTwitter className='FiTIcon' />
                                    <FaInstagram className='FiTIcon' />
                                    <FaLinkedinIn className='FiTIcon' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
    );
}
export default Founder