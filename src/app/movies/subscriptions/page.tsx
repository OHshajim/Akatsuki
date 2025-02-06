"use client";
import SectionBanner from "@/Shared/SectionBanner";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
      time: "Unlimited",
    },
    {
      id: 3,
      type: "Monthly Package",
      price: 49.99,
      time: "Per/Month",
    },
  ];

  const handleSelect = (id: unknown) => {
    console.log(id);
    setCurrentStep(2);
  };
  return (
    <div>
      <SectionBanner
        subTitle="Subscribe now for watch movies !!!"
        title="Subscriptions"
      />
      <div className="text-center text-gray-600 my-10 flex justify-center">
        {["Select Package", "Payment && Confirmation"].map((step, index) => (
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
            {index < 1 && (
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
    </div>
  );
};

export default Page;
