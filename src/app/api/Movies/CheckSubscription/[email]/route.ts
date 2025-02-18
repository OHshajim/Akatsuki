import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    await dbConnect();
    const user = await User.findOne({ email: params?.email });
    if (user.Subscription == "null") {
      return new NextResponse(
        JSON.stringify({
          isSubscribed: false,
          message: "unsubscribed",
        })
      );
    }

    const now = new Date();
    const subscriptionEnd = new Date(user.subscription);
    const isSubscriptionValid = subscriptionEnd >= now;
    if (isSubscriptionValid) {
      return new NextResponse(
        JSON.stringify({
          status: 200,
          isSubscribed: true,
          message: "subscribed",
        })
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          status: 200,
          isSubscribed: false,
          message: "Subscription has expired.",
        })
      );
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error !!!" }),
      {
        status: 500,
      }
    );
  }
};
