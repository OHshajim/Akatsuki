"use client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const Page = () => {
  const handleCheckout = async () => {
    // setLoading(true);

    const response = await axios.post(
      "http://localhost:3000/cart/payment/stripe/CheckOut",
      {
        items: [
          { name: "Product 1", price: 2000, quantity: 1 },
          { name: "Product 2", price: 1500, quantity: 2 },
        ],
        success_url: `${window.location.origin}/success`,
        cancel_url: `${window.location.origin}/cancel`,
      }
    );
    console.log(response);

    const { sessionId } = await response;

    const stripe = await stripePromise;
    stripe?.redirectToCheckout({ sessionId });
    // setLoading(false);
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        // disabled={loading}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
};

export default Page;
