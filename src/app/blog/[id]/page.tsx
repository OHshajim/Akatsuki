"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlogBanner from "../../../Components/Blog/BlogBanner";
import { HiHeart } from "react-icons/hi2";
import { BiHeart } from "react-icons/bi";

const SingleBlog = ({ params }) => {
  const [Blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3000/api/Blog/getSingleBlog/${params.id}`
    );
    if (data.data.status) {
      setLoading(false);
      setBlog(data.data.data);
    }
  };

  useEffect(() => {
    dataLoad();
  }, []);


  const handleLike = async () => {
    const data = await axios.patch(
      `http://localhost:3000/api/Blog/UpdateLike/${params.id}`
    );
    if (data.data.status) {
      setLiked(true);
      setBlog(data.data.data);
      dataLoad();
    }
  };

  const handleLikeRemove = async () => {
    const data = await axios.patch(
      `http://localhost:3000/api/Blog/UpdateLikeRemove/${params.id}`
    );
    if (data.data.status) {
      setLiked(false);
      setBlog(data.data.data);
      dataLoad();
    }
  };
  return (
    <div>
      <BlogBanner blog={Blog} />
      <div className=" p-10 bg-white text-black gap-10 container mx-auto">
        {loading || (
          <>
            <div className="">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{Blog.title}</h2>
                <h3 className="text-xl tracking-widest">{Blog?.intro}</h3>
                <p className="text-xl tracking-widest my-10">
                  {Blog?.explanation}
                </p>
                <div className="flex w-full gap-5 my-10">
                  {Blog?.images?.additionalImages.map((img) => (
                    <Image
                      key={img}
                      width={500}
                      height={500}
                      src={img}
                      alt="Images"
                      className="w-full "
                    />
                  ))}
                </div>
                <p className="text-xl tracking-widest my-10">
                  {Blog?.description}
                </p>
                <p className="text-xl tracking-widest my-10">
                  {Blog?.endingParagraph}
                </p>

                <p className="flex font-medium gap-4">
                  {Blog?.genres?.map((tag) => (
                    <span
                      className="border-2 bebas-neue px-3 py-1 hover:text-[#6fc9cd] hover:border-[#6fc9cd] delay-75 duration-200"
                      key={tag}
                    >
                      {tag}{" "}
                    </span>
                  ))}
                </p>
                <div>
                  <div className="flex justify-between my-5">
                    <h3 className="mt-2 font-bold text-xl">
                      Publisher: {Blog?.author}
                    </h3>
                    {liked === true ? (
                      <button
                        onClick={handleLikeRemove}
                        className="btn bg-[#6fc9cd] text-white hover:bg-slate-400"
                      >
                        <HiHeart />
                        {Blog?.likes}
                      </button>
                    ) : (
                      <button
                        onClick={handleLike}
                        className="btn bg-[#6fc9cd] text-white hover:bg-slate-400"
                      >
                        <BiHeart /> {Blog?.likes}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
