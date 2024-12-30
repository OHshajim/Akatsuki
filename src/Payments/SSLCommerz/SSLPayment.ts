import useAxios from "@/CustomHooks/useAxios";

const SSLPayment = async (order: unknown) => {
  const Axios = useAxios();
  const res = await Axios.post("/api/payment/SSLCommerz", order);
  if (res.status === 200) {
    return res.data.paymentURL;
  }
};

export default SSLPayment;
