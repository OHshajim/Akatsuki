"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/Shared/Card";
import SectionBanner from "@/Shared/SectionBanner";
import QuickViewModal from "@/Shared/QuickViewModal";

const Page = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/Shop");
      if (response.data.status) {
        setBooks(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <SectionBanner subTitle="Home > Shop" title="SHOP" />

      {/* Books Grid */}
      {books.length < 0 ? (
        "Loading"
      ) : (
        <div className="container mx-auto py-20 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
          {books.map((book) => (
            <Card key={book._id} item={book} setViewItem={setSelectedBook} />
          ))}
        </div>
      )}

      {/* Quick View Modal */}
      {selectedBook && (
        <QuickViewModal
          item={selectedBook}
          onClose={() => setSelectedBook({})}
        />
      )}
    </div>
  );
};

export default Page;
