import { Orders } from "@/models/Orders";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const paymentInfo = await req.json();
    const user = await User.findOne({ email: paymentInfo.email });
    if (!paymentInfo || !user) {
      return new NextResponse(
        JSON.stringify({
          message: "Order is not Acceptable !!!",
        }),
        { status: 406 }
      );
    }

    if (paymentInfo && user) {
      const PaymentInfo = new Orders(paymentInfo);

      await User.updateOne(
        { email: paymentInfo.email },
        { $set: { CartList: [] } }
      );
      await PaymentInfo.save();
      return new NextResponse(
        JSON.stringify({ message: "Order Confirmed", status: 201 }),
        { status: 201 }
      );
    }
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
