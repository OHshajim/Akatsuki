"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";

const RecentPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataLoad = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/Blog/RecentBlogs"
      );
      if (response.data.status) {
        setBlogs(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error loading blogs:", error);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);

  return (
    <div>
      {loading || (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-0"
        >
          <Image
            width={3000}
            height={1000}
            src="https://i.ibb.co.com/zf1bB9B/bg02.jpg"
            alt="bg02"
            className="w-full h-auto object-cover"
          />
          <div className="absolute z-10 top-0 w-full h-full">
            <div className="flex container mx-auto py-28 w-full h-full">
              <div className="mb-10 uppercase font-bold text-white w-full h-full">
                <p className="text-base px-2 py-1 mb-2 bebas-neue tracking-[1px] font-medium text-center">
                  stay-up-to-date
                </p>
                <h3 className="text-xl lg:text-3xl xl:text-5xl bebas-neue tracking-[2px] text-center">
                  Recent Posts
                </h3>
                <div className="flex w-full justify-evenly py-5 gap-10 flex-grow">
                  <Link href={`/blog/${blogs?.[0]._id}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="card rounded-none group"
                    >
                      <figure>
                        <Image
                          width={550}
                          height={600}
                          src={blogs[0].images.mainImage}
                          alt={blogs[0].title}
                          className="w-full transition-transform duration-300 group-hover:scale-110"
                        />
                      </figure>
                      <div className="flex-row items-center card-body py-2 px-1">
                        <div>
                          <h1 className="pr-2 text-2xl">
                            {blogs[0].date.split("-")[2]} <br />
                            {blogs[0].date.split("-")[1]}
                          </h1>
                        </div>
                        <div>
                          <h2 className="card-title group-hover:text-zinc-300 bebas-neue tracking-[2px]">
                            {blogs[0].title}
                          </h2>
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold text-zinc-400">
                              {blogs[0].date}
                            </h3>
                            <h3 className="font-semibold text-zinc-400 flex items-center gap-2">
                              <FaRegHeart /> {blogs[0].likes}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                  <div className="flex flex-col gap-5 w-1/2">
                    {blogs.slice(1, 4).map((blog) => (
                      <Link key={blog._id} href={`/blog/${blog._id}`}>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="flex flex-row my-2 card gap-5 rounded-none text-white group"
                        >
                          <figure>
                            <Image
                              width={300}
                              height={500}
                              src={blog.images.mainImage}
                              alt={blog.title}
                              className="transition-transform duration-300 group-hover:scale-110"
                            />
                          </figure>
                          <div className="card-body py-2 px-1">
                            <p className="font-medium bebas-neue tracking-[1px]">
                              Anime - Blog
                            </p>
                            <h2 className="card-title group-hover:text-zinc-300 bebas-neue tracking-[2px]">
                              {blog.title}
                            </h2>
                            <p className="text-sm font-normal tracking-[1px] text-wrap text-zinc-300">
                              {blog.intro}
                            </p>
                            <div className="flex items-center gap-4">
                              <h3 className="font-semibold text-zinc-300">
                                {blog.date}
                              </h3>
                              <h3 className="font-semibold text-zinc-300 flex items-center gap-2">
                                <FaRegHeart /> {blog.likes}
                              </h3>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RecentPost;
