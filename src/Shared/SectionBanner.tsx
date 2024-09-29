import Image from "next/image";

const SectionBanner = ({ title, subTitle }) => {
  return (
    <div className="relative z-0">
      <Image
        width={3000}
        height={1000}
        src="https://i.ibb.co.com/CQRdzPz/header-bg-copyright.jpg"
        alt="Cover2"
        className="w-full h-auto object-cover"
        priority
      />
      <div className="absolute z-10 top-0 w-full h-full bg-black/50">
        <div className="flex justify-center items-center w-full h-full">
          <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center lg:text-left">
            <h3 className="text-sm md:text-xl lg:text-3xl xl:text-5xl text-white font-bold lg:my-5 bebas-neue">
              {title}
            </h3>
            <p className="text-zinc-300 lg:text-sm md:text-xs text-[5px] text-center">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
