"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [movie, setMovie] = useState(null);
  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3000/api/Movies/Movie/${params.id}`
    );
    if (data.data.status) {
      setMovie(data.data.data);
    }
  };
  console.log(movie);
  useEffect(() => {
    dataLoad();
  }, [params]);
  return (
    <div className="card lg:card-side p-10 bg-white text-black rounded-none gap-10 container mx-auto">
      {movie && (
        <>
          <figure>
            <Image
              width={400}
              height={400}
              src={movie?.imageUrl[0]}
              alt="Album"
              className="w-full "
            />
          </figure>

          <div className="card-body p-0 justify-center  lg:w-1/2">
            <div>
              <h2 className="card-title mb-4">{movie.title}</h2>
              <p>{movie.description}</p>
              <p className="mt-2 font-medium">Type: Anime</p>
              <p className="mt-2 font-medium">
                Tags:{" "}
                {movie?.genres?.map((tag) => (
                  <span key={tag}>{tag}, </span>
                ))}
              </p>
              <p className="mt-2 font-medium">Director: {movie.director}</p>
              <p className="mt-2 font-medium">Duration: {movie.duration} </p>
              <p className="mt-2 font-bold text-xl">
                Publisher: {movie.publisher}
              </p>
              <div className="card-actions justify-end">
                <button className="btn bg-yellow-600 text-white">
                  Add To Cart
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
