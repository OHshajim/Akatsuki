import { Blog } from "@/models/Blog";
import dbConnect from "@/utils/dbConnect";

export const GET = async (request: unknown, { params }) => {
  try {
    await dbConnect();

    const item = await Blog.findOne({
      _id: params.id,
    });

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
