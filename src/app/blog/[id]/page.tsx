"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlogBanner from "../../../Components/Blog/BlogBanner";
import { HiHeart } from "react-icons/hi2";
import { BiHeart } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { BlogData, LikeToggle } from "@/Services/AllDataLoad/DataLoad";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const SingleBlog = ({ params }) => {
  const { data: session } = useSession();
  const email = session?.user?.email ? session.user.email : null;
  const route = useRouter();
  const [Blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false);

  const dataLoad = async () => {
    const data = await BlogData(email, params.id);
    setLiked(data.isLiked);
    setBlog(data.data);
  };

  useEffect(() => {
    dataLoad();
  }, [params, session]);

  const handleLike = async () => {
    if (!session?.user) {
      Swal.fire({
        title: "Please Login !!!",
        text: "Are want to login Now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6fc9cd",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          route.push("/login");
        }
      });
      return null;
    }
    const res = await LikeToggle(session.user.email, params.id);
    if (res.status === 201) {
      setLiked(true);
      Blog.likes = Blog.likes + 1;
      Swal.fire({
        title: "Successfully Added",
        text: `${Blog?.title || "Successfully this Blog"} added 🥳🥳🥳!!!`,
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff ",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.ibb.co.com/JzXgd9F/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    } else if (res.status === 200) {
      setLiked(false);
      Blog.likes = Blog.likes - 1;
      Swal.fire({
        title: `Successfully Removed !!!`,
        text: `${Blog?.title || "Successfully this Blog"} was removed !!!`,
        icon: "success",
        confirmButtonColor: "#6fc9cd",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Something gone wrong!!! Please try again!",
        icon: "error",
      });
    }
  };

  if (!Blog) {
    return <p> Loading</p>;
  }
  return (
    <div>
      <BlogBanner blog={Blog} />
      <div className=" p-10 bg-white text-black gap-10 container mx-auto">
        <div className="">
          <div>
            <h2 className="text-3xl font-semibold mb-4 font-primary tracking-[2.5px]">
              {Blog.title}
            </h2>
            <h3 className="tracking-widest lg:text-lg sm:text-base text-sm">
              {Blog?.intro}
            </h3>
            <p className="tracking-widest my-10 lg:text-lg sm:text-base text-sm">
              {Blog?.explanation}
            </p>
            <div className="flex w-full gap-5 my-10">
              {Blog?.images?.additionalImages.map((img) => (
                <Image
                  key={img}
                  width={1000}
                  height={700}
                  src={img}
                  alt={Blog.title}
                  className="w-1/2"
                />
              ))}
            </div>
            <p className=" tracking-widest my-10 lg:text-lg sm:text-base text-sm">
              {Blog?.description}
            </p>
            <p className=" tracking-widest my-10 lg:text-lg sm:text-base text-sm">
              {Blog?.endingParagraph}
            </p>

            <p className="flex flex-wrap font-medium gap-4 lg:text-lg sm:text-base text-sm">
              {Blog?.genres?.map((tag) => (
                <span
                  className="border-2 font-primary sm:px-3 sm:py-1 p-1 hover:text-[#6fc9cd] hover:border-[#6fc9cd] delay-75 duration-200"
                  key={tag}
                >
                  {tag}{" "}
                </span>
              ))}
            </p>
            <div>
              <div className="flex justify-between my-5 sm:flex-row flex-col">
                <h3 className="mt-2 font-primary lg:text-xl sm:text-lg tracking-[2px]">
                  Publisher: {Blog?.author}
                </h3>
                <button
                  onClick={handleLike}
                  className="btn bg-[#6fc9cd] text-white hover:bg-slate-400 w-fit"
                >
                  {liked ? <HiHeart /> : <BiHeart />}
                  {Blog?.likes}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
