import { shop } from "@/models/Shop";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await shop.find().sort({ rating: -1 }).limit(8);

    return NextResponse.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error !!!" });
  }
};
