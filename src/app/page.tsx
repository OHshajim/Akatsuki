import Banner from "@/Components/Home/Banner";
import PopularAnime from "@/Components/Home/PopularAnime";
import PopularMovie from "@/Components/Home/PopularMovie";
import RecentAnime from "@/Components/Home/RecentAnime";
import WatchOnline from "@/Components/Home/WatchOnline";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <RecentAnime />
      <PopularAnime />
      <WatchOnline />
      <PopularMovie />
    </div>
  );
}
