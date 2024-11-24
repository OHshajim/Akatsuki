"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import SectionTitle from "@/Shared/SectionTitle";
import { useEffect, useState } from "react";
import BlogCard from "../Blog/BlogCard";
import Link from "next/link";
import { BestBlogs } from "@/Services/AllDataLoad/DataLoad";
import Loading from "../Loader/Loading";
import { BlogDataTypes } from "@/Services/PropsValidations/DataType";

const Article = () => {
  const [blogs, setBlogs] = useState<BlogDataTypes[]>([]);
  const dataLoad = async () => {
    const data = await BestBlogs();
    if (data.status) {
      setBlogs(data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
  if (blogs?.length < 1) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto pb-20">
      <SectionTitle heading={"Popular News"} subHeading={"Great articles"} />
      <div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
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
    </div>
  );
};

export default Article;
