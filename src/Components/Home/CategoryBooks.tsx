import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const CategoryBooks = () => {
  const data = [
    {
      type: "Action",
      image: "https://i.ibb.co/XkhLBnD/bestsell4.jpg",
    },
    {
      type: "Adventure",
      image: "https://i.ibb.co/6XKfB4S/bestsell3.jpg",
    },
    {
      type: "Fantasy",
      image: "https://i.ibb.co/thwvMVz/bestsell2.jpg",
    },
    {
      type: "Love Story",
      image: "https://i.ibb.co/288srWf/bestsell1.jpg",
    },
  ];

  return (
    <div className="mx-10 py-20">
      <SectionTitle
        heading={"Discover all the best manga categories"}
        subHeading={"best choice"}
      />
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-10">
        {data.map((data) => (
          <div
            key={data.type}
            className="card rounded-none text-black relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl transform hover:rotate-1 group"
          >
            <Link href={"/shop?1"}>
              <figure className="relative">
                <Image
                  width={1000}
                  height={1000}
                  src={data.image}
                  alt={data.type}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-0 group-hover:grayscale group-hover:rotate-2 group-hover:brightness-75"
                />
                <div className="absolute bottom-10 w-full transition-all duration-500 ease-in-out transform group-hover:translate-y-8 translate-y-full">
                  <h3 className="text-2xl  text-white font-bold px-4 font-primary tracking-[2px]">
                    {data.type}
                  </h3>
                  <button className="btn btn-ghost border-none group-hover:flex hidden font-bold text-white  px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                    Shop Now <BsArrowRight className="ml-2 text-xl" />
                  </button>
                </div>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
