import React from 'react'
import './contact.css'
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xpqzect', 'template_a4743qm', form.current, '5iFzVrMDSmfzwpciV')

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Me contate</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pedrosonicsonic@gmail.com</h5>
            <a href="mailto:pedrosonicsonic@gmail.com" target='_blank'>Me mande uma mensagem</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Conta para contato</h5>
            <a href="https://www.facebook.com/profile.php?id=61555043800560" target='_blank'>Me mande uma mensagem</a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+55 11 91686-9787</h5>
            <a href="https://api.whatsapp.com/send?phone=5511916869787" target='_blank'>Me mande uma mensagem</a>
          </article>
        </div>
        {/*Fim das opções de contato*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required/>
          <input type="text" name="email" placeholder="Seu email" required/>
          <textarea name="message" rows="7" placeholder="Sua mensagem" required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensagem</button>

        </form>
      </div>
    </section>
  )
}

export default Contact