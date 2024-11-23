import SectionBanner from "@/Shared/SectionBanner";
import { AllBooksData } from "@/Services/AllDataLoad/DataLoad";
import AllBooks from "@/Components/Shop/AllBooks";
import Loading from "@/Components/Loader/Loading";

export const metadata = {
  title: "AKATSUKI | Shop",
  description:
    "We have a big collection of Manga's . Its a Big surprise for manga Fans.",
};

const Page = async () => {
  const Books = await AllBooksData();

  if (Books.length < 1) {
    return <Loading />;
  }
  return (
    <div>
      <SectionBanner subTitle="Home > Shop" title="SHOP" />
      <AllBooks books={Books} />
    </div>
  );
};

export default Page;
