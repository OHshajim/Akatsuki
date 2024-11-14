"use client";
import BlogCard from "@/Shared/BlogCard";
import SectionBanner from "@/Shared/SectionBanner";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get("http://localhost:3000/api/Blog");
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
              <Link key={blog._id} href={`/blog/${blog._id}`}>
                <BlogCard blog={blog} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
