import React from 'react'
import CV from '../../assets/Currículo.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn' >Download do Curriculo</a>
        <a href="#contact" className='btn btn-primary'>Me mande uma mensagem</a>
    </div>
    )
}

export default CTA