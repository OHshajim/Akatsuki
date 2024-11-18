import bcrypt from "bcrypt";
import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { generateToken } from "@/utils/jwt";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password, imageURL, username } = await req.json();
  try {
    await dbConnect();
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return Response.json({
        message: "Account is Already Exist !!! Please Login",
      });
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
    console.log(newUser, imageURL);

    const token = generateToken(newUser._id);
    await newUser.save();
    return Response.json(
      {
        message: "User registered successfully",
        Access_token: token,
        userId: newUser._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Internal Server Error !!!" },
      { status: 500 }
    );
  }
};
