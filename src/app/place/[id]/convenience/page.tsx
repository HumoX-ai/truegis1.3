import React from "react";
import { Place, PlaceComments } from "@/types/place";
import UserProfile from "@/components/work-time/UserProfile";
import ConvenienceItem from "@/components/convenience/ConvenienceItem";
import ErrorLink from "@/components/convenience/ErrorLink";
import { fetchPlaceData } from "@/lib/fetchPlaceData";
import { fetchPlaceComments } from "@/lib/fetchPlaceComments";

interface ConvenienceProps {
  params: {
    id: string;
  };
}

const Convenience: React.FC<ConvenienceProps> = async ({ params }) => {
  const { id } = params;

  const data: Place | null = await fetchPlaceData(id);
  const commentCount: PlaceComments[] | null = await fetchPlaceComments(id);
  console.log(data?.about);

  const filteredConveniences = data?.about
    ? Array.from(new Set(data.about.filter((item) => item !== "bathroom")))
    : null;

  return (
    <div className="bg-[#EFEFF4] dark:bg-[#000] px-4 md:max-w-md">
      <div className="overflow-hidden md:max-w-md relative h-screen">
        <div className="dark:bg-[#1C1C1D] bg-white py-6 px-3 rounded-xl mt-4">
          <UserProfile
            name={data?.name || ""}
            rating={data?.rating || 0}
            reviewCount={commentCount?.length || 0}
            avatarSrc="/icons/logos.svg"
          />
        </div>
        <p className="text-gray-500 text-md font-medium pt-6 px-4">
          Joy qulayliklari
        </p>
        <div className="mt-2 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
          {filteredConveniences && filteredConveniences.length > 0 ? (
            <>
              {filteredConveniences.map((convenience, index) => (
                <ConvenienceItem key={index} convenience={convenience} />
              ))}
            </>
          ) : (
            "Ma'lumot mavjud emas"
          )}
        </div>
        <ErrorLink />
      </div>
    </div>
  );
};

export default Convenience;
