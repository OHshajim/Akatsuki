"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function Checkout({
  order,
}: {
  order: {
    address: object;
    products: string[];
    totalCost: number;
    email: string | null | undefined;
    name: string | null | undefined;
  };
}) {
  return (
    <div id="checkout">
      <Elements stripe={stripePromise}>
        <CheckoutForm order={order} />
      </Elements>
    </div>
  );
}
