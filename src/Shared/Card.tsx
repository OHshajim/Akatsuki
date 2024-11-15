"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
import { AiTwotoneEye } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import Link from "next/link";
import QuickViewModal from "./QuickViewModal";

type Item = {
  title: string;
  imageUrl: string;
  rating: number;
  _id: string;
  price: number;
};
type setViewItem = () => void;
type CardProps = {
  item: Item;
  setViewItem: setViewItem;
};

const Card = ({ item, setViewItem }: CardProps) => {
  const [done, setDone] = useState(false);
  // const [quickViewItem, setItem] = useState(item);
  const handleClick = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    setViewItem(item);
    if (modal) {
      modal.showModal();
    }
  };

  const SaveCart = (productId: string) => {
    if (typeof window !== "undefined") {
      const existingCart = window.localStorage.getItem("cartItems");

      const cartItems: string[] = existingCart ? JSON.parse(existingCart) : [];

      if (cartItems.includes(productId)) {
        Swal.fire({
          title: "Already added",
          text: "This item is already added on your cart list",
          icon: "error",
        });
        setDone(true);
        return;
      }
      if (!cartItems.includes(productId)) {
        cartItems.push(productId);
      }
      window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
      Swal.fire({
        title: "Successfully added",
        text: "This item is added on your cart list",
        icon: "success",
      });
    }
  };

  return (
    <div className="card rounded-none text-black">
      <figure className=" relative group">
        <Link href={`shop/${item._id}`} className="w-full">
          <Image
            width={600}
            height={800}
            src={item.imageUrl}
            alt="Shoes"
            className="w-full group "
          />
        </Link>
        <div className="absolute bottom-0 w-full group-hover:flex hidden bg-white group-hover:duration-200 group-hover:delay-100">
          <button
            onClick={handleClick}
            className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black font-bold"
          >
            <AiTwotoneEye className="text-xl" />
            Quick View
          </button>
          {done ? (
            <button
              onClick={() => SaveCart(item._id)}
              className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black font-bold"
            >
              Done
            </button>
          ) : (
            <button
              onClick={() => SaveCart(item._id)}
              className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black font-bold"
            >
              <MdOutlineShoppingCart className="text-xl" />
              Add to Card
            </button>
          )}
        </div>
      </figure>
      <Link href={`shop/${item._id}`} className="w-full">
        <div className="card-body py-2 px-1">
          <h2 className="card-title bebas-neue font-medium tracking-[1px]">
            {item.title}
          </h2>
          <div className="flex justify-between">
            <h3 className="font-semibold text-zinc-500">{item.price} $</h3>
            <Rating
              style={{ maxWidth: 110, color: "#fff" }}
              value={item.rating}
              readOnly
            />
          </div>
        </div>
      </Link>
      {/* {quickViewItem && <QuickViewModal item={quickViewItem} />} */}
    </div>
  );
};

export default Card;
