import { AllBlogs } from "@/Services/AllDataLoad/DataLoad";
import BlogCard from "@/Shared/BlogCard";
import SectionBanner from "@/Shared/SectionBanner";
import Link from "next/link";

const Blogs = async () => {
  const data = await AllBlogs();
  if (data?.length <= 0) {
    return null;
  }
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Blog"} title={"Blog"} />

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 container mx-auto py-20">
          {data?.length > 0 &&
            data?.map((blog: object) => (
              <Link key={blog._id} href={`/blog/${blog._id}`}>
                <BlogCard blog={blog} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
