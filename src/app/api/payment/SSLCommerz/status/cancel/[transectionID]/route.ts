import { Orders } from "@/models/Orders";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { transectionID: string } }
) => {
  try {
    await dbConnect();
    const query = req?.nextUrl?.searchParams;
    const email = query.get("email");

    const user = await User.findOne({ email: email });
    const Order = await Orders.findOne({ transactionID: params.transectionID });

    if (!user || !Order) {
      return new NextResponse(
        JSON.stringify({
          message: "Order is not Acceptable !!!",
        }),
        { status: 406 }
      );
    }
    await Orders.deleteOne({ transactionID: params.transectionID });
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_API_URL}/cart`,
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
