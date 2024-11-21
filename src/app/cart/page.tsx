"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { GetCards } from "@/Services/AllDataLoad/DataLoad";
import { useSession } from "next-auth/react";
import CartsDetails from "@/Components/Cart/CartsDetails";
import SectionBanner from "@/Shared/SectionBanner";
import { FaArrowRightLong } from "react-icons/fa6";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface AddressForm {
  country: string;
  state: string;
  city: string;
  zip: number;
}

const Cart = () => {
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);
  const [address, setAddress] = useState<AddressForm>({
    country: "Bangladesh",
    state: "Dhaka",
    city: "Narsingdi",
    zip: 1600,
  });

  const { register, handleSubmit, setValue } = useForm<AddressForm>();

  // Mock Cart Data
  const DataLoad = async () => {
    if (session?.user?.email) {
      const res = await GetCards(session.user.email);
      setCartItems(res.data);
      updateSubtotal(res.data);
    }
  };
  useEffect(() => {
    DataLoad();
  }, [session?.user?.email]);

  // Update subtotal when quantity changes
  const updateSubtotal = (cart: CartItem[]) => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * (item.quantity ? item.quantity : 1),
      0
    );
    setSubtotal(total);
  };

  // Handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent zero or negative quantity

    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    updateSubtotal(updatedCart);
    setIsUpdated(true);
  };

  // Handle cart update
  const handleCartUpdate = () => {
    setIsUpdated(false);
    alert("Cart updated successfully!");
  };

  // Submit address form
  const onSubmit: SubmitHandler<AddressForm> = (data) => {
    setAddress(data);
    setIsAddressFormVisible(false);
  };

  // Show Address Form
  const handleAddressEdit = () => {
    setIsAddressFormVisible(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Section Banner */}
      <SectionBanner subTitle="Home &gt; Cart" title="Cart" />
      <div className="text-center text-gray-600 my-10 flex justify-center">
        {["Shopping Cart", "Payment & Delivery Options", "Order Received"].map(
          (step, index) => (
            <div key={index} className="flex items-center font-primary text-black text-lg">
              <span
                className={`px-3 py-2 m-2 text-white ${
                  currentStep === index + 1 ? "bg-[#6fc9cd]" : "bg-black"
                }`}
              >
                {index + 1}
              </span>
              {step}
              {index < 2 && (
                <FaArrowRightLong
                  className={
                    currentStep === index + 1 ? "text-[#6fc9cd] mx-4" : "text-black mx-4"
                  }
                />
              )}
            </div>
          )
        )}
      </div>
      {/* Cart Table */}
      <section className="container mx-auto px-4 py-10">
        <div>
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-4 px-6 text-left">Product</th>
                <th className="py-4 px-6 text-left">Price</th>
                <th className="py-4 px-6 text-left">Quantity</th>
                <th className="py-4 px-6 text-left">Subtotal</th>
                <th className="py-4 px-6 text-left">Remove</th>
              </tr>
            </thead>
            {cartItems.map((item) => (
              <CartsDetails
                item={item}
                key={item._id}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center mt-6 gap-5">
          <Link
            href="/shop"
            className="btn px-6 py-2 border-none rounded-none bg-white text-black shadow-md"
          >
            Continue Shopping
          </Link>
          <button
            disabled={!isUpdated}
            onClick={handleCartUpdate}
            className={`btn px-6 py-2 ${
              isUpdated
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-300 cursor-not-allowed"
            } text-white rounded-none shadow-md border-none`}
          >
            Update Cart
          </button>
        </div>
      </section>

      {/* Cart Totals */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between border-b pb-4">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between border-b py-4">
            <span>Shipping</span>
            <span>$10</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${subtotal + 10}</span>
          </div>

          {/* Address Form */}
          {isAddressFormVisible ? (
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  {...register("country", { required: true })}
                  placeholder="Country"
                  className="p-2 border rounded-md"
                />
                <input
                  {...register("state", { required: true })}
                  placeholder="State"
                  className="p-2 border rounded-md"
                />
                <input
                  {...register("city", { required: true })}
                  placeholder="City"
                  className="p-2 border rounded-md"
                />
                <input
                  {...register("zip", { required: true })}
                  placeholder="ZIP Code"
                  className="p-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md"
              >
                Update Address
              </button>
            </form>
          ) : (
            <div className="mt-6">
              <div className="flex justify-between">
                <p className="text-gray-700">Address:</p>
                <div>
                  <p className="text-gray-700">
                    {address?.city}, {address?.state}, {address?.country} -{" "}
                    {address?.zip}
                  </p>
                  <button
                    onClick={handleAddressEdit}
                    className="mt-2 text-blue-500 text-sm hover:underline text-end w-full"
                  >
                    Change Location?
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Checkout Button */}
        <button className="mt-6 w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md">
          Proceed to Checkout
        </button>
      </section>
    </div>
  );
};

export default Cart;
