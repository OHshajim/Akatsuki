export const dynamic = "force-dynamic";
import Article from "@/Components/Home/Article";
import Banner from "@/Components/Home/Banner";
import PopularMovie from "@/Components/Home/PopularMovie";
import TopRatedAnime from "@/Components/Home/TopRatedAnime";
import RecentPost from "@/Components/Home/RecentPost";
import Team from "@/Components/Home/Team";
import Tickets from "@/Components/Home/Tickets";
import WatchOnline from "@/Components/Home/WatchOnline";
import Testimonials from "@/Components/Home/Testimonials";
import BestSoldBooks from "@/Components/Home/BestSoldBooks";
import CategoryBooks from "@/Components/Home/CategoryBooks";

export const metadata = {
  title: "AKATSUKI | Home",
  description: "Be prepare for Manga and Anime Movies , Articles .",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <TopRatedAnime />
      <CategoryBooks />
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
