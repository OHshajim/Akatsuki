import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { generateToken } from "@/utils/jwt";
import { NextApiRequest, NextApiResponse } from "next";


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(400).json({ message: "Invalid credentials" });
    // }

    const token = generateToken()

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
