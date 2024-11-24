import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center my-40">
      <Image
        src="https://i.ibb.co.com/PGnHvBQ/AKATSUKI-LOADER.gif"
        alt="Loading..."
        width={1000}
        height={1000}
        className="max-w-28 rounded-full ring-4 ring-red-700 p-1"
        priority
      />
    </div>
  );
};

export default Loading;
