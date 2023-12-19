import React from 'react'
import './arrival.scss'
const Arrival = () => {
    return (
        <>
        <div className='FeaturedText'>
            <div className='featured'>
        <div></div>
            <h4>Featured</h4>
            </div>
        </div><br />
        <div className='NewArrivalText'>
            <h1>New Arrival </h1>
        </div>
            <div className='NewArrivalArea'>
                <div className='NewArrivalBox1'>
                    <img src="../../../image/ps5-slim-goedkope-playstation_large 1.png" alt="" />
                    <div className='ArrivalText'>
                        <h2>PlayStation 5</h2><br />
                        <p>Black and White version of the PS5 <br />
                            coming out on sale.</p><br />
                        <a href="shop">Shop Now</a>
                    </div>
                </div>
                <div className="NewArrivalBox2">
                    <div className='NewArrivalBox2-one'>
                        <img src="../../../image/attractive-woman-wearing-hat-posing-black-background 1.png" alt="" />
                        <div className='ArrivalText2'>
                            <h2>Women’s Collections</h2><br />
                            <p>Featured woman collections that <br /> give you another vibe.</p><br />
                            <a href="shop">Shop Now</a>
                        </div>
                    </div>
                    <div className='NewArrivalBox3-main'>
                        <div className='NewArrivalBox3-three'>
                            <img src="../../../image/Frame 707.png" alt="" />
                            <div className='ArrivalText3'>
                                <h2>Speakers</h2>
                                <p>Amazon wireless speakers</p><br />
                                <a href="shop">Shop Now</a>
                            </div>
                        </div>
                        <div className='NewArrivalBox3-three'>
                            <img src="../../../image/Frame 706.png" alt="" />
                            <div className='ArrivalText3'>
                                <h2>Perfume</h2>
                                <p> GUCCI INTENSE OUD EDP  </p><br />
                                  
                                <a href="shop">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Arrival
