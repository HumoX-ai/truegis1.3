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

function getWorkingStatus(
  workDays: WorkDay[],
  currentDay: number,
  currentTime: number
) {
  // currentDay 0 (yakshanba) dan 6 (shanba) gacha bo'lsa, uni 1 (dushanba) dan 7 (yakshanba) ga o'zgartiramiz
  currentDay = currentDay === 0 ? 7 : currentDay;

  // Ish kunlarini ko'rib chiqamiz
  for (let i = 0; i < workDays.length; i++) {
    let workDay = workDays[i];

    // Agar hozirgi kun ish kuniga to'g'ri kelsa
    if (workDay.dayOfWeek === currentDay) {
      let startTime = parseInt(workDay.startTime.split(":")[0]);
      let endTime = parseInt(workDay.endTime.split(":")[0]);

      // Tungi vaqtlarda tugash vaqti 24 soatdan oshsa
      if (endTime <= startTime) {
        if (currentTime >= startTime || currentTime < endTime) {
          return (
            <span>
              {workDay.startTime}-{workDay.endTime}
            </span>
          );
        }
      } else {
        if (currentTime >= startTime && currentTime < endTime) {
          return (
            <span>
              {workDay.startTime}-{workDay.endTime}
            </span>
          );
        }
      }
    }
  }

  // Agar hech qaysi ish kuni va vaqt mos kelmasa, Yopiq qaytariladi
  return <span>Yopiq</span>;
}

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

  const workingStatusProps: any = React.isValidElement(workingStatus)
    ? workingStatus.props
    : null;

  console.log(workingStatusProps);

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <Image
          width={340}
          height={340}
          className="h-64 w-full object-cover shadow-lg"
          src={placeData.photo_url || placeData.image || "/icons/logos.svg"}
          alt="Place"
        />
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <Button
        className={`absolute bottom-12 left-6 ${
          !workingStatusProps?.children || workingStatus === "Yopiq"
            ? "bg-red-500"
            : "bg-green-500"
        } text-white px-6 rounded-lg text-medium`}
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
