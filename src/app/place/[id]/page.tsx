import DetailsSection from "@/components/home/DetailsSection";
import ImageSection from "@/components/home/ImageSection";
import TabsSection from "@/components/home/TabSection";
import Loading from "@/components/Loader";
import type { Place } from "@/types/place";
import { notFound } from "next/navigation";
import React from "react";

export async function fetchPlaceData(id: string): Promise<Place | null> {
  const response = await fetch(`https://admin13.uz/api/place/${id}/`);
  if (!response.ok) {
    return null;
  }
  return response.json();
}

const Place: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;

  // Display loading component while fetching data
  const placeDataPromise = fetchPlaceData(id);

  // Return loading component until data is fetched
  const placeData = await placeDataPromise;

  if (!placeData) {
    notFound();
  }

  return (
    <div className="mx-auto shadow-md overflow-hidden md:max-w-md relative">
      {placeData ? (
        <>
          <ImageSection placeData={placeData} />
          <div className="relative p-4 rounded-t-3xl -mt-6 z-50 light:bg-[#EFEFF4] dark:bg-black bg-[#EFEFF4]">
            <DetailsSection placeData={placeData} />
            <TabsSection placeData={placeData} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Place;
