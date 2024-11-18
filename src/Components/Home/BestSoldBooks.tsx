"use client";
import Card from "@/Shared/Card";
import SectionTitle from "@/Shared/SectionTitle";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import QuickViewModal from "@/Shared/QuickViewModal";

const BestSoldBooks = () => {
  const [books, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const dataLoad = async () => {
    const data = await axios.get(
      "http://localhost:3000/api/Shop/BestSellingBooks"
    );
    if (data.data.data) {
      console.log(books);
      setBook(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div className="container mx-auto py-20">
      <SectionTitle
        subHeading={"Top Anime"}
        heading={"Popular anime this week"}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {books.map((book) => (
          <Card key={book._id} item={book} setViewItem={setSelectedBook} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link href={"/shop"}>
          <button className="btn bg-[#ac2026] border-none rounded-none text-white font-semibold uppercase hover:bg-zinc-600 hover:scale-110 mt-5 px-10">
            View Details <BsArrowRight className="text-xl" />
          </button>
        </Link>
      </div>
      {/* Quick View Modal */}
      {selectedBook && <QuickViewModal item={selectedBook} />}
    </div>
  );
};

export default BestSoldBooks;
