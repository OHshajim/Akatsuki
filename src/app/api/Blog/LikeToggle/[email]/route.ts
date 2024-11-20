import { NextRequest } from "next/server";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { Blog } from "@/models/Blog";

export const POST = async (req: NextRequest, { params }) => {
  try {
    await dbConnect();
    const { BlogId } = await req.json();
    const user = await User.findOne({ email: params?.email });
    if (user.Liked.length < 1 || !user.Liked.includes(BlogId)) {
      await User.updateOne(
        { email: params?.email },
        { $addToSet: { Liked: BlogId } }
      );
      await Blog.updateOne(
        {
          _id: BlogId,
        },
        { $inc: { likes: 1 } }
      );
      return Response.json({
        message: "Blog added to Liked",
        status: 201,
      });
    }
    const isSubscribed = user.Liked.includes(BlogId);
    if (isSubscribed) {
      await User.updateOne(
        { email: params?.email },
        { $pull: { Liked: BlogId } }
      );
      await Blog.updateOne(
        {
          _id: BlogId,
        },
        { $inc: { likes: -1 } }
      );
      return Response.json({
        message: "Blog removed to Liked",
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
