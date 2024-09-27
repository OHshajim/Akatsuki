import SectionTitle from "@/Shared/SectionTitle";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const BestSelling = () => {
  const data = [
    {
      type: "Action",
      image: "https://i.ibb.co.com/XkhLBnD/bestsell4.jpg",
    },
    {
      type: "Adventure",
      image: "https://i.ibb.co.com/6XKfB4S/bestsell3.jpg",
    },
    {
      type: "Fantasy",
      image: "https://i.ibb.co.com/thwvMVz/bestsell2.jpg",
    },
    {
      type: "Love Story",
      image: "https://i.ibb.co.com/288srWf/bestsell1.jpg",
    },
  ];
  return (
    <div className=" mx-10 py-20">
      <SectionTitle
        heading={"Discover all the best manga series at great prices"}
        subHeading={"bestselling manga"}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {data.map((data) => (
          <div
            key={data.type}
            className="card rounded-none text-black transform transition-transform duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden "
          >
            <figure className="relative group">
              <Image
                width={600}
                height={800}
                src={data.image}
                alt="anime"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:grayscale-50"
              />
              <div className="absolute bottom-0 w-full  group-hover:duration-300">
                <h3 className="text-xl text-white font-bold px-4 py-2 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  {data.type}
                </h3>
                <button className=" btn btn-ghost border-none group-hover:flex hidden  font-bold text-white bg-transparent  transition-all duration-300 transform translate-y-12 group-hover:translate-y-0">
                  Shop Now <BsArrowRight className="text-xl" />
                </button>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
