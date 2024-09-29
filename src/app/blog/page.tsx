import AllBlogs from "@/Components/Blogs/AllBlogs";
import SectionBanner from "@/Shared/SectionBanner";

const page = () => {
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Blog"} title={"Blog"} />
        <AllBlogs />
      </div>
    </div>
  );
};

export default page;
