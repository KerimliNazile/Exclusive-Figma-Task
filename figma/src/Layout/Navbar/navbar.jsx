import React from 'react';
import { CiHeart, CiSearch } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="navbarLeft">
                        <div className="exclusive">
                            <h1>Exclusive</h1>
                        </div>
                        <div className="MainNavbar">
                            <ul className='navbarBox'>
                                <li><NavLink activeClassName='active' to={"/"}>Home</NavLink></li>
                                <li><NavLink activeClassName='active' to={"/about"}>About</NavLink></li>
                                <li><NavLink activeClassName='active' to={"/contact"}>Contact</NavLink></li>
                                <li><NavLink activeClassName='active' to={"/signup"}>SignUp</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbarRight">
                        <div className="search">
                            
                            <input className='input'  type="text" placeholder='What are you looking for?' />
                            <div className="searchCI">
                                <CiSearch  />
                            </div>
                            
                        </div>

                        <div className="icons">
                        <CiHeart />
                        <RiShoppingCart2Line />
                        
                        </div>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
