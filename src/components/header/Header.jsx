import React from 'react'
import "./header.css"
import Cv from './Cv.jsx'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm </h5>
        <h1>Ghilai Levin</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cv />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div> 
    </header>
    
  )
}

export default Header