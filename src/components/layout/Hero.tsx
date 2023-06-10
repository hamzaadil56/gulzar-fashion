"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./hero.module.css";

// import required modules
import { Pagination } from "swiper";
import HeroContainer from "./HeroContainer";

export default function App() {
  return (
    <div className="flex-1  flex flex-wrap px-5 md:px-10 w-[100%]  max-w-7xl m-auto ">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  "
      >
        <SwiperSlide>
          <HeroContainer />
        </SwiperSlide>
        <SwiperSlide>
          <HeroContainer />
        </SwiperSlide>
        <SwiperSlide>
          <HeroContainer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
