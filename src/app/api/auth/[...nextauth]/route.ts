import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authSession = {
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        await dbConnect();
        const currentUser = await User.findOne({ email });

        if (!currentUser) {
          return null;
        }
        console.log(currentUser);
        const passwordMatched = bcrypt.compare(password, currentUser.password);
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  // callbacks: {
  //   async signIn({ user, account }) {
  //     if (account.provider === "google" || account.provider === "facebook") {
  //       const { email } = user;
  //       try {
  //         await dbConnect();
  //         const userExist = await User.findOne({ email });
  //         if (!userExist) {
  //           const newUser = new User({
  //             email,
  //             // password: user.password,
  //             WishList: [],
  //             CartList: [],
  //           });
  //           await newUser.save();
  //           return user;
  //         } else {
  //           return user;
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       return user;
  //     }
  //   },
  // },
};

const handler = NextAuth(authSession);

export { handler as GET, handler as POST };
