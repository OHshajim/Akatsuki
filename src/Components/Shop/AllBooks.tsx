"use client";
import { ShopData } from "@/Services/PropsValidations/DataType";
import Card from "@/Shared/Card";
import QuickViewModal from "@/Shared/QuickViewModal";
import { useState } from "react";

const AllBooks = ({ books }: { books: ShopData[] }) => {
  const [selectedBook, setSelectedBook] = useState<ShopData | null>(null);

  return (
    <div>
      <div className="container mx-auto py-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 sm:px-0 px-5">
        {books?.map((book) => (
          <Card key={book._id} item={book} setViewItem={setSelectedBook} />
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedBook && (
        <QuickViewModal
          item={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default AllBooks;
