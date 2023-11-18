import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaYoutube} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.youtube.com/channel/UCjkGCo2GPVFcNxB8RJA8pig' target='_blank'><FaYoutube/></a>
        <a href='https://github.com/P3dro-Lucas' target='_blank'><BsGithub/></a>
        <a href='https://www.linkedin.com/in/pedro-lucas-b293b4271/' target='_blank'><BsLinkedin/></a>    
    </div>
  )
}

export default HeaderSocials