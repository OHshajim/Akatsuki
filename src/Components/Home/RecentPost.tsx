import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { RecentBlogs } from "@/Services/AllDataLoad/DataLoad";
import Loading from "../Loader/Loading";
import { BlogDataTypes } from "@/Services/PropsValidations/DataType";

const RecentPost = async () => {
  const blogs = await RecentBlogs();

  if (!blogs || blogs?.length < 1) {
    return <Loading />;
  }
  return (
    <div>
      <div className="relative z-50">
        <Image
          width={3000}
          height={1000}
          src="https://i.ibb.co.com/zf1bB9B/bg02.jpg"
          alt="bg02"
          className="w-full h-full absolute -z-50 "
        />
        <div className=" w-full h-full">
          <div className="flex container mx-auto py-10 lg:py-20 w-full h-full">
            <div className="mb-10 uppercase font-bold text-white w-full h-full">
              <div className="mb-10 z-50">
                <p className="text-base px-2 py-1 mb-2 font-primary tracking-[1px] font-medium text-center">
                  stay-up-to-date
                </p>
                <h3 className="text-xl lg:text-3xl xl:text-5xl font-primary tracking-[2px] text-center">
                  Recent Posts
                </h3>
              </div>
              <div className="flex w-full flex-col lg:flex-row justify-evenly lg:py-5 gap-10 lg:p-0 p-10">
                <Link href={`/blog/${blogs?.[0]._id}`}>
                  <div className="card rounded-none group ">
                    <figure>
                      <Image
                        width={1000}
                        height={1400}
                        src={blogs[0].images.mainImage}
                        alt={blogs[0].title}
                        className="w-full transition-transform duration-300 group-hover:scale-110 "
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
                        <h2 className="card-title font-primary tracking-[2px] font-medium group-hover:text-zinc-300 font-primary">
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
                  </div>
                </Link>
                <div className="flex flex-col gap-5 lg:w-1/2">
                  {blogs.slice(1, 4).map((blog: BlogDataTypes) => (
                    <Link key={blog._id} href={`/blog/${blog._id}`}>
                      <div className="flex flex-row my-2 card gap-5 rounded-none text-white group">
                        <figure>
                          <Image
                            width={1000}
                            height={1400}
                            src={blog.images.mainImage}
                            alt={blog.title}
                            className="transition-transform duration-300 group-hover:scale-110 w-72 "
                          />
                        </figure>
                        <div className="card-body py-2 px-1">
                          <p className="font-medium font-primary tracking-[1px] md:text-sm">
                            Anime - Blog
                          </p>
                          <h2 className="card-title font-primary tracking-[2px] font-medium md:text-base group-hover:text-zinc-300 font-primary">
                            {blog.title}
                          </h2>
                          <p className="md:text-sm text-xs font-normal  tracking-[1px] text-wrap text-zinc-300">
                            {blog.intro}
                          </p>
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold text-zinc-300 md:text-sm">
                              {blog.date}
                            </h3>
                            <h3 className="font-semibold text-zinc-300 flex items-center gap-2 md:text-sm">
                              <FaRegHeart /> {blog.likes}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
