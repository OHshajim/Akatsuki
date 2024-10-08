"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { popular } from "../../../Public/Popular";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
const PopularMovie = () => {
  return (
    <div className="bg-[#000000f9]">
      <div className="container mx-auto py-20 ">
        <div className="mb-10 uppercase font-bold text-white">
          <p className="text-base  px-2 py-1 mb-2 bebas-neue tracking-[1px] font-medium">New collections</p>
          <h3 className="text-xl lg:text-3xl xl:text-5xl bebas-neue tracking-[2px]">Popular movies</h3>
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
                      Add to Wishlist
                    </button>
                  </div>
                </figure>
                <div className="card-body py-2 px-1">
                  <h2 className="card-title text-white bebas-neue tracking-[2px] font-medium">{popular.name}</h2>
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-zinc-400">
                      {popular.tags[1]} 
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
      <div className="flex overflow-hidden space-x-0 text-nowrap text-xl xl:text-2xl font-bold uppercase pb-5 text-[#E3962B]">
        <div className="flex animate-loop-scroll gap-2 ">
          <p className="bebas-neue"> / One Piece</p>
          <p className="bebas-neue"> / Naruto</p>
          <p className="bebas-neue"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="bebas-neue"> / Attack on Titan</p>
          <p className="bebas-neue"> / My Hero Academia</p>
          <p className="bebas-neue"> / Death Note</p>
          <p className="bebas-neue"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="bebas-neue"> / Sword Art Online</p>
          <p className="bebas-neue"> / Hunter x Hunter </p>
          <p className="bebas-neue"> / Tokyo Ghoul</p>
          <p className="bebas-neue"> / Jujutsu Kaisen</p>
          <p className="bebas-neue"> / Your Name</p>
          <p className="bebas-neue"> / Suzume</p>
          <p className="bebas-neue"> / One Punch Man</p>
          <p className="bebas-neue">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="bebas-neue"> / Fairy Tail</p>
          <p className="bebas-neue"> / Mob Psycho 100</p>
          <p className="bebas-neue"> / Code Geass</p>
          <p className="bebas-neue"> / Spirited Away</p>
          <p className="bebas-neue"> / Neon Genesis Evangelion</p>
        </div>
        <div className="flex animate-loop-scroll gap-2 " aria-hidden="true">
          <p className="bebas-neue"> / One Piece</p>
          <p className="bebas-neue"> / Naruto</p>
          <p className="bebas-neue"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="bebas-neue"> / Attack on Titan</p>
          <p className="bebas-neue"> / My Hero Academia</p>
          <p className="bebas-neue"> / Death Note</p>
          <p className="bebas-neue"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="bebas-neue"> / Sword Art Online</p>
          <p className="bebas-neue"> / Hunter x Hunter </p>
          <p className="bebas-neue"> / Tokyo Ghoul</p>
          <p className="bebas-neue"> / Jujutsu Kaisen</p>
          <p className="bebas-neue"> / Your Name</p>
          <p className="bebas-neue"> / Suzume</p>
          <p className="bebas-neue"> / One Punch Man</p>
          <p className="bebas-neue">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="bebas-neue"> / Fairy Tail</p>
          <p className="bebas-neue"> / Mob Psycho 100</p>
          <p className="bebas-neue"> / Code Geass</p>
          <p className="bebas-neue"> / Spirited Away</p>
          <p className="bebas-neue"> / Neon Genesis Evangelion</p>
        </div>
      </div>
    </div>
  );
};

export default PopularMovie;
