const Tickets = () => {
  const peckage = [
    {
      id: 1,
      type: "ONE DAY",
      price: 7.0,
      time: "Per/Day",
    },
    {
      id: 2,
      type: "Vip Pass",
      price: 35.0,
      time: "Per/Month",
    },
    {
      id: 3,
      type: "7 Days Pack",
      price: 12.0,
      time: "Per/Week",
    },
  ];
  return (
    <div className="bg-black py-20">
      <div className="flex justify-center items-center flex-col py-10 uppercase font-bold text-white">
        <p className="text-base  px-2 py-1 mb-2 bebas-neue tracking-[1px] font-semibold" >prices</p>
        <h3 className="md:text-3xl sm:text-2xl text-xl bebas-neue tracking-[2px]">Our tickets</h3>
      </div>
      <div className="grid grid-cols-3 container mx-auto gap-10">
        {peckage.map((pack) => (
          <div
            key={pack.id}
            className="bg-zinc-900 p-10 group hover:scale-110 duration-200 delay-75"
          >
            <div className="flex justify-center items-center flex-col mb-10 uppercase font-bold text-white">
              <h4 className="text-base  px-2 py-1 mb-2">{pack.type}</h4>
              <h3 className="md:text-6xl sm:text-4xl text-2xl my-5 group-hover:text-[#6fc9cd]">
                ${pack.price}
              </h3>
              <p className="text-sm font-normal text-zinc-300">{pack.time}</p>
              <button className="btn btn-outline rounded-none font-bold mt-10 border-white text-white group-hover:text-white group-hover:bg-[#6fc9cd] group-hover:scale-110 px-10 group-hover:border-none">
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
        <p className="text-center py-8">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>
    </div>
  );
};

export default Tickets;
