import dbConnect from "@/utils/dbConnect";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { totalCost, name, email, address, products } = await req.json();
    const sslData = {
      store_id: process.env.SSLCOMMERZ_STORE_ID,
      store_passwd: process.env.SSLCOMMERZ_STORE_PASS,
      total_amount: totalCost,
      currency: "USD",
      tran_id: "REF123",
      product_name: "Manga",
      product_profile: "physical-goods",
      product_category: "Book",
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/shop`,
      fail_url: `${process.env.NEXT_PUBLIC_API_URL}/cart`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/cart`,
      cus_name: name,
      cus_email: email,
      cus_add1: address,
      cus_city: address.city,
      cus_state: address.state,
      cus_postcode: address.zip,
      cus_country: address.country,
      cus_phone: "01741942510",
      shipping_method: "NO",
      num_of_item: products.length,
      weight_of_items: 1,
    };
    const res = await axios({
      method: "POST",
      url: "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      data: sslData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (res.data.status === "SUCCESS") {
      return new NextResponse(
        JSON.stringify({
          paymentURL: res.data.GatewayPageURL,
        }),
        { status: 200 }
      );
    }
    return new NextResponse(
      JSON.stringify({
        message: "Something gone wrong!!!",
      }),
      { status: 404 }
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
