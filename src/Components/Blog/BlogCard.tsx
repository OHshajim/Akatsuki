"use client";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { BlogDataTypes } from "@/Services/PropsValidations/DataType";

const BlogCard = ({ blog }: { blog: BlogDataTypes }) => {
  return (
    <motion.div
      className="card rounded-none"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <figure className="relative group">
        <motion.div
          className="w-full h-full"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
        >
          <Image
            width={1000}
            height={1400}
            src={blog.images.mainImage}
            alt="blog"
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out"
          />
        </motion.div>
      </figure>

      {/* Content Section (Text) */}
      <div className="card-body py-2 px-1 bg-white">
        <p className="font-medium text-gray-600 tracking-wide">Anime</p>

        {/* Title */}
        <h2 className="card-title text-black font-primary sm:text-lg tracking-widest font-medium">
          {blog.title}
        </h2>

        {/* Date and Likes Section */}
        <div className="flex justify-between items-center gap-4 mt-1">
          <h3 className="text-sm text-gray-500">{blog.date}</h3>
          <div className="flex items-center gap-2 text-gray-500">
            <FaRegHeart />
            <span>{blog.likes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
