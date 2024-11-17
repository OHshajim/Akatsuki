import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <div className="card rounded-none text-black group">
      <figure className="">
        <Image
          width={600}
          height={800}
          src={blog.images.mainImage}
          alt="blog"
          className="w-full group-hover:scale-110 delay-75 duration-300"
        />
      </figure>
      <div className="card-body py-2 px-1">
        <p className="font-medium bebas-neue tracking-[1px]">Anime</p>
        <h2 className="card-title group-hover:text-zinc-500 bebas-neue tracking-[2px]">
          {blog.title}
        </h2>
        <div className="flex justify-between items-center gap-4">
          <h3 className="font-semibold text-zinc-500 ">{blog.date}</h3>
          <h3 className="font-semibold text-zinc-500 flex  items-center gap-2">
            <FaRegHeart /> {blog.likes}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
