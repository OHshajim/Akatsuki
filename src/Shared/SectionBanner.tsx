"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type SectionBannerProps = {
  title: string;
  subTitle: string;
};

const SectionBanner = ({ title, subTitle }: SectionBannerProps) => {
  return (
    <motion.div
      className="relative z-0"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        // Delay stagger for multiple elements
        delayChildren: 0.2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          width={3000}
          height={1000}
          src="https://i.ibb.co.com/CQRdzPz/header-bg-copyright.jpg"
          alt="Cover2"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <div className="absolute z-10 top-0 w-full h-full bg-black/50">
        <div className="flex justify-center items-center w-full h-full">
          <motion.div
            className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <motion.h3
              className="text-sm md:text-xl lg:text-3xl xl:text-5xl text-white font-bold lg:my-5 bebas-neue"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-zinc-300 lg:text-sm md:text-xs text-[5px] text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              {subTitle}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionBanner;
