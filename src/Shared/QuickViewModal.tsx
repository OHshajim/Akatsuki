"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

type QuickViewModalProps = {
  item: {
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
    pages: number;
    genres: [];
    publisher: string;
    ISBN: string;
    author: string;
  };
};

const QuickViewModal: React.FC<QuickViewModalProps> = ({ item }) => {
  console.log(item);

  return (
    <dialog id="my_modal_2" className="modal">
      {/* Modal Box */}
      <motion.div
        className="modal-box max-w-3xl m-0 p-0 rounded-none shadow-lg bg-white"
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <form method="dialog">
          <button
            className="btn z-50 btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-200 hover:bg-gray-300"
            aria-label="Close"
          >
            ✕
          </button>
        </form>

        {/* Modal Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <motion.figure
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              width={600}
              height={800}
              src={item?.imageUrl}
              alt={item?.title}
              className="w-full shadow-md"
            />
          </motion.figure>

          {/* Details Section */}
          <motion.div
            className=" m-6 lg:w-1/2 p-6 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className=" text-2xl bebas-neue font-medium text-gray-800 tracking-widest">
              {item.title}
            </h2>
            <p className="font-medium tracking-widest mt-6">
              <strong className="bebas-neue font-medium">Type :</strong>{" "}
              <span className="text-gray-500">Manga - Hard Copy</span>
            </p>
            {item.genres && (
              <p className="font-medium tracking-widest my-1">
                <strong className="bebas-neue font-medium">Tags:</strong>{" "}
                <span className="text-gray-500">{item.genres.join(", ")}</span>
              </p>
            )}
            <p className="font-medium tracking-widest my-1">
              <strong className="bebas-neue font-medium">
                Number of Page:
              </strong>{" "}
              <span className="text-gray-500">{item.pages}</span>
            </p>
            <p className="font-medium tracking-widest my-1">
              <strong className="bebas-neue font-medium">Writer:</strong>{" "}
              <span className="text-gray-500">{item.author}</span>
            </p>
            <p className="font-medium tracking-widest my-1">
              <strong className="bebas-neue font-medium">Publisher:</strong>{" "}
              <span className="text-gray-500">{item.publisher}</span>
            </p>
            <p className="font-medium tracking-widest my-1">
              <strong className="bebas-neue font-medium">Product ID:</strong>{" "}
              <span className="text-gray-500">{item.ISBN}</span>
            </p>
            <div className="flex justify-between items-center mt-6 mb-4">
              <h3 className="text-xl font-semibold text-[#6fc9cd] ">
                {item.price} $
              </h3>
              <Rating style={{ maxWidth: 110 }} value={item.rating} readOnly />
            </div>
            <motion.button
              className="btn bg-[#6fc9cd] text-white hover:bg-[#5ba3a7]  flex items-center gap-2 px-6 py-2 rounded-lg shadow-lg bebas-neue font-medium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Add to Cart"
            >
              <MdOutlineShoppingCart className="text-xl" />
              Add To Cart
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Backdrop */}
      <form
        method="dialog"
        className="modal-backdrop"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <button aria-label="Close Modal" />
      </form>
    </dialog>
  );
};

export default QuickViewModal;
