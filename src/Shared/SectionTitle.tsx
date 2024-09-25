const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-20 mb-10 uppercase font-bold text-black">
      <p className="text-base  px-2 py-1 mb-2">{subHeading}</p>
      <h3 className="md:text-3xl sm:text-2xl text-xl">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
