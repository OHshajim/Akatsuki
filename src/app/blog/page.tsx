"use client";
import SectionBanner from "@/Shared/SectionBanner";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get("http://localhost:3000/api/Blog");
    console.log(data);
    if (data.data.status) {
      setBlogs(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Blog"} title={"Blog"} />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
          {blogs &&
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="card rounded-none text-black group"
              >
                <figure className="">
                  <Image
                    width={600}
                    height={800}
                    src={blog.images.mainImage}
                    alt="blog"
                    className="w-full group-hover:scale-110 delay-75 duration-300"
                  />
                </figure>
                <div className="card-body py-2 px-1">
                  <p className="font-bold">Anime</p>
                  <h2 className="card-title group-hover:text-zinc-500">
                    {blog.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-zinc-500 ">
                      {blog.date}
                    </h3>
                    <h3 className="font-semibold text-zinc-500 flex  items-center gap-2">
                      <FaRegHeart /> {blog.likes}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
