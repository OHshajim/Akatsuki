"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import Card from "@/Shared/Card";
import { useEffect, useState } from "react";
import QuickViewModal from "@/Shared/QuickViewModal";
import { AllBTopRatedBooks } from "@/Services/AllDataLoad/DataLoad";
import Loading from "../Loader/Loading";
import { ShopData } from "@/Services/PropsValidations/DataType";

const TopRatedAnime = () => {
  const [books, setBook] = useState<ShopData[]>([]);

  const [selectedBook, setSelectedBook] = useState<ShopData | null>(null);
  useEffect(() => {
    const dataLoad = async () => {
      const data = await AllBTopRatedBooks();
      if (data.status === 200) {
        setBook(data.data);
      }
    };

    dataLoad();
  }, []);

  if (books.length < 1 || !books) {
    return <Loading />;
  }
  return (
    <div className="sm:py-20 py-16 bg-zinc-200">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        freeMode={true}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
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
      {selectedBook && (
        <QuickViewModal
          item={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default TopRatedAnime;
