import Image from "next/image";
import { blogs } from "../../../Public/Blogs";
import { FaRegHeart } from "react-icons/fa";

const RecentPost = () => {
  return (
    <div>
      <div className="relative z-0">
        <Image
          width={3000}
          height={1000}
          src="https://i.ibb.co.com/zf1bB9B/bg02.jpg"
          alt="bg02"
          className="w-full h-auto object-cover"
        />
        <div className="absolute z-10 top-0 w-full h-full ">
          <div className="flex container mx-auto py-28 w-full h-full ">
            <div className="mb-10 uppercase font-bold text-white">
              <p className="text-base  px-2 py-1 mb-2 bebas-neue tracking-[1px] font-medium">
                stay-up-to-date
              </p>
              <h3 className="text-xl lg:text-3xl xl:text-5xl bebas-neue tracking-[2px]">
                Recent Posts
              </h3>
              <div className="flex py-5">
                <div className="card rounded-none group">
                  <figure className="">
                    <Image
                      width={400}
                      height={500}
                      src={blogs[0].image}
                      alt="blog"
                      className="w-full group-hover:scale-110 delay-75 duration-300"
                    />
                  </figure>
                  <div className="flex-row items-center card-body py-2 px-1">
                    <div>
                      <h1 className="pr-2 text-2xl">
                        {blogs[0].publish_date.split("-")[2]} <br />
                        {blogs[0].publish_date.split("-")[1]}
                      </h1>
                    </div>
                    <div>
                      <h2 className="card-title group-hover:text-zinc-500 bebas-neue tracking-[2px]">
                        {blogs[0].title}
                      </h2>
                      <div className="flex items-center gap-4">
                        <h3 className="font-semibold text-zinc-500 ">
                          {blogs[0].publish_date}
                        </h3>
                        <h3 className="font-semibold text-zinc-500 flex  items-center gap-2">
                          <FaRegHeart /> {blogs[0].likes}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col">
                  {blogs.slice(0,3).map((blog) => (
                      <div key={blog.id} className="flex flex-row card rounded-none text-black group">
                        <figure className="">
                          <Image
                            width={300}
                            height={400}
                            src={blog.image}
                            alt="blog"
                            className="w-full group-hover:scale-110 delay-75 duration-300"
                          />
                        </figure>
                        <div className="card-body py-2 px-1">
                          <p className="font-medium bebas-neue tracking-[1px]">
                            Anime
                          </p>
                          <h2 className="card-title group-hover:text-zinc-500 bebas-neue tracking-[2px]">
                            {blog.title}
                          </h2>
                          <div className="flex items-center gap-4">
                            <h3 className="font-semibold text-zinc-500 ">
                              {blog.publish_date}
                            </h3>
                            <h3 className="font-semibold text-zinc-500 flex  items-center gap-2">
                              <FaRegHeart /> {blog.likes}
                            </h3>
                          </div>
                        </div>
                      </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
