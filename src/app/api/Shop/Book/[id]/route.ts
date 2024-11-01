import { shop } from "@/models/Shop";
import dbConnect from "@/utils/dbConnect";

export const GET = async (req) => {
  try {
    await dbConnect();
    
    console.log( req);

    
    const id = "671e88f89521c3eae97527b3"

    const item = await shop.findOne({ _id: id });
    return new Response(JSON.stringify({
      status: 200,
      data: item,
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error !!!" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
