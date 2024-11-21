import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const WatchOnline = () => {
  return (
    <div>
      <div className="relative z-0">
        <Image
          width={3000}
          height={1000}
          src="https://i.ibb.co.com/vHvqdBp/Picsart-24-09-26-18-23-23-445.png"
          alt="bg"
          className="w-full h-auto object-cover"
        />
        <div className="absolute z-10 top-0 w-full h-full ">
          <div className="flex justify-center items-center w-full h-full">
            <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center uppercase text-white font-bold">
              <h4 className="lg:text-xl md:text-base text-[5px] font-primary tracking-[1px] font-semibold">
                Watch Online
              </h4>
              <h3 className="text-sm md:text-xl lg:text-3xl xl:text-5xl my-5 font-primary tracking-[2px]">
                We offer the largest anime movies database.
              </h3>
              <Link href={"movies"}>
                <button className="btn font-semibold bg-white border-none rounded-none text-black font-primary tracking-[3px] sm:text-lg hover:bg-zinc-300 hover:scale-110 sm:mt-5 sm:px-10">
                  Watch Now <FaArrowRightLong  className="sm:text-xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOnline;
