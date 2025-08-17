import React from 'react'
import {a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p} from "../Images/index"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../CSS/styles.css"

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Carousel = () => {
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
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={a} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={b} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={c} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={d} alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={e} alt="Slide 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={f} alt="Slide 6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={g} alt="Slide 7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={h} alt="Slide 8" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={i} alt="Slide 9" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={j} alt="Slide 10" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={k} alt="Slide 11" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={l} alt="Slide 12" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={m} alt="Slide 13" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={n} alt="Slide 14" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={o} alt="Slide 15" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={p} alt="Slide 16" />
      </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
