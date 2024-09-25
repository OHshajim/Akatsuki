"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode} from "swiper/modules";
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
      >
        {popular.map(popular=><SwiperSlide key={popular.product_id}><Card item={popular}/></SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default RecentAnime;
