import { NextRequest } from "next/server";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export const POST = async (req: NextRequest, { params }) => {
  try {
    await dbConnect();
    const { movieId } = await req.json();
    const user = await User.findOne({ email: params?.email });
    if (user.WishList.length < 1 || !user.WishList.includes(movieId)) {
      await User.updateOne(
        { email: params?.email },
        { $addToSet: { WishList: movieId } }
      );
      return Response.json({
        message: "Movie added to WishList",
        status: 201,
      });
    }
    const isSubscribed = user.WishList.includes(movieId);
    if (isSubscribed) {
      await User.updateOne(
        { email: params?.email },
        { $pull: { WishList: movieId } }
      );
      return Response.json({
        message: "Movie removed to WishList",
        status: 200,
      });
    }
    return Response.json({
      status: 404,
      message: "Something gone wrong, try again !!!",
    });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};

