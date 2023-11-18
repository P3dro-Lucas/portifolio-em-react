import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='service'>
      <h5>Oque eu Ofereço</h5>
      <h2>Serviços</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
          </ul>
        </article>
        {/*Fim do UI/UX*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Desenvolvimento WEB</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
          </ul>
        </article>
        {/*FIM de Desenvolvimento WEB*/}
        <article className='service'>
          <div className='service__head'>
            <h3>Criação de conteudo</h3>
          </div>

          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>XXXXXXXXXXXXXXXXXXXXXX</p>
            </li>
          </ul>
        </article>
        {/*FIM de Criação de conteudo*/}
      </div>
    </section>
  )
}

export default Services