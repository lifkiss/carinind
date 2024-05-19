import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet-async';

function HomeFood() {
    useEffect(() => {
        const swiper = new Swiper(".mySwiper", {
          effect: "cards",
          grabCursor: true,
        });
        return () => {
          swiper.destroy();
        };
      }, []);
  return (
    <div className='body3'>
        <Helmet>
            <link rel='stylesheet' href='homefood2.css'/>
        </Helmet>
      <section id="kuliner">
      <div className='container-kuliner' data-aos="zoom-out" data-aos-delay="200">
        <div className='judulKuliner'>
        <h1 data-aos="fade-right" data-aos-delay="400" className='strip1'>---</h1>
        <h1 data-aos="fade-down" data-aos-delay="500" className='inti'>Kuliner </h1>
        <h1 data-aos="fade-left" data-aos-delay="400" className='strip2'>---</h1>
        </div>
        <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="foodAssets/Picture1.jpg" alt="" />
            </div>
            <div class="swiper-slide">
                <img src="foodAssets/Picture1.jpg" alt="" />
            </div>
            <div class="swiper-slide">
                <img src="foodAssets/Picture1.jpg" alt="" />
            </div>
            <div class="swiper-slide">
                <img src="foodAssets/Picture1.jpg" alt="" />
            </div>
        </div>
    </div>

      </div>
    </section>


    </div>
  )
}

export default HomeFood