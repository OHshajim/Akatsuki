import useAxios from "@/CustomHooks/useAxios";
import Swal from "sweetalert2";

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
  const { address, products, totalCost, email, name } = order;

  const Axios = useAxios();
  const paymentInfo = {
    email,
    name,
    totalCost,
    products,
    address,
    transactionID: "Cash",
    date: new Date(),
    paymentMethod: "Cash on Delivery",
  };
  await Axios.post("/api/payment/OrderConfirmation", paymentInfo);
  Swal.fire({
    title: "Order Confirmed 🎉",
    text: "Your order has been confirmed! We will deliver your product soon.",
    icon: "success",
  });
};

export default CashOnDelivery;
