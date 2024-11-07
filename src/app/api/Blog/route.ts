import { Blog } from "@/models/Blog";
import dbConnect from "@/utils/dbConnect";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await Blog.find().sort({ date: -1, likes: -1 });

    return Response.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error !!!" });
  }
};
