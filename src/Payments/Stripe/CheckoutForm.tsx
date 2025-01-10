"use client";
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import useAxios from "@/CustomHooks/useAxios";
import { useRouter } from "next/navigation";

const CheckoutForm = ({
  order,
}: {
  order: {
    address: object;
    products: string[];
    totalCost: number;
    email: string | null | undefined;
    name: string | null | undefined;
  };
}) => {
  const stripe = useStripe();
  const Axios = useAxios();
  const router = useRouter();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const { totalCost, products, address, email, name } = order;

  useEffect(() => {
    if (!totalCost || totalCost == 0) {
      return;
    }
    Axios.post("/api/payment/stripe", { totalCost: totalCost }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [Axios, totalCost]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setError(error.message as string);
    } else {
      console.log("payment Method :", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
            name: name,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("paymentIntent : ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          email,
          name,
          totalCost,
          products,
          address,
          transactionID: paymentIntent.id,
          date: new Date(),
          paymentMethod: "Stripe",
          paymentStatus: "Successful",
        };
        const res = await Axios.post(
          "/api/payment/OrderConfirmation",
          paymentInfo
        );
        if (res.data) {
          Swal.fire({
            title: "Payment Complete 🥳🥳🥳",
            text: "Your order has been confirmed! We will deliver your product soon.",
            icon: "success",
          });
          router.push("/shop");
        }
      }
    }
  };
  return (
    <div>
      <h3 className="text-center text-2xl font-primary text-[#6fc9cd]">
        Payment with Stripe
      </h3>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="p-3 text-xl"
          options={{
            style: {
              base: {
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="max-w-sm  mx-auto my-10 ">
          <button
            disabled={!stripe || !clientSecret}
            type="submit"
            className="btn tracking-widest font-normal mt-6 w-full px-6 py-3 bg-[#6fc9cd] hover:bg-[#2a9ca2] text-white  rounded-none border-none text-lg disabled:text-white disabled:bg-[#b5b5b5]"
          >
            Pay - {totalCost}$
          </button>
        </div>
        <p className="text-red-600 text-center">{error}</p>
      </form>
    </div>
  );
};
export default CheckoutForm;
