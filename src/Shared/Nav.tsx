"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";

const Nav = () => {
  const path = usePathname();
  const { data: session } = useSession();
  console.log({ session });

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
            } focus:text-[#E3962B] focus:bg-transparent transition-colors duration-300 hover:text-[#E3962B] bebas-neue tracking-[2px] hover:bg-transparent z-50`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    path === "/dashboard" || (
      <div className="navbar bg-[#000000f5] p-5 items-center ">
        {/* Brand and Logo */}
        <div className="flex-1 z-50">
          <h1 className="text-3xl font-peralta text-white uppercase font-bold">
            Akatsuki
          </h1>
        </div>

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
                  } focus:text-[#E3962B] focus:bg-transparent transition-colors duration-300 hover:text-[#E3962B] bebas-neue tracking-[2px] hover:bg-transparent z-50 text-lg`}
                >
                  Join
                </Link>
              </li>
            ) : (
              <>
                {" "}
                <li>
                  <Link
                    href={"/card"}
                    className={`${
                      path === "/card"
                        ? "text-[#E3962B] font-bold scale-125"
                        : "text-white"
                    } focus:text-[#E3962B] focus:bg-transparent text-2xl transition-colors duration-300 hover:text-[#E3962B] bebas-neue tracking-[2px] hover:bg-transparent z-50`}
                  >
                    <RiShoppingBag4Line />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/dashboard"}
                    className={`${
                      path === "/dashboard"
                        ? "text-[#E3962B] font-bold "
                        : "text-white"
                    } focus:text-[#E3962B] focus:bg-transparent text-2xl transition-colors duration-300 hover:text-[#E3962B] bebas-neue tracking-[2px] hover:bg-transparent z-50`}
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
          <div className="lg:hidden absolute top-16 left-0 w-full bg-black transition-all duration-300 z-50">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {navList}
              <li>
                <Link
                  href={"href"}
                  className={`${
                    path === "/card"
                      ? "text-[#E3962B] font-bold "
                      : "text-white"
                  } focus:text-[#E3962B] focus:bg-transparent transition-colors duration-300 hover:text-[#E3962B] bebas-neue tracking-[2px] hover:bg-transparent z-50`}
                >
                  <RiShoppingBag4Line />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  );
};

export default Nav;
