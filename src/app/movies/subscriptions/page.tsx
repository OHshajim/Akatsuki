"use client";
import PaypalPayment from "@/Payments/PayPal/PaypalPayment";
import Checkout from "@/Payments/Stripe/Checkout";
import SectionBanner from "@/Shared/SectionBanner";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaCcStripe, FaPaypal } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  const { data: session } = useSession();
  const paymentIcons: Record<string, JSX.Element> = {
    PayPal: <FaPaypal className="text-2xl" />,
    Stripe: <FaCcStripe className="text-2xl" />,
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [PaymentMethod, setPaymentMethod] = useState("PayPal");
  const [order, setOrder] = useState({
    address: { time: "null" },
    products: ["null"],
    totalCost: 0,
    email: session?.user?.email,
    name: session?.user?.name,
  });
  const packages = [
    {
      id: 1,
      type: "Weekly package",
      price: 12.99,
      time: "Per/Week",
    },
    {
      id: 2,
      type: "Vip Pass",
      price: 499.99,
      time: "Per/Year",
    },
    {
      id: 3,
      type: "Monthly Package",
      price: 49.99,
      time: "Per/Month",
    },
  ];

  const handleSelect = (id: number) => {
    setOrder({
      address: { time: packages[id - 1].time },
      products: [packages[id - 1].type],
      totalCost: packages[id - 1].price,
      email: session?.user?.email,
      name: session?.user?.name,
    });
    setCurrentStep(2);
  };
  const handlePayment = () => {
    setCurrentStep(3);
  };

  return (
    <div>
      <SectionBanner
        subTitle="Subscribe now for watch movies !!!"
        title="Subscriptions"
      />
      <div className="text-center text-gray-600 my-10 flex justify-center">
        {["Select Package", "Payment", "Confirmation"].map((step, index) => (
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
        ))}
      </div>

      {currentStep === 1 && (
        <div className="my-20">
          <h3 className="md:text-3xl sm:text-2xl text-xl text-center font-primary tracking-[2px] my-10">
            Our Subscription Packages
          </h3>
          <div className="grid  lg:grid-cols-3 container mx-auto gap-10 px-5">
            {packages.map((pack) => (
              <div
                key={pack.id}
                className="bg-zinc-900 p-10 group hover:scale-105 duration-300 relative overflow-hidden"
              >
                <div className="flex justify-center items-center flex-col mb-10 uppercase font-bold text-white">
                  <h4 className="text-base px-2 py-1 mb-2">{pack.type}</h4>
                  <h3 className="md:text-6xl sm:text-4xl text-2xl my-5 group-hover:text-[#6fc9cd]">
                    ${pack.price}
                  </h3>
                  <p className="text-sm font-normal text-zinc-300">
                    {pack.time}
                  </p>
                  <button
                    onClick={() => handleSelect(pack.id)}
                    className="btn btn-outline rounded-none font-bold mt-10 border-white text-white group-hover:text-white group-hover:bg-[#6fc9cd] group-hover:scale-110 px-10 group-hover:border-none"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentStep === 2 && (
        <div className="my-20 max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full select-none">
            <h2 className="text-xl font-bold mb-4">Payment</h2>
            {["PayPal", "Stripe"].map((method) => (
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
                <label className="flex items-center gap-2" htmlFor={method}>
                  {paymentIcons[method]} {method}
                </label>
              </div>
            ))}

            <button
              onClick={handlePayment}
              className="btn tracking-widest font-normal mt-6 w-full px-6 py-3 bg-[#6fc9cd] hover:bg-[#2a9ca2] text-white  rounded-none"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <section className="container mx-auto px-4 py-10">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            {PaymentMethod === "Stripe" ? (
              <Checkout order={order} />
            ) : PaymentMethod === "PayPal" ? (
              <PaypalPayment />
            ) : null}
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
