import { Blog } from "@/models/Blog";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  try {
    await dbConnect();
    const email = request.nextUrl.searchParams.get("email");

    const item = await Blog.findOne({
      _id: params.id,
    });

    if (email) {
      const user = await User.findOne({ email: email });
      if (user.Liked.length < 1 || !user.Liked.includes(params.id)) {

        return Response.json({
          isLiked: false,
          status: 200,
          data: item,
        });
      }
      const isSubscribed = user.Liked.includes(params.id);
      if (isSubscribed) {
        return Response.json({
          isLiked: true,
          status: 200,
          data: item,
        });
      }
    } else {
      return Response.json({
        status: 200,
        isLiked: false,
        data: item,
      });
    }
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error !!!", status: 500 });
  }
};
