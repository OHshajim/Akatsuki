"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  console.log(path);

  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navList = (
    <>
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
                : "text-white hover:scale-125 hover:text-[#E3962B]"
            } focus:text-[#E3962B] transition duration-300  font-primary tracking-[2px] z-50 text-lg`}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);
  return (
    <div className="navbar bg-[#000000f5] p-5 items-center">
      {/* Brand and Logo with animation */}
      <motion.div
        className="flex-1 z-30 gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          alt="Logo"
          src="https://i.ibb.co.com/sWm5kRP/AKATSUKI-Logo.jpg"
          width={600}
          height={600}
          className="max-w-16"
          priority
        />
        <h1 className="sm:text-3xl text-xl font-Secondary text-white uppercase font-bold">
          Akatsuki
        </h1>
      </motion.div>

      {/* Hamburger menu for mobile */}
      <div className="lg:hidden">
        <button
          className="text-white text-3xl focus:outline-none z-50"
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
                  path === "/login" || path === "/signUp"
                    ? "text-[#E3962B] font-bold scale-125"
                    : "text-white hover:scale-125 hover:text-[#E3962B]"
                } focus:text-[#E3962B] transition duration-300  font-primary tracking-[2px] z-50 text-lg`}
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
                  href={`/dashboard/${session?.user?.email}`}
                  className={`${
                    path === `/dashboard/${session?.user?.email}`
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
          className="lg:hidden absolute top-1 left-0 w-full bg-[#000000b9] transition-all duration-300 z-40"
          initial={{ opacity: 0, y: -350 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="menu items-center w-full my-10">
            {navList}
            {!session?.user?.email ? (
              <li>
                <Link
                  href={"/login"}
                  className={`${
                    path === "/login" || path === "/signUp"
                      ? "text-[#E3962B] font-bold scale-125"
                      : "text-white hover:scale-125 hover:text-[#E3962B]"
                  } focus:text-[#E3962B] transition duration-300  font-primary tracking-[2px] z-50 text-xl`}
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
                        : "text-white hover:scale-125 hover:text-[#E3962B]"
                    } focus:text-[#E3962B] transition duration-300  font-primary tracking-[2px] z-50 text-lg`}
                  >
                    <RiShoppingBag4Line className="text-2xl" /> Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/dashboard/${session?.user?.email}`}
                    className={`${
                      path === `/dashboard/${session?.user?.email}`
                        ? "text-[#E3962B] font-bold scale-125"
                        : "text-white hover:scale-125 hover:text-[#E3962B]"
                    } focus:text-[#E3962B] transition duration-300  font-primary tracking-[2px] z-50 text-lg`}
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
  );
};

export default Nav;
