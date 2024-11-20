"use client";
import { motion } from "framer-motion";

const Tickets = () => {
  const packages = [
    {
      id: 1,
      type: "Weekly package",
      price: 12.99,
      time: "Per/Week"
    },
    {
      id: 2,
      type: "Vip Pass",
      price: 499.99,
      time: "Unlimited"
    },
    {
      id: 3,
      type: "Monthly Package",
      price: 49.99,
      time: "Per/Month"
    }
  ];

  return (
    <div className="bg-black py-20">
      <motion.div
        className="flex justify-center items-center flex-col py-10 uppercase font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-base px-2 py-1 mb-2 bebas-neue tracking-[1px] font-semibold">
          prices
        </p>
        <h3 className="md:text-3xl sm:text-2xl text-xl bebas-neue tracking-[2px]">
          Our tickets
        </h3>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-10">
        {packages.map((pack) => (
          <motion.div
            key={pack.id}
            className="bg-zinc-900 p-10 group hover:scale-110 duration-200 delay-75"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: pack.id * 0.2 }}
          >
            <div className="flex justify-center items-center flex-col mb-10 uppercase font-bold text-white">
              <h4 className="text-base px-2 py-1 mb-2">{pack.type}</h4>
              <motion.h3
                className="md:text-6xl sm:text-4xl text-2xl my-5 group-hover:text-[#6fc9cd]"
                whileHover={{ color: "#6fc9cd" }}
              >
                ${pack.price}
              </motion.h3>
              <p className="text-sm font-normal text-zinc-300">{pack.time}</p>
              <motion.button
                className="btn btn-outline rounded-none font-bold mt-10 border-white text-white group-hover:text-white group-hover:bg-[#6fc9cd] group-hover:scale-110 px-10 group-hover:border-none"
                whileHover={{ scale: 1.1 }}
              >
                BUY NOW
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p
        className="text-center text-white mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Be comfortable with Akatsuki - Do not sacrifice with comfort
      </motion.p>
    </div>
  );
};

export default Tickets;
