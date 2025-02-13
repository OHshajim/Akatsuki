import {
  PayPalButtons,
  PayPalScriptProvider,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";

const PaypalPayment = () => {
  const initialOptions: ReactPayPalScriptOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
  };
  return (
    <div className="flex justify-center w-full">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={{ color: "blue", shape: "sharp" }} />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalPayment;
