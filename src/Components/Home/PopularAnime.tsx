import Card from "@/Shared/Card";
import SectionTitle from "@/Shared/SectionTitle";
import { popular } from "../../../Public/Popular";
const PopularAnime = () => {
  return (
    <div className="container mx-auto my-10">
      <SectionTitle
        heading={"Top Anime"}
        subHeading={"Popular anime this week"}
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {popular.map((popular) => (
          <Card key={popular.product_id} item={popular}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularAnime;
