import bcrypt from "bcrypt";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password, imageURL, username } = await req.json();
  try {
    await dbConnect();
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "Account is Already Exist !!! Please Login",
        },
        { status: 400 }
      );
    }
    const hashedPassword = bcrypt.hashSync(password, 15);
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      imageURL: imageURL,
      WishList: [],
      CartList: [],
      Liked: [],
      role: "Member",
    });

    await newUser.save();
    return NextResponse.json(
      {
        message: "User registered successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error !!!" },
      { status: 500 }
    );
  }
};
