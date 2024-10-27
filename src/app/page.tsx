import Article from "@/Components/Home/Article";
import Banner from "@/Components/Home/Banner";
import BestSelling from "@/Components/Home/BestSelling";
import PopularAnime from "@/Components/Home/PopularAnime";
import PopularMovie from "@/Components/Home/PopularMovie";
import TopRatedAnime from "@/Components/Home/RecentAnime";
import RecentPost from "@/Components/Home/RecentPost";
import Team from "@/Components/Home/Team";
import Tickets from "@/Components/Home/Tickets";
import WatchOnline from "@/Components/Home/WatchOnline";
import Testimonials from "@/Shared/Testimonials";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <TopRatedAnime />
      <BestSelling />
      <PopularAnime />
      <WatchOnline />
      <PopularMovie />
      <Tickets />
      <Testimonials />
      <Article />
      <RecentPost />
      <Team />
    </div>
  );
}
