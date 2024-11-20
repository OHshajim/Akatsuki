"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MovieCard = ({ movie }: { movie: any }) => {
  return (
    <motion.div
      className="card rounded-none text-black"
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link href={`movies/${movie._id}`} className="w-full">
        <figure className="relative group">
          {/* Animate only the image */}
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.1 }} // Image scaling on hover
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image
              width={600}
              height={800}
              src={movie?.imageUrl[0]}
              alt={movie.title}
              className="w-full transition-transform duration-300 ease-in-out" // Smooth transition for the image
            />
          </motion.div>
        </figure>
        <motion.div
          className="card-body py-2 px-1"
          whileHover={{ backgroundColor: "#f8f8f8" }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="card-title bebas-neue tracking-[2px] font-medium">
            {movie.title}
          </h2>
          <div className="flex justify-between">
            <h3 className="font-semibold text-zinc-400">{movie.genres[0]}</h3>
            <Rating style={{ maxWidth: 110 }} value={movie.rating} readOnly />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;