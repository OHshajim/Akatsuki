const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="flex justify-center items-center flex-col mb-10 uppercase font-bold text-black ">
      <p className="text-lg  px-2 py-1 mb-2 bebas-neue tracking-[1px] font-medium">{subHeading}</p>
      <h3 className="md:text-4xl sm:text-2xl text-xl bebas-neue tracking-[2px]">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
