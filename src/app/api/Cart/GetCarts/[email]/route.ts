import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export const GET = async (request: unknown, { params }) => {
  try {
    await dbConnect();
    const user = await User.findOne({ email: params.email });

    return Response.json({
      status: 200,
      data: user.CartList,
    });
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
