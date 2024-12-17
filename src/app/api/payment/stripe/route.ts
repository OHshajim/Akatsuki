import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-11-20.acacia",
});

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { totalCost } = await req.json();
    const amount = totalCost * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      payment_method_types: ["card"],
    });

    return new NextResponse(
      JSON.stringify({
        clientSecret: paymentIntent.client_secret,
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
