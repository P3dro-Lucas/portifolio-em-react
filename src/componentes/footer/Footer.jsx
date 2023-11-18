import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PH4$</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="About">About</a></li>
        <li><a href="Experience">Experience</a></li>
        <li><a href="Services">Services</a></li>
        <li><a href="Portfolio">Portfolio</a></li>
        <li><a href="Testimonials">Testimonials</a></li>
        <li><a href="COntact">COntact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FaXTwitter/></a>
      </div>


      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer