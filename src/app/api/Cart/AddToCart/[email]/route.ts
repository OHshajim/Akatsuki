import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    await dbConnect();
    const { ProductId }: { ProductId: string } = await req.json();

    // Fetch the user by email
    const user = await User.findOne({ email: params.email });
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found", status: 404 }),
        { status: 404 }
      );
    }

    const isProductInCart = user.CartList.includes(ProductId);
    if (!isProductInCart) {
      await User.updateOne(
        { email: params.email },
        { $addToSet: { CartList: ProductId } }
      );
      return new NextResponse(
        JSON.stringify({ message: "Product added to CartList", status: 201 }),
        { status: 201 }
      );
    } else {
      await User.updateOne(
        { email: params.email },
        { $pull: { CartList: ProductId } }
      );
      return new NextResponse(
        JSON.stringify({
          message: "Product removed from CartList",
          status: 200,
        }),
        { status: 200 }
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
