import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { generateToken } from "@/utils/jwt";

export const POST = async () => {
  // const { email, password } = await NextRequest.json();
  try {
    await dbConnect();
    const existingUser = await User.findOne({ email:"ajshajimmax@gmail.com" });
    if (existingUser) {
      return Response.json({ message: "Account is Already Exist !!! Please Login" });
    }

    const newUser = new User({
      // email,
      // password,
      WishList: [],
      CartList: [],
    });
    console.log(newUser);

    const token = generateToken(newUser._id);
    await newUser.save();
    return Response.json({
      message: "User registered successfully",
      Access_token: token,
      userId : newUser._id
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal Server Error !!!" });
  }
};
