import DetailsSection from "@/containers/general/DetailsSection";
import ImageSection from "@/containers/general/ImageSection";
import TabsSection from "@/containers/general/TabSection";
import React from "react";

const Place = () => {
  return (
    <div className="mx-auto shadow-md overflow-hidden md:max-w-md relative">
      <ImageSection />
      <div className="relative p-4 rounded-t-3xl -mt-6 z-50 light:bg-[#EFEFF4] dark:bg-black bg-[#EFEFF4]">
        <DetailsSection />
        <TabsSection />
      </div>
    </div>
  );
};

export default Place;
