"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Image from "next/image";

interface LoginFormInputs {
  email: string;
  password: string;
}

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Image */}
      <Image
        width={4000}
        height={4000}
        src="https://i.ibb.co.com/wztQQv9/Authentication-BG.gif" // Replace with your own Akatsuki image
        alt="Akatsuki background"
        className="fixed inset-0 w-full h-full object-cover opacity-30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative  w-full max-w-md bg-transparent p-8 rounded-2xl z-10"
      >
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Ataksuki Login
        </h2>
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
              id="password"
              type="password"
              {...register("password", { required: true })}
              className="w-full mt-2 p-3 border border-red-500 bg-gray-800 rounded-lg focus:outline-none focus:border-red-600 transition duration-300"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-400">Password is required</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            type="submit"
          >
            Login
          </motion.button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-400">
            Don’t have an account?{" "}
            <a href="#" className="text-red-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default page;
