"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import Image from "next/image";

const Nav = () => {
  const path = usePathname();
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 text-lg">
      {[
        { href: "/", label: "Home" },
        { href: "/shop", label: "Shop" },
        { href: "/movies", label: "Movies" },
        { href: "/blog", label: "Blog" },
      ].map(({ href, label }) => (
        <li key={label}>
          <Link
            href={href}
            className={`${
              path === href
                ? "text-[#E3962B] font-bold scale-125"
                : "text-white"
            } focus:text-[#E3962B] focus:bg-transparent transition-colors duration-300 hover:text-[#E3962B] font-primary tracking-[2px] hover:bg-transparent z-50`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    path === "/dashboard" || (
      <div className="navbar bg-[#000000f5] p-5 items-center">
        {/* Brand and Logo with animation */}
        <motion.div
          className="flex-1 z-50 gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            alt="Logo"
            src="https://i.ibb.co.com/sWm5kRP/AKATSUKI-Logo.jpg"
            width={500}
            height={500}
            className="max-w-16"
          />
          <h1 className="sm:text-3xl text-xl font-Secondary text-white uppercase font-bold">
            Akatsuki
          </h1>
        </motion.div>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            className="text-white text-3xl focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>

        {/* Menu for large screens */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navList}
            {!session?.user?.email ? (
              <li>
                <Link
                  href={"/login"}
                  className={`${
                    path === "/login"
                      ? "text-[#E3962B] font-bold scale-125"
                      : "text-white"
                  } focus:text-[#E3962B] focus:bg-transparent transition-colors duration-300 hover:text-[#E3962B] font-primary tracking-[2px] hover:bg-transparent z-50 text-lg`}
                >
                  Join
                </Link>
              </li>
            ) : (
              <>
                {" "}
                <li>
                  <Link
                    href={"/cart"}
                    className={`${
                      path === "/cart"
                        ? "text-[#E3962B] font-bold scale-125"
                        : "text-white"
                    } focus:text-[#E3962B] focus:bg-transparent text-2xl transition-colors duration-300 hover:text-[#E3962B] font-primary tracking-[2px] hover:bg-transparent z-50`}
                  >
                    <RiShoppingBag4Line />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard"}
                    className={`${
                      path === "/dashboard"
                        ? "text-[#E3962B] font-bold scale-125"
                        : "text-white"
                    } focus:text-[#E3962B] focus:bg-transparent text-2xl transition-colors duration-300 hover:text-[#E3962B] font-primary tracking-[2px] hover:bg-transparent z-50`}
                  >
                    <AiOutlineMenuUnfold />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-16 left-0 w-full bg-black transition-all duration-300 z-50"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            <ul className="flex flex-col justify-center w-full items-center space-y-4 py-4">
              {navList}
              {!session?.user?.email ? (
                <li>
                  <Link
                    href={"/login"}
                    className={`${
                      path === "/login"
                        ? "text-[#E3962B] font-bold scale-125"
                        : "text-white"
                    } focus:text-[#E3962B] focus:bg-transparent transition-colors duration-300 hover:text-[#E3962B] font-primary tracking-[2px] hover:bg-transparent z-50 text-lg`}
                  >
                    Join
                  </Link>
                </li>
              ) : (
                <>
                  {" "}
                  <li>
                    <Link
                      href={"/cart"}
                      className={`${
                        path === "/cart"
                          ? "text-[#E3962B] font-bold scale-125"
                          : "text-white"
                      } focus:text-[#E3962B] focus:bg-transparent transition-colors duration-300 hover:text-[#E3962B] font-primary tracking-[2px] hover:bg-transparent z-50 flex gap-2`}
                    >
                      <RiShoppingBag4Line className="text-2xl" /> Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/dashboard"}
                      className={`${
                        path === "/dashboard"
                          ? "text-[#E3962B] font-bold scale-125"
                          : "text-white"
                      } focus:text-[#E3962B] focus:bg-transparent  transition-colors duration-300 hover:text-[#E3962B] font-primary tracking-[2px] hover:bg-transparent z-50 flex gap-2`}
                    >
                      <AiOutlineMenuUnfold className="text-2xl" /> DashBoard
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    )
  );
};

export default Nav;
