"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [book, setBook] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get(`http://localhost:3000/api/Shop/Book/${params.id}`);
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
          <p>{book.description}</p>
          <p className="mt-2 font-medium">Type: Anime</p>
          <p className="mt-2 font-medium">
            Tags:{" "}
            {book?.genres?.map((tag) => (
              <span key={tag}>{tag}, </span>
            ))}
          </p>
          <p className="mt-2 font-medium">Director: {book.publisher}</p>
          <p className="mt-2 font-medium">Product_id: {book.ISBN} </p>
          <p className="mt-2 font-bold text-xl">Price: {book.price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-yellow-600 text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
