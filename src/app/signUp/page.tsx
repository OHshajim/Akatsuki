"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    if (data.password !== data.confirmPassword) return;

    try {
      const result = await axios.post("http://localhost:3000/api/auth/SignUp", {
        email: data.email,
        password: data.password,
      });
      console.log(result);
      if(result){
        localStorage.setItem("Access_Key",result.data.Access_token);
        localStorage.setItem("UserId",result.data.userId);
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
          <h1 className="text-5xl text-white font-bold font-peralta uppercase text-center">
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
                htmlFor="email"
                className="text-white flex items-center space-x-2"
              >
                <FaUserAlt /> <span>Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full mt-2 p-3 border border-red-500 bg-gray-800 rounded-lg focus:outline-none focus:border-red-600 transition duration-300"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-400">Email is required</span>
              )}
            </div>

            {/* Password Field with Show/Hide Functionality */}
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
                  className="w-full mt-2 p-3 border border-red-500 bg-gray-800 rounded-lg focus:outline-none focus:border-red-600 transition duration-300"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute inset-y-0 right-3 top-2 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-400">Password is required</span>
              )}
            </div>

            {/* Confirm Password Field with Show/Hide Functionality */}
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
                  className="w-full mt-2 p-3 border border-red-500 bg-gray-800 rounded-lg focus:outline-none focus:border-red-600 transition duration-300"
                  placeholder="Confirm Password"
                />
                <span
                  className="absolute inset-y-0 top-2 right-3 flex items-center cursor-pointer"
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

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
              type="submit"
            >
              Sign Up
            </motion.button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-red-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
