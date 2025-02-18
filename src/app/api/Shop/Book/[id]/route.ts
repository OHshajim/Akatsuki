import { shop } from "@/models/Shop";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await dbConnect();
    const query = request?.nextUrl?.searchParams;
    const email = query.get("email");
    const item = await shop.findOne({
      _id: params.id,
    });

    if (email) {
      const user = await User.findOne({ email: email });
      if (user.CartList.length < 1 || !user.CartList.includes(params.id)) {
        return NextResponse.json({
          isAdded: false,
          status: 200,
          data: item,
        });
      }
      const isSubscribed = user.CartList.includes(params.id);
      if (isSubscribed) {
        return NextResponse.json({
          isAdded: true,
          status: 200,
          data: item,
        });
      }
    } else {
      return NextResponse.json({
        status: 200,
        isAdded: false,
        data: item,
      });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error !!!" }),
      {
        status: 500,
      }
    );
  }
};
