import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest } from "next/server";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    // Connect to the database
    await dbConnect();

    // Extract the query parameters
    const query = request?.nextUrl?.searchParams;
    const email = query.get("email");

    // Validate inputs
    if (!params.id) {
      return new Response(
        JSON.stringify({ message: "Cart item ID is required!" }),
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await User.findOne({ email: email });

    if (!user || !user.CartList) {
      return new Response(
        JSON.stringify({ message: "Cart is empty or user not found!" }),
        { status: 404 }
      );
    }
    // // Check if the item exists in the user's cart
    const itemIndex = user.CartList.indexOf(params.id);

    user.CartList.splice(itemIndex, 1);
    await user.save();

    return Response.json({
      message: "Successfully removed cart item.",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error!" }), {
      status: 500,
    });
  }
};
