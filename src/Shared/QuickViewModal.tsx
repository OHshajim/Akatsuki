import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { CartToggle } from "@/Services/AllDataLoad/DataLoad";
import React from "react";

type QuickViewModalProps = {
  item: {
    _id: string;
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
    pages: number;
    genres: string[];
    publisher: string;
    ISBN: string;
    author: string;
  };
  onClose: () => void;
};

const QuickViewModal: React.FC<QuickViewModalProps> = ({ item, onClose }) => {
  const { data: session } = useSession();
  const email = session?.user?.email ?? null;
    const router = useRouter();

  // Handle cart functionality
  const handleCart = async () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (!session?.user) {
      modal?.close();
      Swal.fire({
        title: "Please Login",
        text: "You need to log in to manage your cart. Do you want to log in now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#6fc9cd",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
      return;
    }
    try {
      modal?.close();
      const res = await CartToggle(email as string , item._id);
      if (res.status === 201) {
        Swal.fire({
          title: "Added to Cart",
          text: `${item?.title || "This book"} has been added to your cart!`,
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff ",
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://i.ibb.co.com/JzXgd9F/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
      } else if (res.status === 200) {
        Swal.fire({
          title: "Removed from Cart",
          text: `${
            item?.title || "This book"
          } has been removed from your cart.`,
          icon: "info",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong! Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      modal?.close();
      console.error("Error handling cart:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update cart. Please try again.",
        icon: "error",
      });
    }
  };
  return (
    <dialog id="my_modal_2" className="modal">
      {/* Modal Box */}
      <motion.div
        className="modal-box max-w-3xl m-0 p-0 rounded-none shadow-lg bg-white overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Close Button */}
        <form method="dialog" onSubmit={onClose}>
          <button
            className="p-2 z-50 absolute right-2 top-1 hover:text-red-500 text-xl select-none"
            aria-label="Close"
          >
            ✕
          </button>
        </form>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section */}
          <motion.figure
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              width={1000}
              height={1400}
              src={item?.imageUrl}
              alt={item?.title}
            />
          </motion.figure>

          {/* Details Section */}
          <motion.div
            className=" m-6 lg:w-1/2 p-6 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className=" text-2xl font-primary font-medium text-gray-800 tracking-widest">
              {item.title}
            </h2>
            <p className="font-medium tracking-widest mt-6">
              <strong className="font-primary font-medium">Type :</strong>{" "}
              <span className="text-gray-500">Manga - Hard Copy</span>
            </p>
            {item.genres && (
              <p className="font-medium tracking-widest my-1">
                <strong className="font-primary font-medium">Tags:</strong>{" "}
                <span className="text-gray-500">{item.genres.join(", ")}</span>
              </p>
            )}
            <p className="font-medium tracking-widest my-1">
              <strong className="font-primary font-medium">
                Number of Page:
              </strong>{" "}
              <span className="text-gray-500">{item.pages}</span>
            </p>
            <p className="font-medium tracking-widest my-1">
              <strong className="font-primary font-medium">Writer:</strong>{" "}
              <span className="text-gray-500">{item.author}</span>
            </p>
            <p className="font-medium tracking-widest my-1">
              <strong className="font-primary font-medium">Publisher:</strong>{" "}
              <span className="text-gray-500">{item.publisher}</span>
            </p>
            <p className="font-medium tracking-widest my-1">
              <strong className="font-primary font-medium">Product ID:</strong>{" "}
              <span className="text-gray-500">{item.ISBN}</span>
            </p>
            <div className="flex flex-col md:flex-row justify-between md:items-center mt-6 mb-4">
              <h3 className="text-xl font-semibold text-[#6fc9cd] ">
                {item.price} $
              </h3>
              <Rating style={{ maxWidth: 110 }} value={item.rating} readOnly />
            </div>
            <motion.button
              onClick={handleCart}
              className="btn text-white bg-[#6fc9cd] hover:bg-[#5db9bc]  rounded-none transform transition-transform duration-300 hover:scale-105 px-10 font-primary tracking-widest sm:text-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Add to Cart"
            >
              <MdOutlineShoppingCart className="text-xl mr-1" /> Add To Cart
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
        onSubmit={onClose}
      >
        <button aria-label="Close Modal" />
      </form>
    </dialog>
  );
};

export default QuickViewModal;
