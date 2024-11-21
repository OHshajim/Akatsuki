import { shop } from "@/models/Shop";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export const GET = async (request: unknown, { params }) => {
  try {
    await dbConnect();
    const query = request?.nextUrl?.searchParams;
    const email = query.get("email");
    const item = await shop.findOne({
      _id: params.id,
    });

    if (email) {
      const user = await User.findOne({ email: email });
      if (user.CartList.length < 1 || !user.CartList.includes(params.id)) {
        console.log("here");

        return Response.json({
          isAdded: false,
          status: 200,
          data: item,
        });
      }
      const isSubscribed = user.CartList.includes(params.id);
      if (isSubscribed) {
        return Response.json({
          isAdded: true,
          status: 200,
          data: item,
        });
      }
    } else {
      return Response.json({
        status: 200,
        isAdded: false,
        data: item,
      });
    }
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
