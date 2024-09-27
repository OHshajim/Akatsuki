import AllBooks from "@/Components/Shop/AllBooks";
import SectionBanner from "@/Shared/SectionBanner";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <SectionBanner subTitle={"Home > Shop"} title={"SHOP"} />
      <AllBooks />
    </div>
  );
};

export default page;
