import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
import { AiTwotoneEye } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { CartToggle } from "@/Services/AllDataLoad/DataLoad";
import { useRouter } from "next/navigation";
import React from "react";

type Item = {
  _id: string;
  imageUrl: string;
  title: string;
  price: number;
  rating: number;
  genres?: string[]; // Optional property
  publisher: string;
  ISBN: string;
};

type setViewItem = (item: Item) => void | null;

type CardProps = {
  item: Item;
  setViewItem: setViewItem;
};

const Card: React.FC<CardProps> = ({ item, setViewItem }) => {
  const handleClick = async () => {
    await setViewItem(item);
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const { data: session } = useSession();
  const email = session?.user?.email || null;
  const router = useRouter();

  // Handle cart functionality
  const handleCart = async () => {
    if (!session?.user) {
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
      const res = await CartToggle(email, item._id);
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
      console.error("Error handling cart:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update cart. Please try again.",
        icon: "error",
      });
    }
  };
  return (
    <div className="card rounded-none text-black">
      <figure className=" relative group">
        <Link href={`shop/${item._id}`} className="w-full">
          <Image
            width={1000}
            height={1400}
            src={item?.imageUrl}
            alt={item?.title}
            className="w-full group "
          />
        </Link>
        <div className="absolute bottom-0 w-full group-hover:flex hidden bg-white group-hover:duration-200 group-hover:delay-100">
          <button
            onClick={handleClick}
            className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black"
          >
            <AiTwotoneEye className="text-xl" />
            Quick View
          </button>

          <button
            onClick={handleCart}
            className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black"
          >
            <MdOutlineShoppingCart className="text-xl" />
            Add to Cart
          </button>
        </div>
      </figure>
      <Link href={`shop/${item._id}`} className="w-full">
        <div className="card-body py-2 px-1">
          <h2 className="card-title font-primary font-medium tracking-[2px]">
            {item.title}
          </h2>
          <div className="flex justify-between">
            <h3 className=" text-zinc-00">{item.price} $</h3>
            <Rating
              style={{ maxWidth: 110, color: "#fff" }}
              value={item.rating}
              readOnly
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
