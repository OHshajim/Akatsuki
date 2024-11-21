import { shop } from "@/models/Shop";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export const GET = async (request: unknown, { params }) => {
  try {
    await dbConnect();

    // Fetch the user by email
    const user = await User.findOne({ email: params.email });

    // Check if user exists and has a CartList
    if (!user || !user.CartList || user.CartList.length === 0) {
      return new Response(
        JSON.stringify({ message: "Cart is empty or user not found!" }),
        { status: 404 }
      );
    }

    // Fetch shop data for the IDs in the user's CartList
    const shopData = await shop.find({ _id: { $in: user.CartList } });

    return new Response(
      JSON.stringify({
        status: 200,
        data: shopData, // Returning shop data
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error !!!" }),
      {
        status: 500,
      }
    );
  }
};
