import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function HomeFood() {
  return (
    <div className='body3'>
      <section id="kuliner">
      <div className='container-kuliner' data-aos="zoom-out" data-aos-delay="200">
        <div className='judulKuliner'>
        <h1 data-aos="fade-right" data-aos-delay="400" className='strip1'>---</h1>
        <h1 data-aos="fade-down" data-aos-delay="500" className='inti'>Kuliner </h1>
        <h1 data-aos="fade-left" data-aos-delay="400" className='strip2'>---</h1>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='/foodAsset/Picture1.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture2.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture3.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture4.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture5.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture6.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture7.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture8.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture9.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture10.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture11.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture12.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture13.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture14.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture15.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture16.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture17.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture18.png' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/foodAsset/Picture19.png' alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      </div>
    </section>


    </div>
  )
}

export default HomeFood