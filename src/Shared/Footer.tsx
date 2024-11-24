"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaDiscord,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  const path = usePathname();
  return (
    path === "/dashboard" || (
      <div className="bg-black py-5 text-zinc-300">
        <footer className="footer bg-black container mx-auto py-20 lg:px-10 px-5">
          <aside className="flex justify-center items-center flex-col">
            <Image
              alt="Logo"
              src="https://i.ibb.co.com/sWm5kRP/AKATSUKI-Logo.jpg"
              width={500}
              height={500}
              className="sm:max-w-52 max-w-40"
            />
            <h1 className="sm:text-4xl text-3xl font-bold text-white font-Secondary z-50">
              AKATSUKI
            </h1>
          </aside>
          <aside className="flex justify-between w-full flex-col md:flex-row gap-5 font-medium">
            <nav>
              <h3 className="text-xl text-white  border-b pb-1 uppercase font-primary tracking-[2px]">
                Social
              </h3>
              <div className="flex  gap-5 text-3xl  items-center justify-center mt-3">
                <a
                  href="https://www.linkedin.com/in/shajim-ahmed/"
                  className="hover:text-white transform transition duration-500 hover:scale-105  animate-fade-in"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://discord.com/channels/shajim_ahmed"
                  className="hover:text-white transform transition duration-500 hover:scale-105  animate-fade-in"
                >
                  <FaDiscord />
                </a>
                <a
                  href="https://www.instagram.com/shajim_78/#"
                  className="hover:text-white transform transition duration-500 hover:scale-105  animate-fade-in"
                >
                  <FaInstagram />
                </a>
              </div>
            </nav>
            <nav>
              <h3 className="text-xl  border-b pb-1 uppercase font-primary tracking-[2px] text-white">
                Menu
              </h3>
              <div className="flex flex-col my-4 text-base ">
                <Link
                  className="link link-hover hover:text-white z-50"
                  href={"/"}
                >
                  Home
                </Link>
                <Link
                  className="link link-hover hover:text-white z-50"
                  href={"/shop"}
                >
                  Shop
                </Link>
                <Link
                  className="link link-hover hover:text-white z-50"
                  href={"/movies"}
                >
                  Movies
                </Link>
                <Link
                  className="link link-hover hover:text-white z-50"
                  href={"/blogs"}
                >
                  Blogs
                </Link>
              </div>
            </nav>
            <nav>
              <h3 className="text-xl border-b pb-1 uppercase font-primary tracking-[2px] text-white">
                Say Hello
              </h3>
              <div className="my-4 space-y-2 flex flex-col items-start gap-2">
                <h3 className="hover:text-white transform transition duration-500 hover:scale-105  animate-fade-in flex items-center gap-2 ">
                  <FaGoogle className="text-2xl" /> ajshajimmax@gmail.com
                </h3>
                <h3 className="hover:text-white transform transition duration-500 hover:scale-105  animate-fade-in flex items-center gap-2 ">
                  <FaWhatsapp className="text-2xl" /> +8801741942510
                </h3>
                <h3 className="hover:text-white transform transition duration-500 hover:scale-105  animate-fade-in flex items-center gap-2 ">
                  <MdLocationOn className="text-2xl" /> Narsingdi, Bangladesh
                </h3>
              </div>
            </nav>
          </aside>
        </footer>
        <footer className=" bg-black container mx-auto px-5">
          <hr />
          <aside className="pt-5 text-zinc-300">
            <p>
              <span className="z-50 text-white font-bold font-Secondary ">
                AKATSUKI
              </span>{" "}
              © {new Date().getFullYear()} - All right reserved.
            </p>
          </aside>
        </footer>
      </div>
    )
  );
};

export default Footer;
