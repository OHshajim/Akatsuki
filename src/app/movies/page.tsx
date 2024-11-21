import SectionBanner from "@/Shared/SectionBanner";
import MovieCard from "@/Components/Movies/MovieCard";
import { AllMovies } from "@/Services/AllDataLoad/DataLoad";

const Page = async () => {
  const data = await AllMovies();
  if (data?.length <= 0) {
    return null;
  }
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Movies"} title={"Movies"} />
        {data.length > 0 && (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 sm:px-0 px-5 container mx-auto py-20">
            {data?.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
