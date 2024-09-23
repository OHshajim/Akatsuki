import Image from "next/image";

const SectionBanner = () => {
  return (
    <div className="relative z-0">
      <Image
        width={3000}
        height={1000}
        src="https://i.ibb.co.com/TkfLWJn/banner1.jpg"
        alt=""
        className="w-full h-auto object-cover"
      />
      <div className="absolute z-10 top-0 w-full h-full bg-black/50">
        <div className="flex justify-center items-center w-full h-full">
          <div className="px-5 lg:px-20 max-w-xl lg:max-w-5xl text-center lg:text-left">
            <h4 className="lg:text-xl md:text-base text-[5px] font-semibold">
              Bonus Offer for New Accounts
            </h4>
            <div className="text-sm md:text-xl lg:text-3xl xl:text-5xl text-white font-bold leading-tight xl:leading-[100px] lg:my-5">
              <h3 className="flex justify-center lg:justify-start">
                Taka for new Agents !!!
              </h3>
            </div>
            <p className="text-zinc-300 lg:text-sm md:text-xs text-[5px]">
              This bonus is only for new accounts and is a one-time bonus -
              powered by
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
