"use client";
import React, { useState } from "react";
import { User } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import RatingReview from "@/components/ratingReview";
import { Place } from "@/types/place";

const DetailsSection = ({ placeData }: { placeData: Place }) => {
  return (
    <div className="bg-white dark:bg-[rgb(28,28,29)] py-6 px-3 rounded-xl mt-4">
      <div className="flex items-center gap-2">
        <User
          name=""
          avatarProps={{
            src: "/icons/logos.svg",
            size: "lg",
          }}
        />
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium">{placeData.name}</h2>
          <div className="flex gap-2 items-center">
            <RatingReview
              rating={placeData?.rating || 0}
              setRating={() => {}}
            />
            <p className="text-gray-500 font-medium text-sm pt-1">
              {placeData?.rating || 0} (120 ta sharh)
            </p>
          </div>
        </div>
      </div>
      <Button
        fullWidth
        className="bg-blue-500 text-white py-6 rounded-xl mt-6 font-semibold"
      >
        Joy buyurtma qilish
      </Button>
    </div>
  );
};

export default DetailsSection;
