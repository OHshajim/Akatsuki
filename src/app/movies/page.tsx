import SectionBanner from "@/Shared/SectionBanner";
import { popular } from "../../../Public/Popular";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Movies"} title={"Movies"} />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
          {popular.map((movie) => (
            <div
              key={movie.product_id}
              className="card rounded-none text-black"
            >
              <figure className=" relative group">
                <Image
                  width={600}
                  height={800}
                  src={movie.image}
                  alt="Shoes"
                  className="w-full group"
                />
                <div className="absolute bottom-0 w-full group-hover:flex hidden bg-black group-hover:duration-200 group-hover:delay-100">
                  <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
                  Add to Cart
                  </button>
                  <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
                    Add to Wishlist
                  </button>
                </div>
              </figure>
              <div className="card-body py-2 px-1">
                <h2 className="card-title text-black bebas-neue tracking-[2px] font-medium">
                  {movie.name}
                </h2>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-zinc-400">
                    {movie.tags[1]}
                  </h3>
                  <Rating
                    style={{ maxWidth: 110, color: "#fff" }}
                    value={movie.rating}
                    readOnly
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
