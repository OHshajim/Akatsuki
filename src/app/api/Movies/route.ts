import { Movies } from "@/models/Movies";
import dbConnect from "@/utils/dbConnect";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await Movies.find().sort({yearPublished:-1});

    return Response.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error !!!" });
  }
};