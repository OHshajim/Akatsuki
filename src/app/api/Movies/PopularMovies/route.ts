import { Movies } from "@/models/Movies";
import dbConnect from "@/utils/dbConnect";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await Movies.find()
      .sort({ rating: -1, yearPublished: -1 })
      .limit(8);

    return Response.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error !!!" });
  }
};
