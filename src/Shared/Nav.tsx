"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [activeRoute, setActiveRoute] = useState("/");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-xl bebas-neue">
      {[
        { href: "/", label: "Home" },
        { href: "/shop", label: "Shop" },
        { href: "/blog", label: "Blog" },
        { href: "/movies", label: "Movies" },
        { href: "/join", label: "Join" },
      ].map(({ href, label }) => (
        <li key={label} onClick={()=>setActiveRoute(href)}>
          <Link
            href={href}
            className={`${
              activeRoute === href ? "text-[#E3962B] font-bold " : "text-white"
            } transition-colors duration-300 hover:text-[#E3962B] bebas-neue tracking-[2px]`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="navbar bg-black px-5">
      {/* Brand and Logo */}
      <div className="flex-1">
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
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black transition-all duration-300 z-50">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navList}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
