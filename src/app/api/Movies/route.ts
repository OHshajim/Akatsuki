import { Movies } from "@/models/Movies";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();
    const item = await Movies.find().sort({yearPublished:-1});

    return NextResponse.json({
      status: 200,
      data: item,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error !!!" });
  }
};
