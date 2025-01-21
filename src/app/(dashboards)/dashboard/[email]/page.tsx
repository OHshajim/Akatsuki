import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center flex-col my-20">
      <h1 className="text-center text-4xl text-[#6fc9cd] my-10 font-primary tracking-wide">
        Content Will Add Soon !!!
      </h1>
      <Link href={"/"}>
        <button className="btn border-none bg-[#6fc9cd] text-white text-xl ">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default page;
