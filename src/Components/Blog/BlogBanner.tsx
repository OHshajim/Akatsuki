import Image from "next/image";
import React from "react";

const BlogBanner = ({ blog }) => {
  return (
    <div>
      <div className="relative z-0">
        <Image
          width={600}
          height={500}
          src={blog?.images.cover}
          alt={`${blog?.title} cover photo`}
          className="w-full h-[90vh] fixe"
          priority />
        <div className="absolute z-10 top-0 w-full h-full bg-black/50 ">
          <div className="flex justify-center items-center w-full h-full">
            <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center ">
              <p className="text-zinc-300 lg:text-sm md:text-xs text-[5px] text-center">
                Blog Details
              </p>
              <h3 className="text-sm md:text-xl lg:text-3xl xl:text-5xl text-white font-bold lg:my-5 bebas-neue">
                {blog?.title}
              </h3>
              <p className=" text-zinc-300 lg:text-sm md:text-xs text-[5px] text-center">
                {blog?.author} • {blog?.date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
