"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import Card from "@/Shared/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import QuickViewModal from "@/Shared/QuickViewModal";

const TopRatedAnime = () => {
  const [books, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const dataLoad = async () => {
    const data = await axios.get(
      "http://localhost:3000/api/Shop/TopRatedBooks"
    );
    if (data.data.data) {
      setBook(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div className="sm:py-20 py-16 bg-zinc-200">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {books.map((item) => (
          <SwiperSlide key={item._id}>
            <Card item={item} setViewItem={setSelectedBook} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Quick View Modal */}
      {selectedBook && <QuickViewModal item={selectedBook} />}
    </div>
  );
};

export default TopRatedAnime;
