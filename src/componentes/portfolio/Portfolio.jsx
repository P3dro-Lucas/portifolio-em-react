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
          <h3>Projeto "data-finance-yt", um site de finanças.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/P3dro-Lucas/data-finance-yt" className='btn' target='_blank'>Github</a>
            {/*<a href="" className='btn btn-primary' target='_blank'>Demonstração</a>*/}
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Projeto com regex Projeto-KIT.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/P3dro-Lucas/Projeto-KIT-" className='btn' target='_blank'>Github</a>
            {/*<a href="" className='btn btn-primary' target='_blank'>Demonstração</a>*/}
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>App-de-Clima com uma chave API para retornar o clima de qualquer lugar.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/P3dro-Lucas/App-de-Clima" className='btn' target='_blank'>Github</a>
            {/*<a href="" className='btn btn-primary' target='_blank'>Demonstração</a>*/}
            </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Criação do meu primeiro CRUD com vite.</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/P3dro-Lucas/CRUD-com-vite" className='btn' target='_blank'>Github</a>
            {/*<a href="" className='btn btn-primary' target='_blank'>Demonstração</a>*/}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
