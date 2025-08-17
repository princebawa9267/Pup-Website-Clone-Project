import React from 'react'
import {a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p} from "../Images/index"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../CSS/styles.css"
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Carousel = () => {
  const images = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p];

  return (
    <div className='Carousel'>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ 
          clickable: true, 
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{ height: 'auto' }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel;
