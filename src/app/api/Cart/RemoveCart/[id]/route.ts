import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await dbConnect();
    const query = request?.nextUrl?.searchParams;
    const email = query.get("email");

    if (!params.id) {
      return new NextResponse(
        JSON.stringify({ message: "Cart item ID is required!" }),
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: email });

    if (!user || !user.CartList) {
      return new NextResponse(
        JSON.stringify({ message: "Cart is empty or user not found!" }),
        { status: 404 }
      );
    }
    const itemIndex = user.CartList.indexOf(params.id);

    user.CartList.splice(itemIndex, 1);
    await user.save();

    return NextResponse.json({
      message: "Successfully removed cart item.",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Internal Server Error!" }), {
      status: 500,
    });
  }
};
