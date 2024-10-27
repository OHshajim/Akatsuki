"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import Card from "@/Shared/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const TopRatedAnime = () => {
  const [books, setBook] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get("http://localhost:3000/api/Shop/TopRatedBooks");
    console.log(data);
    if (data.data.status) {
      setBook(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
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
        {books.map((item) => (
          <SwiperSlide key={item._id}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedAnime;
