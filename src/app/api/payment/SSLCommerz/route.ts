import { Orders } from "@/models/Orders";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import axios from "axios";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { totalCost, name, email, address, products } = await req.json();
    const user = await User.findOne({ email: email });
    if (!user) {
      return new NextResponse(
        JSON.stringify({
          message: "Order is not Acceptable !!!",
        }),
        { status: 406 }
      );
    }

    const transactionId = new mongoose.Types.ObjectId().toString();
    const sslData = {
      store_id: process.env.SSLCOMMERZ_STORE_ID,
      store_passwd: process.env.SSLCOMMERZ_STORE_PASS,
      total_amount: totalCost,
      currency: "USD",
      tran_id: transactionId,
      product_name: "Manga",
      product_profile: "physical-goods",
      product_category: "Book",
      success_url: `${process.env.NEXT_PUBLIC_API_URL}/api/payment/SSLCommerz/status/success/${transactionId}?email=${email}`,
      fail_url: `${process.env.NEXT_PUBLIC_API_URL}/api/payment/SSLCommerz/status/error/${transactionId}?email=${email}`,
      cancel_url: `${process.env.NEXT_PUBLIC_API_URL}/api/payment/SSLCommerz/status/cancel/${transactionId}?email=${email}`,
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
    const redirectURL = res.data.GatewayPageURL;
    if (res.data.status === "SUCCESS" && redirectURL) {
      const OrderedProductData = new Orders({
        name,
        email,
        paymentMethod: "SSLCommerz",
        totalCost,
        date: new Date(),
        products,
        transactionID: transactionId,
        address,
        paymentStatus: "Pending",
      });
      await OrderedProductData.save();
      return new NextResponse(
        JSON.stringify({
          paymentURL: redirectURL,
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
