"use client";
import { CartToggle, ProductData } from "@/Services/AllDataLoad/DataLoad";
import { Rating } from "@smastrom/react-rating";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";

const Page = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const email = session?.user?.email || null;
  const [book, setBook] = useState<any>(null);
  const [isAdded, setAdded] = useState(false);
  const router = useRouter();

  // Load product data
  const dataLoad = async () => {
    try {
      const data = await ProductData(email, params.id);
      if (data.status === 200) {
        setAdded(data.isAdded);
        setBook(data.data);
      }
    } catch (error) {
      console.error("Error loading product data:", error);
    }
  };

  useEffect(() => {
    dataLoad();
  }, [email, session?.user]);

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
      const res = await CartToggle(email, params.id);
      if (res.status === 201) {
        setAdded(true);
        Swal.fire({
          title: "Added to Cart",
          text: `${book?.title || "This book"} has been added to your cart!`,
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
        setAdded(false);
        Swal.fire({
          title: "Removed from Cart",
          text: `${
            book?.title || "This book"
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

  if (!book) {
    return <p className="text-center mt-10 text-lg">Loading product...</p>;
  }

  return (
    <div className="container mx-auto my-20 sm:p-10">
      <div className="card lg:card-side  bg-white gap-5 ">
        <figure className="overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <Image
            width={1000}
            height={1500}
            src={book.imageUrl}
            alt={book.title}
            className="w-3/4"
            priority
          />
        </figure>
        <div className="card-body lg:w-full">
          <p className="font-medium my-2 tracking-wider font-primary sm:text-base text-sm">
            HOME / SHOP /{book.title}
          </p>

          <h2 className="card-title md:text-3xl sm:text-2x text-xl font-bold font-primary md:tracking-[3.5px] tracking-wider">
            {book.title}
          </h2>
          <p className="mb-4 font-medium">{book.category}</p>
          <div className="flex justify-between ">
            <p className="font-bold sm:text-xl">
              Price : <span className="text-[#6fc9cd]">{book.price}$</span>
            </p>
            <Rating style={{ maxWidth: 110 }} value={book.rating} readOnly />
          </div>
          <div className="space-y-3 sm:text-base text-sm">
            <p className=" font-medium text-slate-600">
              <span className="text-black font-primary tracking-wider">
                Type :
              </span>{" "}
              Anime - Hard Copy
            </p>
            <p className=" font-medium text-slate-600">
              <span className="text-black font-primary tracking-wider">
                Pages :
              </span>{" "}
              {book.pages}
            </p>
            <p className=" font-medium text-slate-600">
              <span className="text-black font-primary tracking-wider">
                Published Year :
              </span>{" "}
              {book.yearPublished}
            </p>
            <p className="font-medium text-slate-600">
              <span className="text-black font-primary tracking-wider">
                Publisher :
              </span>{" "}
              {book.publisher}
            </p>
            <p className=" font-medium text-slate-600">
              <span className="text-black font-primary tracking-wider">
                Sold :
              </span>{" "}
              {book.totalSold}
            </p>

            <p className=" font-medium text-slate-600">
              <span className="text-black font-primary tracking-wider">
                Language :
              </span>{" "}
              {book.language}
            </p>
            <p className="font-medium text-slate-600">
              <span className="text-black font-primary tracking-wider">
                Product ID :
              </span>{" "}
              {book.ISBN}
            </p>
            {book.genres && (
              <p className="font-medium text-slate-600">
                <span className="text-black font-primary tracking-wider">
                  Categories :{" "}
                </span>
                {book.genres.join(", ")}
              </p>
            )}
          </div>
          <div className="card-actions mt-4 justify-end ">
            <button
              onClick={handleCart}
              className="btn text-white bg-[#6fc9cd] hover:bg-[#5db9bc]  rounded-none transform transition-transform duration-300 hover:scale-105 px-10 font-primary tracking-widest sm:text-lg font-medium"
            >
              {isAdded ? (
                <>
                  <MdShoppingCart className="text-xl mr-1 " /> Added
                </>
              ) : (
                <>
                  <MdOutlineShoppingCart className="text-xl mr-1" /> Add To Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      <p className="text-gray-700 tracking-widest my-5 p-5 max-h-fit sm:text-base text-sm">
        <span className="text-black font-semibold text-xl font-primary tracking-[2.4px]">
          Description
        </span>
        <br />
        <br />
        {book.description}
      </p>
    </div>
  );
};

export default Page;
