"use client";
import Card from "@/Shared/Card";
import SectionBanner from "@/Shared/SectionBanner";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [books, setBook] = useState([]);
  const dataLoad = async () => {
    const data = await axios.get("http://localhost:3000/api/Shop");
    console.log(data);
    if (data.data.status) {
      setBook(data.data.data);
    }
  };
  useEffect(() => {
    dataLoad();
  }, []);
  return (
    <div className="bg-white">
      <SectionBanner subTitle={"Home > Shop"} title={"SHOP"} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
        {books?.map((book) => (
          <Card key={book?._id} item={book} />
        ))}
      </div>
    </div>
  );
};

export default Page;
