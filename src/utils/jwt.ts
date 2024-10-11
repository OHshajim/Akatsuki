import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || " ";

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, secret, { expiresIn: "1d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};
