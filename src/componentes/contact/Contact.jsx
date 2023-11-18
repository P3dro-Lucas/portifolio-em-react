import React from 'react'
import './contact.css'
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Me contate</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>emaililustrativo.com</h5>
            <a href="mailto:emaililustrativo.com" target='_blank'>Me mande uma mensagem</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Conta para contato</h5>
            <a href="https://m.me/" target='_blank'>Me mande uma mensagem</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789.com</h5>
            <a href="https://api.whatsapp.com/send?phone+123456789101" target='_blank'>Me mande uma mensagem</a>
          </article>
        </div>
        {/*Fim das opções de contato*/}
        <form action="">
          <input type="text" name='name' placeholder='Seu nome completo' required/>
          <input type="text" name="email" placeholder="Seu email" required/>
          <textarea name="messager" rows="7" placeholder="Sua mensagem" required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>
       
        </form>
      </div>
    </section>
  )
}

export default Contact