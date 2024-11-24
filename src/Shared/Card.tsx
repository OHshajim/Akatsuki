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
import { ShopData } from "@/Services/PropsValidations/DataType";

type CardProps = {
  item: ShopData;
  setViewItem: (item: ShopData) => void | null;
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
      <figure className="relative group overflow-hidden">
        <Link href={`shop/${item._id}`} className="w-full">
          <Image
            width={1000}
            height={1400}
            src={item?.imageUrl}
            alt={item?.title}
            className="w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
        <div className="absolute bottom-0 w-full  hidden bg-white opacity-0 group-hover:opacity-100 group-hover:flex group-hover:translate-y-0 translate-y-10 transition-all duration-500 ease-in-out">
          <button
            onClick={handleClick}
            className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black transition-colors duration-300"
          >
            <AiTwotoneEye className="text-xl" />
            Quick View
          </button>
          <button
            onClick={handleCart}
            className="btn bg-white w-1/2 border-none hover:bg-gray-100 text-black transition-colors duration-300"
          >
            <MdOutlineShoppingCart className="text-xl" />
            Add to Cart
          </button>
        </div>
      </figure>
      <Link href={`shop/${item._id}`} className="w-full">
        <div className="card-body py-2 px-1">
          <h2 className="card-title font-primary font-medium tracking-[2px] transition-transform duration-500 ease-in-out group-hover:scale-105">
            {item.title}
          </h2>
          <div className="flex justify-between">
            <h3 className="text-zinc-00">{item.price} $</h3>
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
