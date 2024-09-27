import Card from "@/Shared/Card";
import SectionTitle from "@/Shared/SectionTitle";
import { popular } from "../../../Public/Popular";
import { BsArrowRight } from "react-icons/bs";
const PopularAnime = () => {
  return (
    <div className="container mx-auto py-20">
      <SectionTitle
        heading={"Top Anime"}
        subHeading={"Popular anime this week"}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {popular.map((popular) => (
          <Card key={popular.product_id} item={popular}></Card>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="btn bg-[#ac2026] border-none rounded-none text-white font-semibold uppercase hover:bg-zinc-600 hover:scale-110 mt-5 px-10">
          View Details <BsArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default PopularAnime;
