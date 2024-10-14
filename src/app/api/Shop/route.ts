import { shop } from "@/models/Shop";
import dbConnect from "@/utils/dbConnect";

export const GET = async (request) => {
  try {
    await dbConnect();
    const id = request.params;
    const item = await shop.findOne({ _id: id });

    return Response.json({
      message: "User Logged in successfully",
      item
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error !!!" });
  }
};
