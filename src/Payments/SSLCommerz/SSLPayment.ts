import useAxios from "@/CustomHooks/useAxios";
import { OrderDataType } from "@/Services/PropsValidations/DataType";

const SSLPayment = async (order: OrderDataType) => {
  const Axios = useAxios();
  const res = await Axios.post("/api/payment/SSLCommerz", order);
  if (res.status === 200) {
    return res.data.paymentURL;
  }
};

export default SSLPayment;
