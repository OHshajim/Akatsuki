"use client";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { GetCarts, RemoveCart } from "@/Services/AllDataLoad/DataLoad";
import { useSession } from "next-auth/react";
import CartsDetails from "@/Components/Cart/CartsDetails";
import SectionBanner from "@/Shared/SectionBanner";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Swal from "sweetalert2";
import Loading from "@/Components/Loader/Loading";
import { ShopData } from "@/Services/PropsValidations/DataType";
import Checkout from "@/Payments/Stripe/Checkout";
import CashOnDelivery from "@/Payments/CashOnDelivery/CashOnDelivery";
import { useRouter } from "next/navigation";
import SSLPayment from "@/Payments/SSLCommerz/SSLPayment";
import PaypalPayment from "@/Payments/PayPal/PaypalPayment";

interface AddressForm {
  country: string;
  state: string;
  city: string;
  zip: number;
}

const Cart = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [cartItems, setCartItems] = useState<ShopData[]>([]);
  const [removedId, setRemoveId] = useState<string | null>(null);
  const [loading, setLoad] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [isAddressFormVisible, setIsAddressFormVisible] = useState(false);
  const [PaymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [address, setAddress] = useState<AddressForm>({
    country: "Bangladesh",
    state: "Dhaka",
    city: "Narsingdi",
    zip: 1600,
  });
  const total = subtotal + 10;
  const { register, handleSubmit } = useForm<AddressForm>();

  useEffect(() => {
    if (removedId) {
      const removedCartItem = async () => {
        const email = (await session?.user?.email) || null;
        const response = await RemoveCart(email, removedId);
        if (response.status === 200) {
          Swal.fire({
            title: "Removed from Cart",
            text: `This book has been removed from your cart.`,
            icon: "info",
          });
          setRemoveId(null);
        }
      };
      removedCartItem();
    }
    const DataLoad = async () => {
      if (session?.user?.email) {
        const res = await GetCarts(session.user.email);
        setLoad(false);
        setCartItems(res?.data);
        updateSubtotal(res?.data);
      }
    };
    DataLoad();
  }, [session?.user?.email, removedId]);

  // Update subtotal when quantity changes
  const updateSubtotal = (cart: ShopData[]) => {
    const total = cart?.reduce(
      (acc, item) => acc + item.price * (item.quantity ? item.quantity : 1),
      0
    );
    setSubtotal(total);
  };

  // Handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent zero or negative quantity

    const updatedCart = cartItems?.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    updateSubtotal(updatedCart);
  };

  // Submit address form
  const onSubmit: SubmitHandler<AddressForm> = (data) => {
    setAddress(data);
    setIsAddressFormVisible(false);
  };

  const productIds = cartItems?.map((item) => item._id);
  const cost = parseFloat(total.toFixed(2));

  const OrderData = {
    products: productIds,
    totalCost: cost,
    address,
    email: session?.user?.email,
    name: session?.user?.name,
  };
  const OrderPlacement = async () => {
    if (PaymentMethod === "Cash on Delivery") {
      CashOnDelivery({ order: OrderData });
      return router.push("/shop");
    }
    if (PaymentMethod === "SSLCommerz") {
      const res = await SSLPayment(OrderData);
      return router.push(res);
    }
    return setCurrentStep(3);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Section Banner */}
      <SectionBanner subTitle="Home &gt; Cart" title="Cart" />
      {/* steps showing */}
      <div className="text-center text-gray-600 my-10 flex justify-center">
        {["Shopping Cart", "Order Details", "Payment && Confirmation"].map(
          (step, index) => (
            <div
              key={index}
              className="flex items-center font-primary text-black sm:text-lg text-sm"
            >
              <span
                className={`sm:px-3 sm:py-2 sm:m-2 px-2 py-1 m-1 text-white ${
                  currentStep === index + 1 ? "bg-[#6fc9cd]" : "bg-black"
                }`}
              >
                {index + 1}
              </span>
              {step}
              {index < 2 && (
                <FaArrowRightLong
                  className={
                    currentStep === index + 1
                      ? "text-[#6fc9cd] sm:mx-4 mx-1"
                      : "text-black sm:mx-4 mx-1"
                  }
                />
              )}
            </div>
          )
        )}
      </div>
      {currentStep === 1 && (
        <>
          {cartItems?.length > 0 ? (
            <div>
              {/* Cart Table */}
              <section className="container mx-auto px-4 py-10">
                <div>
                  <div className=" hidden lg:block">
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
                          setRemoveId={setRemoveId}
                          item={item}
                          key={item._id}
                          handleQuantityChange={handleQuantityChange}
                        />
                      ))}
                    </table>
                  </div>
                  {/* Card style for small screens */}
                  <div className="block lg:hidden space-y-4">
                    <h3 className="font-primary text-xl">Products</h3>
                    {cartItems.map((cartItem) => (
                      <div
                        key={cartItem._id}
                        className="relative flex flex-col items-start p-4 bg-gray-100 rounded-lg shadow-sm"
                      >
                        {/* Remove button */}
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-rose-500"
                          aria-label="Remove"
                        >
                          &times;
                        </button>
                        {/* Product Image */}
                        <div className="w-full flex items-center gap-4">
                          <Image
                            width={120}
                            height={120}
                            className="object-cover rounded p-2"
                            src={cartItem.imageUrl}
                            alt={cartItem.title}
                          />
                          <div>
                            <h2 className=" text-black font-primary text-lg">
                              {cartItem.title}
                            </h2>
                            <p className="text-sm text-gray-800 font-medium">
                              By {cartItem.author}
                            </p>
                          </div>
                        </div>
                        {/* Product Details */}
                        <div className="w-full mt-4">
                          <p className="text-sm text-gray-700 flex justify-between">
                            <span className="font-bold">Price : </span> $
                            {cartItem.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-700 flex justify-between">
                            <span className="font-bold">Quantity : </span>{" "}
                            <input
                              type="number"
                              min="1"
                              defaultValue={1}
                              value={cartItem.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  cartItem._id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-12 border border-gray-300 rounded-none text-center py-2"
                            />
                          </p>
                          <p className="text-sm text-gray-700 flex justify-between">
                            <span className="font-bold">Subtotal : </span> $
                            {cartItem.quantity
                              ? (cartItem.price * cartItem.quantity).toFixed(2)
                              : cartItem.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end items-center mt-6 gap-5">
                  <Link
                    href="/shop"
                    className="btn px-6 py-2 border-none rounded-none bg-white text-black shadow-md  tracking-widest font-normal"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </section>

              {/* Cart Totals */}
              <section className="container mx-auto px-4 py-10">
                <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between border-b pb-4">
                    <span>Subtotal</span>
                    <span>${subtotal?.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b py-4">
                    <span>Shipping</span>
                    <span>$10</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total</span>
                    <span>${(subtotal + 10)?.toFixed(2)}</span>
                  </div>

                  {/* Address Form */}
                  {isAddressFormVisible ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          {...register("country", { required: true })}
                          placeholder="Country"
                          className="p-2 border rounded-md"
                          defaultValue={"Bangladesh"}
                        />
                        <input
                          type="text"
                          {...register("state", { required: true })}
                          placeholder="State"
                          className="p-2 border rounded-md"
                          defaultValue={"Dhaka"}
                        />
                        <input
                          type="text"
                          {...register("city", { required: true })}
                          placeholder="City"
                          className="p-2 border rounded-md"
                          defaultValue={"Narsingdi"}
                        />
                        <input
                          type="number"
                          {...register("zip", { required: true })}
                          placeholder="ZIP Code"
                          className="p-2 border rounded-md"
                          defaultValue={1600}
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-4 px-6 py-2 bg-[#6fc9cd] hover:bg-[#2a9ca2]  text-white rounded-md shadow-md"
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
                            {address?.city}, {address?.state},{" "}
                            {address?.country} - {address?.zip}
                          </p>
                          <button
                            onClick={() => setIsAddressFormVisible(true)}
                            className="mt-2 text-[#6fc9cd] hover:text-[#2a9ca2] text-sm hover:underline text-end w-full"
                          >
                            Change Location?
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => setCurrentStep(2)}
                  className="btn  tracking-widest font-medium  mt-6 w-full px-6 py-3 bg-[#6fc9cd] hover:bg-[#2a9ca2] text-white  rounded-none"
                >
                  Proceed to Checkout
                </button>
              </section>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col py-20">
              <h4 className=" text-2xl font-semibold">No Cart Available !!!</h4>
              <Link href="/shop">
                <button className="btn px-6 py-2 border-none rounded-none bg-white text-black shadow-md  tracking-widest font-normal mt-4">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </>
      )}

      {currentStep === 2 && (
        <section className="container mx-auto px-4 py-10 flex gap-10">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between py-2">
                <span>
                  {item.title} × {item.quantity || 1}
                </span>
                <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between mt-2">
              <span>Shipping</span>
              <span>$10</span>
            </div>
            <div className="flex justify-between font-bold border-t text-lg  pt-4 mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-4">
              <span>Location</span>
              <p className="text-gray-700">
                {address?.city}, {address?.state}, {address?.country} -{" "}
                {address?.zip}
              </p>
            </div>
          </div>
          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full select-none">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            {["Cash on Delivery", "PayPal", "SSLCommerz", "Stripe"].map(
              (method) => (
                <div key={method} className="flex items-center mb-4">
                  <input
                    type="radio"
                    id={method}
                    name="payment"
                    value={method}
                    checked={PaymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="mr-2"
                  />
                  <label htmlFor={method}>{method}</label>
                </div>
              )
            )}
            <button
              onClick={OrderPlacement}
              className="btn tracking-widest font-normal mt-6 w-full px-6 py-3 bg-[#6fc9cd] hover:bg-[#2a9ca2] text-white  rounded-none"
            >
              Place Order
            </button>
          </div>
        </section>
      )}
      {currentStep === 3 && (
        <section className="container mx-auto px-4 py-10">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {PaymentMethod === "Stripe" ? (
              <Checkout order={OrderData} />
            ) : PaymentMethod === "PayPal" ? (
              <PaypalPayment />
            ) : null}
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
