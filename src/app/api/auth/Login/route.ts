import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { generateToken } from "@/utils/jwt";

export const POST = async () => {
  try {
    await dbConnect();
    const existingUser = await User.findOne({ email:"ajshajimmax@gmail.com" });
    if (!existingUser) {
      return Response.json({
        message: "This account doesn't Exist !!! Please SignUp Now",
      });
    }

    const token = generateToken(existingUser._id);
    return Response.json({
      message: "User Logged in successfully",
      Access_token: token,
      userId: existingUser._id,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error !!!" });
  }
};
