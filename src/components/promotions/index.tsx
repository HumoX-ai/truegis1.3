import React from "react";
import { PlacePromotions } from "@/types/place";
import ImageSwiper from "./ImageSwiper";
import { Divider, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";

const Promotions = ({
  placeDataPromotions,
}: {
  placeDataPromotions: PlacePromotions[];
}) => {
  const { theme } = useTheme();

  if (!placeDataPromotions || placeDataPromotions.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Image
          src={
            theme === "dark"
              ? "/icons/PromotionsDark.svg"
              : "/icons/PromotionsLight.svg"
          }
          className="mt-6"
          alt="no image"
          width={200}
          height={200}
        />
        <p className="text-blue-500 text-lg px-4 text-center">
          Hozircha aksiyalar yo&#39;q
        </p>
      </div>
    );
  }

  return (
    <div>
      {placeDataPromotions.map((promotion, index) => (
        <div key={index}>
          {promotion.media && promotion.media.length > 0 && (
            <>
              <ImageSwiper
                images={promotion.media.map((media) => media.media!)}
              />
              <p className="text-gray-500 text-md text-md font-medium pt-6 px-4">
                Aksiya va muddati haqida
              </p>
              <div className="mt-2 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/promotion.svg"
                      alt="vaqt"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p>
                        <p className="font-semibold">Aksiya</p>
                        <span className="text-red-500 line-through">
                          {promotion?.price} so&#39;m
                        </span>{" "}
                        <span className="text-green-500">
                          {promotion?.discount_price} so&#39;m
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/timePromote.svg"
                      alt="qulayliklar"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-semibold">Aksiya muddati</p>
                      <p className="text-gray-500">
                        {promotion.start_date?.replaceAll("-", ".")} -{" "}
                        {promotion.end_date?.replaceAll("-", ".")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-md font-medium pt-6 px-4">
                Aksiya haqida batafsil ma&#39;lumot
              </p>
              <div className="mt-2 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
                <div
                  dangerouslySetInnerHTML={{
                    __html: promotion?.description || "",
                  }}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Promotions;
