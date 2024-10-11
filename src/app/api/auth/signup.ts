import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";


export default async function signup(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }


    const newUser = new User({
      email,
      password
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}
