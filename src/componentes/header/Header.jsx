import React from 'react'
import './header.css'
import CTA from './CTA'
import EU from '../../assets/Pedro-sem-fundo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
        <h5>Olá, eu sou</h5>
        <h1>Pedro Lucas.</h1>
        <h5 className="text-light">Atualmente, iniciando minha carreira como desenvolvedor front-end.</h5>
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