"use client";
import React from "react";
import { Tab, Tabs } from "@nextui-org/react";
import GeneralInfo from "./GeneralInfo";
import { Place } from "@/types/place";

const TabsSection = ({ placeData }: { placeData: Place }) => {
  return (
    <div className="mt-9">
      <Tabs aria-label="Options" fullWidth size="lg">
        <Tab key="general" title="Umumiy">
          <GeneralInfo placeData={placeData} />
        </Tab>
        <Tab key="comments" title="Sharhlar">
          <p>Sharhlar section content...</p>
        </Tab>
        <Tab key="pictures" title="Rasmlar">
          <p>Rasmlar section content...</p>
        </Tab>
        <Tab key="gift" title="Aksiyalar">
          <p>Aksiyalar section content...</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsSection;
