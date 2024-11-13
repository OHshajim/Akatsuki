"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { LiaKeySolid } from "react-icons/lia";
import BlogBanner from "../../../Components/Blog/BlogBanner";

const SingleBlog = ({ params }) => {
  const [Blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3000/api/Blog/getSingleBlog/${params.id}`
    );
    if (data.data.status) {
      setLoading(false);
      setBlog(data.data.data);
    }
  };
  console.log(Blog);
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div>
      <BlogBanner blog={Blog} />
      <div className="card lg:card-side p-10 bg-white text-black rounded-none gap-10 container mx-auto">
        {loading || (
          <>
            {/* <figure>
              <Image
                width={400}
                height={400}
                src={Blog?.images.mainImage}
                alt="Album"
                className="w-full "
              />
            </figure> */}

            <div className="card-body p-0 justify-center  lg:w-1/2 ">
              <div>
                <h2 className="card-title mb-4">{Blog?.title}</h2>
                <p className="">{Blog?.intro}</p>
                <p className="mt-2 font-medium">Type: Anime</p>
                <p className="mt-2 font-medium">
                  Tags:{" "}
                  {Blog?.genres?.map((tag) => (
                    <span key={tag}>{tag}, </span>
                  ))}
                </p>
                {/* <p className="mt-2 font-medium">Director: {Blog.director}</p>
              <p className="mt-2 font-medium">Duration: {Blog.duration} </p> */}
                <p className="mt-2 font-bold text-xl">
                  Publisher: {Blog?.author}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-yellow-600 text-white">
                    <LiaKeySolid />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
