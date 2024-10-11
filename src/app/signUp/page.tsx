"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();
  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className=" flex  justify-center bg-black relative overflow-hidden select-none">
      {/* Background Image */}
      <Image
        width={4000}
        height={4000}
        src="https://i.ibb.co.com/wztQQv9/Authentication-BG.gif" // Replace with your own Akatsuki image
        alt="Akatsuki background"
        className="fixed top-0 w-full h-full object-cover opacity-30 select-multiple"
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
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full mt-2 p-3 border border-red-500 bg-gray-800 rounded-lg focus:outline-none focus:border-red-600 transition duration-300"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-400">Password is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor="Password"
                className="text-white flex items-center space-x-2"
              >
                <FaLock /> <span>Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                className="w-full mt-2 p-3 border border-red-500 bg-gray-800 rounded-lg focus:outline-none focus:border-red-600 transition duration-300"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <span className="text-red-400">Password is required</span>
              )}
            </div>

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

export default page;
