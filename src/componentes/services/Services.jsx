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
              <p>Design de Interfaces.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Experiência do Usuário.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Usabilidade de Testes.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Design Responsivo.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Design de Interações.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Consistência Visual.</p>
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
              <p>Desenvolvimento Front-End.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Desenvolvimento de Aplicações Web.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Integração de APIs.</p>
            </li>
          </ul>
        </article>
        {/*FIM de Desenvolvimento WEB*/}
        
        {/*FIM de Criação de conteudo*/}
      </div>
    </section>
  )
}

export default Services