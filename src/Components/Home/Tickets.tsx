const Tickets = () => {
  const packages = [
    {
      id: 1,
      type: "Weekly package",
      price: 12.99,
      time: "Per/Week",
    },
    {
      id: 2,
      type: "Vip Pass",
      price: 499.99,
      time: "Unlimited",
    },
    {
      id: 3,
      type: "Monthly Package",
      price: 49.99,
      time: "Per/Month",
    },
  ];

  return (
    <div className="bg-black py-20">
      <div className="flex justify-center items-center flex-col py-10 uppercase font-bold text-white">
        <p className="text-base px-2 py-1 mb-2 bebas-neue tracking-[1px] font-semibold">
          prices
        </p>
        <h3 className="md:text-3xl sm:text-2xl text-xl bebas-neue tracking-[2px]">
          Our tickets
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-10">
        {packages.map((pack) => (
          <div
            key={pack.id}
            className="bg-zinc-900 p-10 group hover:scale-105 duration-300 relative overflow-hidden"
          >
            <div className="flex justify-center items-center flex-col mb-10 uppercase font-bold text-white">
              <h4 className="text-base px-2 py-1 mb-2">{pack.type}</h4>
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
      <p className="text-center text-white mt-16">
        Be comfortable with Akatsuki - Do not sacrifice with comfort
      </p>
    </div>
  );
};

export default Tickets;
