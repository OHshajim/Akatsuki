import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export const POST = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  try {
    await dbConnect();
    const { movieId } = await req.json();
    const user = await User.findOne({ email: params?.email });
    if (user.WishList.length < 1 || !user.WishList.includes(movieId)) {
      await User.updateOne(
        { email: params?.email },
        { $addToSet: { WishList: movieId } }
      );
      return NextResponse.json({
        message: "Movie added to WishList",
        isLiked: true,
        status: 201,
      });
    }
    const isSubscribed = user.WishList.includes(movieId);
    if (isSubscribed) {
      await User.updateOne(
        { email: params?.email },
        { $pull: { WishList: movieId } }
      );
      return NextResponse.json({
        message: "Movie removed to WishList",
        isLiked: false,
        status: 200,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Something gone wrong, try again !!!",
      isLiked: false,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Internal Server Error",
      isLiked: false,
      status: 500,
    });
  }
};
