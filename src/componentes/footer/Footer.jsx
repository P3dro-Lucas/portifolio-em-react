import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Pedro L.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre-mim</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#service">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacte-me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=61555043800560" target='_blank'><FaFacebook/></a>
        <a href="https://www.instagram.com/ph4zzmount/" target='_blank'><FaInstagram/></a>
        <a href="https://twitter.com" target='_blank'><FaXTwitter/></a>
      </div>


      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer