import { Blog } from "@/models/Blog";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await Blog.find().sort({ likes: -1 }).limit(6);

    return NextResponse.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error !!!" });
  }
};