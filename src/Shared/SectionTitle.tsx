type SectionTitleProps = {
  subHeading: string;
  heading: string;
};
const SectionTitle = ({ subHeading, heading }: SectionTitleProps) => {
  return (
    <div className="flex justify-center items-center flex-col mb-10 uppercase font-bold text-black ">
      <p className="text-lg  px-2 py-1 mb-2 font-primary tracking-[1px] font-medium">
        {subHeading}
      </p>
      <h3 className="md:text-4xl sm:text-2xl text-xl font-primary tracking-[3px]">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
