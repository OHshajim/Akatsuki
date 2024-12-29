import dbConnect from "@/utils/dbConnect";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { totalCost, name, email, address, products } = await req.json();
    console.log(process.env.SSLCOMMERZ_STORE_ID);
    const sslData = {
      store_id: "akats67702fccd488d",
      store_passwd: "akats67702fccd488d@ssl",
      total_amount: totalCost,
      currency: "USD",
      tran_id: "REF123",
      product_name: "Manga",
      product_profile: "physical-goods",
      product_category: "Book",
      success_url: "http://localhost:3000/success.php",
      fail_url: "http://localhost:3000/fail.php",
      cancel_url: "http://localhost:3000/cancel.php",
      cus_name: name,
      cus_email: email,
      cus_city: address.city,
      cus_state: address.state,
      cus_postcode: address.zip,
      cus_country: address.country,
      cus_phone: "01741942510",
      shipping_method: "NO",
      num_of_item: products.length,
      weight_of_items: 1,
    };
    const res = await axios.post(
      "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      sslData
    );

    console.log(res);

    return new NextResponse(
      JSON.stringify({
        clientSecret: "paymentIntent.client_secret",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
      }),
      { status: 500 }
    );
  }
};
