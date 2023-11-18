import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/foto de perfil.JPG'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* A mesma coisa feitacom um array pode ser feita aqui para guardar dados dos usuarios em seus feedbacks */
/* E ja que eu não deixe no arquivo do portfolio como feito no curso, eu farei aqui */

const dados = [
{
  avatar: AVT1,
  nome: 'Cleiton Rasta',
  review: 'Muito bom, entregou como solicitado e funciona melhor da forma que eu gostaria',
},
{
  avatar: AVT1,
  nome: 'Mirian',
  review: 'Aqui usuarios conta a experiencia que tiveram com o trabalho solicitado, dizendo se gostaram, oque poderia ter feito melhor ou coisas do tipo',
},
{
  avatar: AVT1,
  nome: 'Dalva',
  review: 'Aqui usuarios conta a experiencia que tiveram com o trabalho solicitado, dizendo se gostaram, oque poderia ter feito melhor ou coisas do tipo',
},
{
  avatar: AVT1,
  nome: 'Robert',
  review: 'Aqui usuarios conta a experiencia que tiveram com o trabalho solicitado, dizendo se gostaram, oque poderia ter feito melhor ou coisas do tipo',
},
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review de clientes</h5>
      <h2>Depoimentos</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          dados.map(({avatar, nome, review, index}) => {
          return (
            <SwiperSlide key={index} className="testimonials">
            <div className="client__avatar">
              <img src={avatar}/>
              </div>
              <h5 className='client__name'>{nome}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide> 
          )
        })
}       
      </Swiper>
    </section>
  )
}

export default Testimonials