"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import MovieCard from "../Movies/MovieCard";
import { PopularMovies } from "@/Services/AllDataLoad/DataLoad";
import Loading from "../Loader/Loading";
import { MovieDataTypes } from "@/Services/PropsValidations/DataType";

const PopularMovie = () => {
  const [movies, setMovies] = useState<MovieDataTypes[]>([]);

  const dataLoad = async () => {
    const data = await PopularMovies();
    if (data?.length > 0) {
      setMovies(data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);

  if (!movies || movies?.length < 1) {
    return <Loading />;
  }
  return (
    <div className="bg-[#000000f9]">
      <div className="container mx-auto py-20 text-white">
        <div className="mb-10 uppercase font-bold sm:px-0 px-5">
          <p className="text-base  px-2 py-1 mb-2 font-primary tracking-[1px] font-medium">
            New collections
          </p>
          <h3 className="text-xl lg:text-3xl xl:text-5xl font-primary tracking-[2px]">
            Popular movies
          </h3>
        </div>
        <Swiper
          slidesPerView={1.2}
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
          {movies.map((popular) => (
            <SwiperSlide key={popular._id}>
              <MovieCard movie={popular} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex overflow-hidden space-x-0 text-nowrap text-xl xl:text-2xl font-bold uppercase pb-5 text-[#E3962B]">
        <div className="flex animate-loop-scroll gap-2 ">
          <p className="font-primary"> / One Piece</p>
          <p className="font-primary"> / Naruto</p>
          <p className="font-primary"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="font-primary"> / Attack on Titan</p>
          <p className="font-primary"> / My Hero Academia</p>
          <p className="font-primary"> / Death Note</p>
          <p className="font-primary"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="font-primary"> / Sword Art Online</p>
          <p className="font-primary"> / Hunter x Hunter </p>
          <p className="font-primary"> / Tokyo Ghoul</p>
          <p className="font-primary"> / Jujutsu Kaisen</p>
          <p className="font-primary"> / Your Name</p>
          <p className="font-primary"> / Suzume</p>
          <p className="font-primary"> / One Punch Man</p>
          <p className="font-primary">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="font-primary"> / Fairy Tail</p>
          <p className="font-primary"> / Mob Psycho 100</p>
          <p className="font-primary"> / Code Geass</p>
          <p className="font-primary"> / Spirited Away</p>
          <p className="font-primary"> / Neon Genesis Evangelion</p>
        </div>
        <div className="flex animate-loop-scroll gap-2 " aria-hidden="true">
          <p className="font-primary"> / One Piece</p>
          <p className="font-primary"> / Naruto</p>
          <p className="font-primary"> / Demon Slayer: Kimetsu no Yaiba</p>
          <p className="font-primary"> / Attack on Titan</p>
          <p className="font-primary"> / My Hero Academia</p>
          <p className="font-primary"> / Death Note</p>
          <p className="font-primary"> / Fullmetal Alchemist: Brotherhood</p>
          <p className="font-primary"> / Sword Art Online</p>
          <p className="font-primary"> / Hunter x Hunter </p>
          <p className="font-primary"> / Tokyo Ghoul</p>
          <p className="font-primary"> / Jujutsu Kaisen</p>
          <p className="font-primary"> / Your Name</p>
          <p className="font-primary"> / Suzume</p>
          <p className="font-primary"> / One Punch Man</p>
          <p className="font-primary">
            / Re:Zero - Starting Life in Another World
          </p>
          <p className="font-primary"> / Fairy Tail</p>
          <p className="font-primary"> / Mob Psycho 100</p>
          <p className="font-primary"> / Code Geass</p>
          <p className="font-primary"> / Spirited Away</p>
          <p className="font-primary"> / Neon Genesis Evangelion</p>
        </div>
      </div>
    </div>
  );
};

export default PopularMovie;
