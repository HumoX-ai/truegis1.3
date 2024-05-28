"use client";

import React, { useState } from "react";
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
    const shareUrl = window.location.href;
    const shareInput = document.createElement("textarea");
    shareInput.value = shareUrl;
    document.body.appendChild(shareInput);
    shareInput.select();
    document.execCommand("copy");
    document.body.removeChild(shareInput);
    alert("Link nusxalandi: " + shareUrl);
  }
};
const ImageSection = ({ placeData }: { placeData: Place }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    // Agar kerak bo'lsa, like holatini serverga yuborish yoki saqlash uchun qo'shimcha kod yozish mumkin
  };
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
      <Heart
        className={`absolute bottom-12 right-16 ${
          isLiked ? "text-red-500" : "text-white"
        } cursor-pointer ${isLiked ? "fill-red-500" : "fill-white"}`}
        onClick={toggleLike}
      />
      <Share
        className="absolute bottom-12 right-6 text-white cursor-pointer"
        onClick={() => handleShare(placeData)}
      />
    </div>
  );
};

export default ImageSection;
