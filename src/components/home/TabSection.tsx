"use client";
import React, { Key, useCallback, useMemo, useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import GeneralInfo from "./GeneralInfo";
import { Place, PlaceComments, PlacePromotions } from "@/types/place";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Comments from "../comments";
import Images from "../images";
import Promotions from "../promotions";
import { useRouter, useSearchParams } from "next/navigation";

const TabsSection = ({
  placeData,
  placeComments,
  userId,
  placeDataPromotions,
}: {
  placeData: Place;
  placeComments: PlaceComments[];
  userId: number;
  placeDataPromotions: PlacePromotions[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<string>(
    searchParams.get("tab") || "general"
  );
  const handleTabChange = useCallback(
    (key: Key) => {
      setCurrentTab(key as string);
      router.push(`/place/${placeData.id}/${userId}?tab=${key}`);
    },
    [placeData.id, userId, router, setCurrentTab]
  );

  return (
    <div className="mt-9">
      <Tabs
        aria-label="Options"
        fullWidth
        size="lg"
        selectedKey={currentTab}
        onSelectionChange={handleTabChange}
      >
        <Tab key="general" title="Umumiy">
          <GeneralInfo placeData={placeData} />
        </Tab>
        <Tab key="comments" title="Sharhlar">
          <Comments
            placeData={placeData}
            placeComments={placeComments}
            userId={userId}
          />
        </Tab>
        <Tab key="pictures" title="Rasmlar">
          <Images placeData={placeData} />
        </Tab>
        <Tab key="gift" title="Aksiyalar">
          <Promotions placeDataPromotions={placeDataPromotions} />
        </Tab>
      </Tabs>
      <div className="mt-8 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
        <a href="https://t.me/TrueGisSupport_bot">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/question.svg"
                alt="qulayliklar"
                width={40}
                height={40}
              />
              <div>
                <p className="font-bold">Xatolik topildimi</p>
                <span className="text-gray-500">Biz bilan bog&#39;laning</span>
              </div>
            </div>
            <ChevronRight className="text-gray-500" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default TabsSection;
