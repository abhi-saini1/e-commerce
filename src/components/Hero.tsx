"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-20">
      <div className="main-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000 }}
          speed={500}
          spaceBetween={10}
          slidesPerView={1}
          className="h-full w-full"
        >
          <SwiperSlide>
            <Image
              src="/banner1.jpg"
              className="w-full h-[550px] object-cover"
              width={1200}
              height={1200}
              alt="banner-1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/banner2.jpg"
              className="w-full h-[550px] object-cover"
              width={1200}
              height={1200}
              alt="banner-1"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
