import useAxios from "@/CustomHooks/useAxios";

const SSLPayment = (order: unknown) => {
  console.log(order);
  const Axios = useAxios();
  const res = Axios.post("/api/payment/SSLCommerz", order);
  console.log(res);
};

export default SSLPayment;
