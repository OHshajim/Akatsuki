"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MovieDataTypes } from "@/Services/PropsValidations/DataType";

const MovieCard = ({ movie }: { movie: MovieDataTypes }) => {
  return (
    <motion.div
      className="card rounded-none"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link href={`movies/${movie._id}`} className="w-full">
        <figure className="relative group">
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.1 }} // Image scaling on hover
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              width={1000}
              height={1400}
              src={movie.imageUrl[0]}
              alt={movie.title}
              className="w-full transition-transform duration-300 ease-in-out" // Smooth transition for the image 
              priority
            />
          </motion.div>
        </figure>
        <motion.div
          className="card-body py-2 px-1"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="card-title font-primary tracking-[2px] font-medium">
            {movie.title}
          </h2>
          <div className="flex justify-between">
            <h3 className="font-semibold text-zinc-400">{movie.genres[0]}</h3>
            <div>
              <Rating style={{ maxWidth: 110 }} value={movie.rating} readOnly />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
