import AllBlogs from "@/Components/Blogs/AllBlogs";
import SectionBanner from "@/Shared/SectionBanner";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Blogs"} title={"Blogs"} />
        <AllBlogs />
      </div>
    </div>
  );
};

export default page;
