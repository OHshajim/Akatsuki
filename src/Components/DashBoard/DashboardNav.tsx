"use client";

import { useState } from "react";
import { FaBars, FaBook, FaChartLine, FaFilm, FaTimes, FaUserCircle } from "react-icons/fa";

const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white w-full">
      {/* Mobile Menu Button */}
      <button
        className="sm:hidden p-4 text-white bg-gray-800 fixed top-4 left-4 z-50 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed sm:relative top-0 left-0 w-64 sm:w-1/5 bg-gray-800 p-5 flex flex-col gap-5 shadow-xl min-h-screen transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
      >
        <h1 className="text-xl sm:text-3xl font-Secondary text-white uppercase font-bold text-center sm:text-left">
          Akatsuki
        </h1>
        
        <nav className="flex flex-col gap-4 p-4">
          <a href="#" className="flex items-center gap-3 hover:text-red-400 transition duration-300">
            <FaUserCircle /> Profile
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-red-400 transition duration-300">
            <FaBook /> Manga
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-red-400 transition duration-300">
            <FaFilm /> Anime
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-red-400 transition duration-300">
            <FaChartLine /> Stats
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default DashboardNav;
