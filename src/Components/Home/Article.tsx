"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../Shared/BlogCard";

const Article = () => {
  const [blogs, setBlogs] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get("http://localhost:3000/api/Blog/BestBlogs");
    if (data.data.status) {
      setBlogs(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div className="container mx-auto pb-20">
      <SectionTitle heading={"Popular News"} subHeading={"Great articles"} />
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <BlogCard blog={blog}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Article;
