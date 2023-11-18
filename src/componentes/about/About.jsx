import React from 'react'
import './about.css'
import EU from '../../assets/Eu-sobre.png'
import {SlBadge} from 'react-icons/sl'
import {FaUsers} from 'react-icons/fa'
import {AiFillFolder} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Minhas informações</h5>
      <h2>Sobre Mim</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={EU} alt='Imagem Sobre' />
          </div>
        </div>


          <div className='about__content'>
            <div className="about__cards">
              <article className='about__card'>
                <SlBadge className='about__icon' />
                <h5>Experiencia</h5>
                <small>Criação de projetos praticos.</small>
              </article>

              <article className='about__card'>
                <FaUsers className='about__icon' />
                <h5>Clientes</h5>
                <small>Numero de clientes aqui.</small>
              </article>

              <article className='about__card'>
                <AiFillFolder className='about__icon' />
                <h5>Projetos</h5>
                <small>Mais de xxx projetos.</small>
              </article>
            </div>

            <p>
              Texto generico  grande com um resumo meu, e sobre oque faço.
              Texto generico  grande com um resumo meu, e sobre oque faço.
              Texto generico  grande com um resumo meu, e sobre oque faço.
              Texto generico  grande com um resumo meu, e sobre oque faço.
            </p>

            <a href="#contact" className='btn btn-primary'>Vamos conversar</a>  
          </div>
      </div>
    </section>
  )
}

export default about