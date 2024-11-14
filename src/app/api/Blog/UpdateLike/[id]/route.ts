import { Blog } from "@/models/Blog";
// import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";

export const PATCH = async (request: unknown, { params }) => {
  try {
    await dbConnect();
// const updateUseInfo = await User.updateOne()
    const item = await Blog.updateOne(
      {
        _id: params.id,
      },
      { $inc: { likes: 1 } }
    );

    return new Response(
      JSON.stringify({
        status: 200,
        data: item,
      })
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
