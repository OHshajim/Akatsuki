import { NextResponse } from "next/server";
import { shop } from "@/models/Shop";
import dbConnect from "@/utils/dbConnect";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await shop.find();

    return NextResponse.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error !!!" });
  }
};
