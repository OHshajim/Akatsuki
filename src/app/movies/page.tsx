import SectionBanner from "@/Shared/SectionBanner";
import MovieCard from "@/Components/Movies/MovieCard";
import { AllMovies } from "@/Services/AllDataLoad/DataLoad";
import { MovieDataTypes } from "@/Services/PropsValidations/DataType";
import Loading from "@/Components/Loader/Loading";

export const metadata = {
  title: "AKATSUKI | Movies",
  description: "Enjoy you time with AKATSUKI by watching Movies.",
};

const Page = async () => {
  const movies = await AllMovies();

  if (!movies || movies?.length < 1) {
    return (
      <div className="text-center py-20">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <div className="bg-white">
        <SectionBanner subTitle={"Home > Movies"} title={"Movies"} />
        {
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 sm:px-0 px-5 container mx-auto py-20">
            {movies.map((movie: MovieDataTypes) => (
              <div key={movie?._id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Page;
