"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { LuImagePlus } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import ImageHosting from "@/Services/ImageHosting";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialAuthentication from "@/Shared/SocialAuth/SocialAuthentication";

interface SignUpFormInputs {
  username: string;
  email: string;
  image: string;
  password: string;
  confirmPassword: string;
}

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    if (data.password !== data.confirmPassword) return;
    setLoading(true);
    const imageFile = { image: data.image[0] };

    try {
      const imageHostedFile = await ImageHosting(imageFile);
      if (imageHostedFile.display_url) {
        const result = await axios.post(
          "http://localhost:3000/api/auth/SignUp",
          {
            email: data.email,
            password: data.password,
            username: data.username,
            imageURL: imageHostedFile.display_url,
          }
        );
        console.log(result);
        if (result.status === 201) {
          const signInResponse = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.password,
          });
          if (signInResponse?.ok) {
            setLoading(false);
            return router.push("/");
          } else {
            alert("Error during automatic login");
          }
        } else {
          alert("Sign-up failed. Try again.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center bg-black relative overflow-hidden select-none">
      {/* Background Image */}
      <Image
        width={4000}
        height={4000}
        src="https://i.ibb.co/wztQQv9/Authentication-BG.gif"
        alt="Akatsuki background"
        className="fixed top-0 w-full h-full object-cover opacity-30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative flex justify-around w-full container mx-auto bg-transparent py-20 rounded-2xl z-50"
      >
        <div className="mb-5 w-1/2">
          <h3 className="text-3xl font-semibold text-center text-zinc-300 mb-4">
            Welcome to
          </h3>
          <h1 className="text-5xl text-white font-bold font-Secondary uppercase text-center">
            Akatsuki
          </h1>
        </div>
        <div className="w-4/12">
          <h3 className="text-3xl font-medium text-center text-zinc-300 mb-4">
            Please Sign Up
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="text-white flex items-center space-x-2"
              >
                <FaUserAlt /> <span>User Name</span>
              </label>
              <input
                type="text"
                {...register("username", { required: true })}
                className="w-full mt-2 p-3 border border-red-500 bg-gray-900 rounded-lg focus:outline-none focus:border-red-600 transition duration-300 text-white focus:bg-black"
                placeholder="Enter your username"
              />
              {errors.username && (
                <span className="text-red-400">Username is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white flex items-center space-x-2"
              >
                <MdAlternateEmail className="text-xl" />
                <span>Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full mt-2 p-3 border border-red-500 bg-gray-900 rounded-lg focus:outline-none focus:border-red-600 transition duration-300 text-white focus:bg-black"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="image"
                className="text-white flex items-center space-x-2"
              >
                <LuImagePlus className="text-xl" /> <span>Image</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="w-full mt-2 p-3 border border-red-500 bg-gray-900 rounded-lg focus:outline-none focus:border-red-600 transition duration-300 text-white focus:bg-black"
                placeholder="Enter your image"
              />
              {errors.image && (
                <span className="text-red-400">Image is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-white flex items-center space-x-2"
              >
                <FaLock /> <span>Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  className="w-full mt-2 p-3 border border-red-500 bg-gray-900 rounded-lg focus:outline-none focus:border-red-600 transition duration-300 text-white focus:bg-black"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute inset-y-0 right-3 top-2 flex items-center cursor-pointer text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-400">Password is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-white flex items-center space-x-2"
              >
                <FaLock /> <span>Confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", { required: true })}
                  className="w-full mt-2 p-3 border border-red-500 bg-gray-900 rounded-lg focus:outline-none focus:border-red-600 transition duration-300 text-white focus:bg-black"
                  placeholder="Confirm Password"
                />
                <span
                  className="absolute inset-y-0 top-2 right-3 flex items-center cursor-pointer text-white"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-400">
                  Confirm Password is required
                </span>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ${
                loading ? "cursor-wait btn-disabled" : ""
              }`}
              type="submit"
            >
              {loading ? "Loading" : "Sign Up"}
            </motion.button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-300">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-red-500 font-bold hover:underline text-lg"
              >
                Login
              </Link>{" "}
              now!
            </p>
          </div>
          <div>
            <h4 className="text-xl text-red-600 font-bold text-center mt-2">
              &&
            </h4>
            <SocialAuthentication />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
