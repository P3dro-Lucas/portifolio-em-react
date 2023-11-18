import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imagem.jpg'/*Ao inves de usar varias imagens usarei somente uma*/ 

/*Com a utilização do metodo map*/

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meu trabalho mais recente</h5>
      <h2>Portifolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Este é o titulo de um item do portfolio.</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demonstração</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Este é o titulo de um item do portfolio.</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demonstração</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Este é o titulo de um item do portfolio.</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demonstração</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Este é o titulo de um item do portfolio.</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demonstração</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Este é o titulo de um item do portfolio.</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demonstração</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Este é o titulo de um item do portfolio.</h3>
          <div className="portfolio__item-cta">
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Demonstração</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
