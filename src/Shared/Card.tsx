import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";

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
        <div className="absolute bottom-0 border w-full group-hover:flex hidden bg-white group-hover:duration-200 group-hover:delay-100">
          <button className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black font-bold">Quick View</button>
          <button className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black font-bold">Add to Card</button>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <div className="flex justify-between">
          <h3>{item.price} $</h3>
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
