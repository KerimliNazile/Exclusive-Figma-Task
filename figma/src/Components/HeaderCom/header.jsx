import React from 'react'
import './header.scss'
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
                    <div className='ayfonimeyg'>
                        <img src="../../../image/Frame 560.png" alt="" />
                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
