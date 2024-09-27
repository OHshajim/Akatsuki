import { shop } from "../../../Public/Shop";
import Card from "@/Shared/Card";

const AllBooks = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
      {shop.map((book) => (
        <Card key={book.product_id} item={book} />
      ))}
    </div>
  );
};

export default AllBooks;
