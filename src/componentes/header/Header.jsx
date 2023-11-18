import React from 'react'
import './header.css'
import CTA from './CTA'
import EU from '../../assets/Eu.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Ola, Eu sou</h5>
        <h1> Pedro Lucas</h1>
        <h5 className="text-light">Iniciante em Front-End</h5>
        <CTA />
        <HeaderSocials />

        <div className='eu'>
          <img src={EU} alt='eu'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
    )
}

export default Header