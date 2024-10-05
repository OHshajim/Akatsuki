import Link from "next/link";
import {
  FaDiscord,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black py-5">
      <footer className="footer bg-black container mx-auto py-20 lg:px-10 px-5">
        <aside>
          <h1 className="text-4xl font-bold text-white font-peralta uppercase">
            Akatsuki
          </h1>
        </aside>
        <aside className="flex justify-between w-full flex-col md:flex-row gap-5 font-medium">
          <nav>
            <h3 className="text-xl text-white  border-b pb-1 uppercase bebas-neue tracking-[2px]">
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
            <h3 className="text-xl  border-b pb-1 uppercase bebas-neue tracking-[2px] text-white">
              Menu
            </h3>
            <div className="flex flex-col my-4 text-base ">
              <Link className="link link-hover hover:text-white z-50" href={"/"}>Home</Link>
              <Link className="link link-hover hover:text-white z-50" href={"/shop"}>Shop</Link>
              <Link className="link link-hover hover:text-white z-50" href={"/movies"}>Movies</Link>
              <Link className="link link-hover hover:text-white z-50" href={"/blogs"}>Blogs</Link>
            </div>
          </nav>
          <nav>
            <h3 className="text-xl border-b pb-1 uppercase bebas-neue tracking-[2px] text-white">
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
        <aside className="pt-5">
          <p>
            <span className="text-zinc-300 font-bold font-peralta uppercase">
              Akatsuki
            </span>{" "}
            © {new Date().getFullYear()} - All right reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
