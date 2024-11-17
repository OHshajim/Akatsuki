"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";

const Page = ({ params }) => {
  const [movie, setMovie] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3000/api/Movies/Movie/${params.id}`
    );
    if (data.data.status) {
      setMovie(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, [params]);
  return (
    <div className="card lg:card-side p-10 bg-white text-black rounded-none gap-10 container mx-auto">
      {movie && (
        <>
          <figure className="flex flex-col lg:w-1/3 h-full">
            <Swiper
              loop={true}
              spaceBetween={10}
              modules={[FreeMode, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
            >
              {movie?.imageUrl.map((img) => (
                <SwiperSlide key={img}>
                  <Image
                    width={1000}
                    height={1000}
                    src={img}
                    alt="Album"
                    className="w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={30}
              slidesPerView={movie?.imageUrl?.length}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs]}
              className="mySwiper"
            >
              {movie?.imageUrl.map((img) => (
                <SwiperSlide key={img}>
                  <Image
                    width={400}
                    height={500}
                    src={img}
                    alt="Album"
                    className="mt-5"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </figure>

          <div className="card-body p-0 justify-center  lg:w-1/2">
            <div>
              <h2 className="card-title mb-4">{movie.title}</h2>
              <p className="tracking-widest my-8">{movie.description}</p>
              <p className="mt-2 font-medium">
                Type: <span className="text-zinc-500">Anime - Movie</span>
              </p>
              <p className="mt-2 font-medium">
                Tags:{" "}
                {movie?.genres?.map((tag) => (
                  <span className="text-zinc-500" key={tag}>
                    {tag},{" "}
                  </span>
                ))}
              </p>
              <p className="mt-2 font-medium">
                Director:{" "}
                <span className="text-zinc-500">{movie.director}</span>
              </p>
              <p className="mt-2 font-medium">
                Duration:{" "}
                <span className="text-zinc-500">{movie.duration} </span>
              </p>
              <p className="mt-2 font-medium">
                Publisher:{" "}
                <span className="text-zinc-500">{movie.publisher} </span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#6fc9cd] text-white hover:bg-slate-400">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
