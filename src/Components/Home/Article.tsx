"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode ,Autoplay} from "swiper/modules";
import "swiper/css";
import SectionTitle from "@/Shared/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../Blog/BlogCard";
import Link from "next/link";

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
      {blogs.length < 1 ? (
        "loading"
      ) : (
        <div>
          <Swiper
            slidesPerView={1.5}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog._id}>
                <Link href={`/blog/${blog._id}`}>
                  <BlogCard blog={blog} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Article;
