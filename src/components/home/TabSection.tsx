"use client";
import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import GeneralInfo from "./GeneralInfo";
import { Place, PlaceComments } from "@/types/place";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Comments from "../comments";
import Images from "../images";

const TabsSection = ({
  placeData,
  placeComments,
}: {
  placeData: Place;
  placeComments: PlaceComments[];
}) => {
  return (
    <div className="mt-9">
      <Tabs aria-label="Options" fullWidth size="lg">
        <Tab key="general" title="Umumiy">
          <GeneralInfo placeData={placeData} />
        </Tab>
        <Tab key="comments" title="Sharhlar">
          <Comments placeData={placeData} placeComments={placeComments} />
        </Tab>
        <Tab key="pictures" title="Rasmlar">
          <Images placeData={placeData} />
        </Tab>
        <Tab key="gift" title="Aksiyalar">
          <p>Aksiyalar section content...</p>
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
                <p className="text-gray-500">Biz bilan bog&#39;laning</p>
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
