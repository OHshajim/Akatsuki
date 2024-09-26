import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const WatchOnline = () => {
  return (
    <div>
      <div className="relative z-0">
        <Image
          width={3000}
          height={1000}
          src="https://i.ibb.co.com/vHvqdBp/Picsart-24-09-26-18-23-23-445.png"
          alt=""
          className="w-full h-auto object-cover"
        />
        <div className="absolute z-10 top-0 w-full h-full ">
          <div className="flex justify-center items-center w-full h-full">
            <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center uppercase text-white font-bold">
              <h4 className="lg:text-xl md:text-base text-[5px]">
                Watch Online
              </h4>
              <h3 className="text-sm md:text-xl lg:text-3xl xl:text-5xl my-5">
                We offer the largest anime movies database.
              </h3>
              <div>
                <button className="btn bg-white border-none rounded-none text-black font-semibold uppercase hover:bg-zinc-300 hover:scale-110 mt-5">
                  View Details <BsArrowRight className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchOnline;
