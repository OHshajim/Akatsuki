import useAxios from "@/CustomHooks/useAxios";
import Swal from "sweetalert2";

const generateObjectId = () => {
  return (
    Math.floor(Date.now() / 1000).toString(16) +
    "xxxxxxxxxxxxxxxx".replace(/x/g, () =>
      Math.floor(Math.random() * 16).toString(16)
    )
  );
};

const CashOnDelivery = async ({
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
  const transactionId = generateObjectId();
  const { address, products, totalCost, email, name } = order;

  const Axios = useAxios();
  const paymentInfo = {
    email,
    name,
    totalCost,
    products,
    address,
    transactionID: transactionId,
    date: new Date(),
    paymentMethod: "Cash on Delivery",
    paymentStatus: "pending",
  };
  await Axios.post("/api/payment/OrderConfirmation", paymentInfo);
  Swal.fire({
    title: "Order Confirmed 🎉",
    text: "Your order has been confirmed! We will deliver your product soon.",
    icon: "success",
  });
};

export default CashOnDelivery;
