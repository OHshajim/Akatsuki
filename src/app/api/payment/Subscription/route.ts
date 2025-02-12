import { Subscription } from "@/models/Subscription";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const order = await req.json();
    console.log("Received Order:", order);

    const subscriptionDuration =
      order.address.time === "Per/Week"
        ? 7
        : order.address.time === "Per/Month"
        ? 30
        : 365; // Default to yearly

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + subscriptionDuration);

    // Find user by email
    const user = await User.findOne({ email: order.email });
    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Update user's subscription details
    await User.findOneAndUpdate(
      { email: order.email },
      {
        $set: {
          subscription: endDate,
        },
      },
      { new: true }
    );

    // Create and save subscription details
    const subscriptionDetails = new Subscription({
      email: order.email,
      username: order.name,
      subscription_Type: order.products[0],
      subscription_Time: order.address.time,
      subscription_Charge: order.totalCost,
      subscription_StartingTime: startDate,
      subscription_EndingTime: endDate,
    });

    console.log("Saving Subscription:", subscriptionDetails);
    await subscriptionDetails.save();

    return new NextResponse(
      JSON.stringify({
        message: "Subscription successful",
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500 }
    );
  }
};
