import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie, textColor }) => {
  return (
    <div className="card rounded-none text-black">
      <figure className=" relative group">
        <Link href={`movies/${movie._id}`} className="w-full">
          <Image
            width={600}
            height={800}
            src={movie?.imageUrl[0]}
            alt="Shoes"
            className="w-full group"
          />
        </Link>
        <div className="absolute bottom-0 w-full group-hover:flex hidden bg-black group-hover:duration-200 group-hover:delay-100">
          <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
            Quick View
          </button>
          <button className="btn bg-black w-1/2 border-none hover:bg-gray-800 text-white font-bold">
            Add to Wishlist
          </button>
        </div>
      </figure>
      <Link href={`movies/${movie._id}`} className="w-full">
        <div className="card-body py-2 px-1">
          <h2
            className={`card-title ${textColor} bebas-neue tracking-[2px] font-medium`}
          >
            {movie.title}
          </h2>
          <div className="flex justify-between">
            <h3 className="font-semibold text-zinc-400">{movie.genres[0]}</h3>
            <Rating
              style={{ maxWidth: 110 }}
              value={movie.rating}
              readOnly
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
