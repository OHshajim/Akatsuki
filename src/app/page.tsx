import Banner from "@/Components/Home/Banner";
import PopularAnime from "@/Components/Home/PopularAnime";
import RecentAnime from "@/Components/Home/RecentAnime";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <RecentAnime />
      <PopularAnime />
    </div>
  );
}
