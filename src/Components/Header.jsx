import React from 'react'
import logo from "../assets/images/logo.png"
import {NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="headerCont">
            <div className="navLogo">
                <img src={logo} alt="" width={"90%"} height={"70%"}/>
            </div>
            <div className="navBars">
                <div className='navitem'>
                    <NavLink to={"/"} className='links'>HOME</NavLink>
                    <NavLink to={"/Product"} className='links'>PRODUCTS</NavLink>
                    <NavLink to={"/Contact"} className='links'>CONTACT US</NavLink>
                </div>
            </div>
            <div className="signInDiv">
                <div className="signInBtn">
                    Sign In
                </div>
            </div>
        </div>
    </>
  )
}

export default Header