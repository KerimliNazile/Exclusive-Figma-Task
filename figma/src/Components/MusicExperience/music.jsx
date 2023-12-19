import React from 'react'
import './music.scss'
import Enhance from '../EnhanceTimer/enhance'
const Music = () => {
    return (
        <>
            <section id='MusicExperience'>
                <div className="MusicImageBox">
                    <div className="MusicLeft">
                        <div className='MusicText'>
                            <h5>Categories</h5><br />
                            <h2>Enhance Your <br /> Music Experience</h2><br />
                            <Enhance /><br />
                            <button className='Btn'>Buy Now!</button>
                        </div>
                    </div>
                    <div className="MusicRight">
                        <img src="../../../image/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Music
