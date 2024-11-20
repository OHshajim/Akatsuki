import { Blog } from "@/models/Blog";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export const GET = async (request: unknown, { params }) => {
  try {
    await dbConnect();
    const query = request?.nextUrl?.searchParams;
    const email = query.get("email");

    const item = await Blog.findOne({
      _id: params.id,
    });

    if (email) {
      const user = await User.findOne({ email: email });
      if (user.Liked.length < 1 || !user.Liked.includes(params.id)) {
        console.log("here");

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
