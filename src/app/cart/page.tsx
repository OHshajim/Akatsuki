"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { GetCards, ProductData } from "@/Services/AllDataLoad/DataLoad";
import { useSession } from "next-auth/react";

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
  zip: string;
}

const Cart = () => {
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(true);
  const [address, setAddress] = useState<AddressForm | null>(null);

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
      <div className="bg-white py-10 shadow-sm">
        <h1 className="text-3xl font-bold text-center">Cart</h1>
        <p className="text-center text-gray-600">Home &gt; Cart</p>
      </div>

      {/* Cart Table */}
      <section className="container mx-auto px-4 py-10">
        <div className="overflow-x-auto">
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
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="flex items-center py-4 px-6">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <span className="ml-4">{item.title}</span>
                  </td>
                  <td className="py-4 px-6">${item.price.toFixed(2)}</td>
                  <td className="py-4 px-6">
                    <input
                      type="number"
                      min="1"
                      defaultValue={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item._id, parseInt(e.target.value))
                      }
                      className="w-16 border border-gray-300 rounded-md text-center"
                    />
                  </td>
                  <td className="py-4 px-6">
                    $
                    {item.quantity
                      ? (item.price * item.quantity).toFixed(2)
                      : item.price}
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() =>
                        setCartItems(
                          cartItems.filter((cart) => cart._id !== item._id)
                        )
                      }
                      className="text-rose-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
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
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b py-4">
            <span>Shipping</span>
            <span>Flat rate (to NY)</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
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
              <p className="text-gray-700">
                Address: {address?.city}, {address?.state}, {address?.country} -{" "}
                {address?.zip}
              </p>
              <button
                onClick={handleAddressEdit}
                className="mt-2 text-blue-500 hover:underline"
              >
                Change Location
              </button>
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
