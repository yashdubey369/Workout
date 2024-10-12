import React from 'react'
import './Header.css'
import Logo from '../../assets/1.png'
import { Link } from 'react-scroll'
import { useState } from 'react'




const Header = () => {
  // function scrollWin() {
  //   window.scrollTo(0, 1000);
  // }
  return (
    <div className='header'>
    <img src={Logo} alt='' className='logo'/>
    <ul className='headermenu'>
        <li onClick={()=>{window.scroll(0,10,) }} >Home</li>
        <li  onClick={()=>{window.scrollTo(0,650)}} >Programs</li>
         <li  onClick={()=>{window.scrollTo(0,1100)}} > Use</li>
         <li  onClick={()=>{window.scrollTo(0,1850)}} >Plans</li>
         <li  onClick={()=>{window.scrollTo(0,2550)}} >Testimonials</li>
    </ul>
    </div>
  )
}

export default Header
