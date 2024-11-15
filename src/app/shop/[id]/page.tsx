"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Page = ({ params }) => {
  const [book, setBook] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get(
      `http://localhost:3000/api/Shop/Book/${params.id}`
    );
    if (data.data.status) {
      setBook(data.data.data);
    }
  };
  console.log(book);
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div className="card lg:card-side p-10 bg-white text-black rounded-none gap-10 container mx-auto">
      <figure>
        <Image
          width={400}
          height={400}
          src={book.imageUrl}
          alt="Album"
          className="w-full "
        />
      </figure>
      <div className="card-body p-0 justify-center  lg:w-1/2">
        <div>
          <h2 className="card-title mb-4">{book.title}</h2>
          <p className="tracking-widest my-8">{book.description}</p>
          <p className="mt-2 font-medium">
            Type: <span className="text-zinc-500"> Anime - Hard Copy</span>
          </p>
          <p className="mt-2 font-medium">
            Tags:{" "}
            {book?.genres?.map((tag) => (
              <span className="text-zinc-500" key={tag}>
                {tag},{" "}
              </span>
            ))}
          </p>
          <p className="mt-2 font-medium">
            Publisher: <span className="text-zinc-500">{book.publisher} </span>
          </p>
          <p className="mt-2 font-medium">
            Product_id: <span className="text-zinc-500"> {book.ISBN} </span>
          </p>
          <div className="card-actions justify-end">
            <p className="font-semibold text-xl mt-8">
              Price:<span className="text-[#6fc9cd]"> {book.price}$ </span>
            </p>
            <button className="btn bg-[#6fc9cd] text-white hover:bg-slate-400">
              <MdOutlineShoppingCart className="text-xl" /> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
