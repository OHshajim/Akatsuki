import Article from "@/Components/Home/Article";
import Banner from "@/Components/Home/Banner";
import BestSelling from "@/Components/Home/BestSelling";
import PopularMovie from "@/Components/Home/PopularMovie";
import TopRatedAnime from "@/Components/Home/TopRatedAnime";
import RecentPost from "@/Components/Home/RecentPost";
import Team from "@/Components/Home/Team";
import Tickets from "@/Components/Home/Tickets";
import WatchOnline from "@/Components/Home/WatchOnline";
import Testimonials from "@/Shared/Testimonials";
import BestSoldBooks from "@/Components/Home/BestSoldBooks";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopRatedAnime />
      <BestSelling />
      <BestSoldBooks />
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
