import DetailsSection from "@/components/home/DetailsSection";
import ImageSection from "@/components/home/ImageSection";
import TabsSection from "@/components/home/TabSection";
import Loading from "@/components/Loader";
import type { Place } from "@/types/place";
import { notFound } from "next/navigation";
import axios from "axios";

export async function fetchPlaceData(id: string): Promise<Place | null> {
  try {
    const response = await axios.get(`https://admin13.uz/api/place/${id}/`);
    if (response.status !== 200) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching place data:", error);
    return null;
  }
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

  console.log(placeData);
  return (
    <div className="mx-auto overflow-hidden md:max-w-md relative">
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
