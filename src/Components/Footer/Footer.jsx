import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/1.png'

function Footer() {
  return (
    <div className='footer'>
      <hr className='z' />
      <div className='foot'>
      
          <img src={Github}></img>
       
        <img src={instagram}></img>
        <img src={linkedin}></img>
      </div>
      <div className='l'>
        <img className='logo' src={logo}></img>
      </div>
    </div>
  )
}

export default Footer
