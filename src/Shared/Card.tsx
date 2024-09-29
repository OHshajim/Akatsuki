import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
import { AiTwotoneEye } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";

const Card = ({ item }) => {
  return (
    <div className="card rounded-none text-black">
      <figure className=" relative group">
        <Image
          width={600}
          height={800}
          src={item.image}
          alt="Shoes"
          className="w-full group"
        />
        <div className="absolute bottom-0 w-full group-hover:flex hidden bg-white group-hover:duration-200 group-hover:delay-100">
          <button className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black font-bold"><AiTwotoneEye className="text-xl"/>
          Quick View</button>
          <button className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black font-bold"><MdOutlineShoppingCart className="text-xl"/>
          Add to Card</button>
        </div>
      </figure>
      <div className="card-body py-2 px-1">
        <h2 className="card-title bebas-neue font-medium tracking-[1px]">{item.name}</h2>
        <div className="flex justify-between">
          <h3 className="font-semibold text-zinc-500">{item.price} $</h3>
          <Rating
            style={{ maxWidth: 110, color: "#fff" }}
            value={item.rating}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
