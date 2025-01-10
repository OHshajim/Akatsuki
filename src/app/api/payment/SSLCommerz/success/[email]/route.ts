import { Orders } from "@/models/Orders";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    await dbConnect();
    console.log(params);

    const user = await User.findOne({ email: params.email });
    const Order = await Orders.findOne({ email: params.email });

    if (!user || !Order) {
      return new NextResponse(
        JSON.stringify({
          message: "Order is not Acceptable !!!",
        }),
        { status: 406 }
      );
    }
    await User.updateOne({ email: params.email }, { $set: { CartList: [] } });
    await Orders.updateOne(
      { email: params.email },
      { $set: { paymentStatus: "Successful" } }
    );
    return NextResponse.redirect(
      "http://localhost:3000/shop/PaymentStatus/success",
      302
    );
  } catch (error) {
    console.error("Error processing POST request on /shop:", error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
