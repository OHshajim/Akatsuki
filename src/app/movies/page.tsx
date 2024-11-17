"use client";
import SectionBanner from "@/Shared/SectionBanner";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/Components/Movies/MovieCard";

const Page = () => {
  const [movies, setMovies] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get("http://localhost:3000/api/Movies");
    // console.log(data);
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
        {movies && (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
            {movies.map((movie) => (
              <MovieCard
                key={movie._id}
                movie={movie}
                textColor={"text-black"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
