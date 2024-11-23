import { User } from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
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
        try {
          const { email, password } = credentials || {};
          if (!email || !password) {
            console.error("Email or password is missing");
            return null;
          }
          await dbConnect();
          const currentUser = await User.findOne({ email });
          if (!currentUser || !currentUser.password) {
            return null;
          }

          const passwordMatched = await bcrypt.compare(
            password,
            currentUser.password
          );
          if (!passwordMatched) {
            return null;
          }
          return currentUser;
        } catch (error) {
          console.error("Error during credentials validation:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" || account?.provider === "facebook") {
        const { email, name, image } = user as {
          email: string;
          name: string;
          image: string;
        };

        if (!email || !name) {
          console.error("Missing essential user data from provider");
          return false; // Prevent sign-in if critical data is missing
        }

        try {
          await dbConnect();

          // Check if the user already exists in the database
          const existingUser = await User.findOne({ email });

          if (!existingUser) {
            // Create a new user if they do not exist
            const newUser = new User({
              email,
              username: name,
              imageURL: image || null, // Image might be optional
              WishList: [],
              CartList: [],
              Liked: [],
              role: "Member", // Default role
            });

            await newUser.save();
            console.log("New user created:", newUser.email);
          }

          return true;
        } catch (error) {
          console.error("Error during provider sign-in:", error);
          return false; // Prevent sign-in on error
        }
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };
