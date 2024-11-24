import { AllBlogs } from "@/Services/AllDataLoad/DataLoad";
import BlogCard from "@/Components/Blog/BlogCard";
import SectionBanner from "@/Shared/SectionBanner";
import Link from "next/link";
import { BlogDataTypes } from "@/Services/PropsValidations/DataType";
import Loading from "@/Components/Loader/Loading";

export const metadata = {
  title: "AKATSUKI | Blogs",
  description: "Important News for Anime Fans .",
};
const Blogs = async () => {
  const data = await AllBlogs();
  if (!data || data?.length === 0) {
    return (
      <div className="text-center py-20">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <SectionBanner subTitle={"Home > Blog"} title={"Blog"} />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 container mx-auto py-20 sm:px-0 px-5">
        {data?.map((blog: BlogDataTypes) => (
          <Link key={blog._id} href={`/blog/${blog._id}`}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
