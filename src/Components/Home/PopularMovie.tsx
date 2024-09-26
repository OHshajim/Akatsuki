"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { popular } from "../../../Public/Popular";
import Card from "@/Shared/Card";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
const PopularMovie = () => {
  return (
    <div className="bg-[#000000f9]">
      <div className="container mx-auto py-20 ">
        <div className="mb-10 uppercase font-bold text-white">
          <p className="text-base  px-2 py-1 mb-2">New collections</p>
          <h3 className="text-xl lg:text-3xl xl:text-5xl">Popular movies</h3>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {popular.map((popular) => (
            <SwiperSlide key={popular.product_id}>
              <div className="card rounded-none text-black">
                <figure className=" relative group">
                  <Image
                    width={600}
                    height={800}
                    src={popular.image}
                    alt="Shoes"
                    className="w-full group"
                  />
                  <div className="absolute bottom-0 w-full group-hover:flex hidden bg-black group-hover:duration-200 group-hover:delay-100">
                    <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
                      Quick View
                    </button>
                    <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
                      Add to Card
                    </button>
                  </div>
                </figure>
                <div className="card-body py-2 px-1">
                  <h2 className="card-title text-white">{popular.name}</h2>
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-zinc-400">
                      {popular.price} $
                    </h3>
                    <Rating
                      style={{ maxWidth: 110, color: "#fff" }}
                      value={popular.rating}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularMovie;
