"use client";
import SectionBanner from "@/Shared/SectionBanner";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [movies, setMovies] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get("http://localhost:3000/api/Movies");
    console.log(data);
    if (data.data.status) {
      setMovies(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Movies"} title={"Movies"} />
        {movies ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
            {movies.map((movie) => (
              <div key={movie.title} className="card rounded-none text-black">
                <Link href={`movies/${movie._id}`} className="w-full">
                  <figure className=" relative group">
                    <Image
                      width={600}
                      height={800}
                      src={movie?.imageUrl[0]}
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
                </Link>
                <Link href={`movies/${movie._id}`} className="w-full">
                  <div className="card-body py-2 px-1">
                    <h2 className="card-title text-black bebas-neue tracking-[2px] font-medium">
                      {movie.title}
                    </h2>
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-zinc-400">
                        {movie.category}
                      </h3>
                      <Rating
                        style={{ maxWidth: 110, color: "#fff" }}
                        value={movie.rating}
                        halfFillMode
                        readOnly
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Page;
