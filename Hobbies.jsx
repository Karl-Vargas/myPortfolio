import React from 'react'
import './Hobbies.css'
import basketballImg from '../../assets/basketballImg.jpg'
import videoEditingImg from '../../assets/videoEditingImg.jpg'
import coffeeImg from '../../assets/coffeeImg.jpg'
// SwipeJS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination'



const Hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>What Are My</h5>
      <h2>Hobbies</h2>

      <Swiper className="container hobbies__container"
            spaceBetween={40}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}>
          <SwiperSlide className='hobby'>
          <div className="hobby__img">
            <img src={coffeeImg} alt="basketbll image" />
            </div>
            <h5 className='hobby__name'>Specialty Coffee</h5>
            <small className='hobby__desc'>Over 4 years in the coffee industry</small>            
          </SwiperSlide>              
        <SwiperSlide className='hobby'>
          <div className="hobby__img">
            <img src={basketballImg} alt="basketball image" />
            </div>
            <h5 className='hobby__name'>Basketball</h5>
            <small className='hobby__desc'>Following what's going on the NBA league & Mostly playing 2K on my PS5</small>            
          </SwiperSlide>
          <SwiperSlide className='hobby'>
          <div className="hobby__img">
            <img src={videoEditingImg} alt="basketball image" />
            </div>
            <h5 className='hobby__name'>Video Editing</h5>
            <small className='hobby__desc'>Enjoying editing short videos of coffee</small>            
          </SwiperSlide>

        </Swiper>

      </section>
  )
}

export default Hobbies