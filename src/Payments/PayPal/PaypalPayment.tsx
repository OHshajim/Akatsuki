"use client";
import Loading from "@/Components/Loader/Loading";
import useAxios from "@/CustomHooks/useAxios";
import { OrderDataType } from "@/Services/PropsValidations/DataType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import Swal from "sweetalert2";

const PaypalPayment = ({ order }: { order: OrderDataType }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const Axios = useAxios();
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const SubsConfirmation = async () => {
    try {
      const res = await Axios.post("/api/payment/Subscription", order);
      if (res.status === 201) {
        Swal.fire({
          title: "Subscription Activated 🎉",
          text: "Your subscription is now active! Enjoy premium access.",
          icon: "success",
        });
        router.push("/movies");
        return console.log(order);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (!scriptLoaded) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center">
      <PayPalButton
        style={{
          color: "blue",
          shape: "rect",
          label: "paypal",
        }}
        amount={order.totalCost}
        onSuccess={(
          details: { payer: { name: { given_name: string } } },
          data: unknown
        ) => {
          console.log(details, data);
          SubsConfirmation();
        }}
        catchError={() => {
          Swal.fire({
            title: "Error",
            text: "Try again !!!",
            icon: "error",
          });
        }}
      />
    </div>
  );
};

export default PaypalPayment;
