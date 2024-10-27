import { shop } from "@/models/Shop";
import dbConnect from "@/utils/dbConnect";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await shop.find().sort({ totalSold: -1 }).limit(8);

    return Response.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error !!!" });
  }
};
