import Image from "next/image";
import React from "react";

const BlogBanner = ({ blog }) => {
  return (
    <div>
      <div className="relative z-0">
        <Image
          width={600}
          height={500}
          src={blog?.images?.cover}
          alt={`${blog?.title} cover photo`}
          className="w-full h-[90vh] fixe"
        />
        <div className="absolute z-10 top-0 w-full h-full bg-black/50 ">
          <div className="flex justify-center items-center w-full h-full">
            <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center ">
              <h3 className="text-zinc-200 font-semibold lg:text-xl text-center">
                Blog Details
              </h3>
              <h1 className="text-sm md:text-xl lg:text-4xl xl:text-6xl text-white font-bold lg:my-5 bebas-neue">
                {blog?.title}
              </h1>
              <h3 className=" text-zinc-200 font-bold lg:text-xl text-center">
                {blog?.author} • {blog?.date}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
