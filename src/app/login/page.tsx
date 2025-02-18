"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import SocialAuthentication from "@/Shared/SocialAuth/SocialAuthentication";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.ok) {
        setLoading(false);
        return router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex  justify-center bg-black relative overflow-hidden select-none">
      {/* Background Image */}
      <Image
        width={4000}
        height={4000}
        src="https://i.ibb.co.com/wztQQv9/Authentication-BG.gif" // Replace with your own Akatsuki image
        alt="Akatsuki background"
        className="fixed top-0 w-full h-full object-cover opacity-30"
        priority
      />
      <motion.div
        initial={{ opacity: 0, scale: 10 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative flex lg:flex-row flex-col px-5 justify-around w-full container mx-auto bg-transparent py-20 rounded-2xl z-10"
      >
        <div className="mb-5 lg:w-1/2">
          <h3 className="sm:text-3xl font-semibold text-center text-zinc-300 mb-4">
            Welcome Back to
          </h3>
          <h1 className="sm:text-5xl text-3xl text-white font-bold font-Secondary uppercase text-center">
            Akatsuki
          </h1>
        </div>
        <div className="lg:w-4/12">
          <h3 className="text-3xl font-medium text-center text-zinc-300 mb-4">
            Please Login
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-white flex items-center space-x-2"
              >
                <FaUserAlt /> <span>Email</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="w-full mt-2 p-3 border border-red-500 bg-gray-900 rounded-lg focus:outline-none focus:border-red-600 transition duration-300 text-white focus:bg-black"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-400">email is required</span>
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ${
                loading ? "cursor-wait" : ""
              }`}
              type="submit"
            >
              {loading ? "Loading" : "Login"}
            </motion.button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-300">
              Don’t have an account?
              <Link
                href="/signUp"
                className="text-red-500 hover:underline text-lg"
              >
                {" "}
                Sign Up
              </Link>
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

export default Login;
