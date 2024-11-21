import Image from "next/image";
import React from "react";

const BlogBanner = ({ blog }) => {
  return (
    <div>
      <div className="relative z-0">
        <Image
          width={2000}
          height={1000}
          src={blog?.images?.cover}
          alt={`${blog?.title} cover photo`}
          className="w-full lg:h-[90vh] fixe"
        />
        <div className="absolute z-10 top-0 w-full h-full bg-black/50 ">
          <div className="flex justify-center items-center w-full h-full">
            <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center ">
              <h3 className="text-white lg:text-xl text-center font-primary tracking-[2.5px]">
                Blog Details
              </h3>
              <h1 className=" md:text-xl lg:text-4xl xl:text-6xl text-white font-bold lg:my-5 font-primary tracking-wider lg:tracking-[5px]">
                {blog?.title}
              </h1>
              <h3 className=" text-zinc-200 font-bold lg:text-xl text-sm text-center tracking-wider">
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
