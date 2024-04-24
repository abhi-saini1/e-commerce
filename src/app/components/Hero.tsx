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
    <section className="mt-2">
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
              width={1000}
              height={1000}
              alt="banner-1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/banner2.jpg"
              className="w-full h-[550px] object-cover"
              width={1000}
              height={1000}
              alt="banner-1"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
