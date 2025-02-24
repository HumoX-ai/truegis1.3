import DetailsSection from "@/components/home/DetailsSection";
import ImageSection from "@/components/home/ImageSection";
import TabsSection from "@/components/home/TabSection";
import Loading from "@/components/Loader";
import { notFound } from "next/navigation";
import { fetchPlaceData } from "@/lib/fetchPlaceData";
import { fetchPlaceComments } from "@/lib/fetchPlaceComments";
import { fetchPlacePromotions } from "@/lib/fetchPlacePromotions";
import LocationPermission from "@/components/LocationPermission";

const Place: React.FC<{ params: { id: string; userId: number } }> = async ({
  params,
}) => {
  const { id, userId } = params;

  const placeDataPromise = fetchPlaceData(id);
  const placeData = await placeDataPromise;

  const placeDataComments = fetchPlaceComments(id);
  const placeComments = await placeDataComments;

  const placeDataCommentsCount = placeComments?.length || 0;

  const placeDataPromotions = await fetchPlacePromotions(id);

  if (!placeData) {
    notFound();
  }

  return (
    <div className="mx-auto overflow-hidden md:max-w-md relative">
      <LocationPermission />
      {placeData ? (
        <>
          <ImageSection placeData={placeData} />
          <div className="relative p-4 rounded-t-3xl -mt-6 z-50 light:bg-[#EFEFF4] dark:bg-black bg-[#EFEFF4]">
            <DetailsSection
              placeData={placeData}
              commentCount={placeDataCommentsCount}
            />
            <TabsSection
              placeData={placeData}
              placeComments={placeComments!}
              userId={userId}
              placeDataPromotions={placeDataPromotions!}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Place;
