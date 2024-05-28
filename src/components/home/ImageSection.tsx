"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Heart, Share } from "lucide-react";
import { Place } from "@/types/place";

interface WorkDay {
  endTime: string;
  dayOfWeek: number;
  startTime: string;
}

const getWorkingStatus = (
  workDays: WorkDay[],
  currentDay: number,
  currentTime: number
) => {
  const isOpen = workDays.some(
    (day) =>
      day.dayOfWeek === currentDay &&
      currentTime >= parseInt(day.startTime.split(":")[0]) &&
      currentTime < parseInt(day.endTime.split(":")[0])
  );

  const closingTime = workDays.find(
    (day) => day.dayOfWeek === currentDay
  )?.endTime;

  if (isOpen && closingTime) {
    return `Ochiq (${closingTime} gacha)`;
  } else {
    return "Yopiq";
  }
};

const handleShare = (placeData: Place) => {
  if (navigator.share) {
    navigator
      .share({
        title: placeData.name,
        text: `Check out this place: ${placeData.name}`,
        url: window.location.href,
      })
      .catch((error) => console.log("Error sharing", error));
  } else {
    // Fallback for browsers that don't support the Web Share API
    alert("Web Share API is not supported in your browser.");
  }
};

const ImageSection = ({ placeData }: { placeData: Place }) => {
  const workingStatus = placeData.work_days
    ? getWorkingStatus(
        placeData.work_days,
        new Date().getDay(),
        new Date().getHours()
      )
    : "Yopiq";

  const buttonColor = workingStatus.includes("Ochiq")
    ? "bg-green-500"
    : "bg-red-500";

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <Image
          width={340}
          height={340}
          className="h-64 w-full object-cover shadow-lg"
          src={placeData.image || "/icons/logos.svg"}
          alt="Place"
        />
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <Button
        className={`absolute bottom-12 left-6 ${buttonColor} text-white px-6 rounded-lg text-medium`}
      >
        {workingStatus}
      </Button>
      <Heart className="absolute bottom-12 right-16 text-white fill-white" />
      <Share
        className="absolute bottom-12 right-6 text-white cursor-pointer"
        onClick={() => handleShare(placeData)}
      />
    </div>
  );
};

export default ImageSection;
