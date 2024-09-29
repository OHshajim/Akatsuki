"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { popular } from "../../../Public/Popular";
import Card from "@/Shared/Card";

const RecentAnime = () => {

  return (
    <div className="py-20 bg-zinc-200">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {popular.map((item) => (
          <SwiperSlide key={item.product_id}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
};

export default RecentAnime;
