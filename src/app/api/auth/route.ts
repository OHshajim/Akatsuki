import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { generateToken } from "@/utils/jwt";

export const GET = async (request) => {
  await dbConnect();
  try {
    const email = "aj@gmail.com"
    const user = await User.findOne({ email });
    const token = generateToken();
    if (!user) {
      return Response.json({ message: "User not found" ,token : token});
    }
  } catch (error) {
    console.log(error);
    Response.json({ message: "Server error" });
  }
};
