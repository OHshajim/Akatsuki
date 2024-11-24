import { shop } from "@/models/Shop";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    await dbConnect();

    // Fetch the user by email
    const user = await User.findOne({ email: params.email });

    // Check if user exists and has a CartList
    if (!user || !user.CartList || user.CartList.length === 0) {
      return NextResponse.json({
        message: "Cart is empty or user not found!",
        status: 404,
      });
    }

    // Fetch shop data for the IDs in the user's CartList
    const shopData = await shop.find({ _id: { $in: user.CartList } });

    return new NextResponse(
      JSON.stringify({
        status: 200,
        data: shopData, // Returning shop data
      }),
      { status: 200 }
    );
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
