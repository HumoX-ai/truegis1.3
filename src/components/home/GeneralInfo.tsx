"use client";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Place } from "@/types/place";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";

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

  if (isOpen) {
    return (
      <div>
        <p className="font-bold">Ishlash vaqtlari</p>
        <p className="text-gray-500">
          <span className="text-green-500">Ochiq</span>{" "}
          {`(${closingTime} gacha)`}
        </p>
      </div>
    );
  } else {
    const nextOpeningDay = workDays.find(
      (day) =>
        day.dayOfWeek > currentDay || (day.dayOfWeek === 0 && currentDay === 6)
    );
    const dayNames = [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",
    ];
    const nextOpeningDayName = nextOpeningDay
      ? dayNames[nextOpeningDay.dayOfWeek]
      : "Keyingi ochilish kunini aniqlay olmadim";
    const nextOpeningTime = nextOpeningDay?.startTime || "00:00";

    return (
      <div>
        <p className="font-bold">Ishlash vaqtlari</p>
        <p className="text-gray-500">
          <span className="text-red-500">Yopiq</span>{" "}
          {/* {`(${nextOpeningDayName}, ${nextOpeningTime} dan)`} */}
        </p>
      </div>
    );
  }
};

const GeneralInfo = ({ placeData }: { placeData: Place }) => {
  const router = useRouter();

  const handleMapClick = () => {
    router.push(`/map?lat=${placeData.latitude}&lon=${placeData.longitude}`);
  };

  const socialMedia = [
    {
      name: "instagram",
      url: placeData.instagram,
      icon: "/icons/social_media/instagram.svg",
    },
    {
      name: "twitter",
      url: placeData.twitter,
      icon: "/icons/social_media/twitter.svg",
    },
    {
      name: "youtube",
      url: placeData.youtube,
      icon: "/icons/social_media/youtube.svg",
    },
    {
      name: "telegram",
      url: placeData.telegram,
      icon: "/icons/social_media/telegram.svg",
    },
    {
      name: "facebook",
      url: placeData.facebook,
      icon: "/icons/social_media/facebook.svg",
    },
  ];

  console.log(placeData);

  return (
    <>
      <p className="text-gray-500 text-md font-medium pt-4 px-4">
        Joy ma&#39;lumotlari
      </p>
      <div className="mt-2 mb-2 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
        {/* Manzil */}
        <div
          className="mb-2 flex items-center justify-between"
          onClick={handleMapClick}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/icons/location.svg"
              alt="location"
              width={40}
              height={40}
            />
            <div>
              <p className="font-bold">Manzil</p>
              <p className="text-gray-500">
                {placeData.full_address.slice(0, 30) + "..." ||
                  "Manzil mavjud emas"}
              </p>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
        <hr />
        {/* Manzilgacha Yandex-taxi */}
        <div className="mb-2 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/icons/taxi.svg" alt="taxi" width={40} height={40} />
            <div>
              <p className="font-bold">Manzilgacha Yandex-taxi</p>
              <p className="text-gray-500">4km • 15-20 min • 20,000 so&#39;m</p>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
        <hr />
        {/* Aloqa raqami */}
        <div className="mb-2 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/icons/phone.svg" alt="phone" width={40} height={40} />
            <div>
              <p className="font-bold">Aloqa raqami</p>
              <a
                href={`tel:${placeData.phone || ""}`}
                className="text-blue-500 hover:underline"
              >
                {placeData.phone || "Raqam mavjud emas"}
              </a>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
        <hr />
        {/* Qo'shimcha aloqa raqami */}
        <div className="mb-2 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/icons/phone.svg" alt="phone" width={40} height={40} />
            <div>
              <p className="font-bold">Qo&#39;shimcha aloqa raqami</p>
              <a
                href={`tel:${placeData.phone2 || ""}`}
                className="text-blue-500 hover:underline"
              >
                {placeData.phone2 || "Raqam mavjud emas"}
              </a>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
        <hr />
        {/* Web sayti */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/website.svg"
              alt="website"
              width={40}
              height={40}
            />
            <div>
              <p className="font-bold">Web sayti</p>
              <p className="text-blue-500">
                <a href={placeData.website || ""} className="hover:underline">
                  {placeData.website.slice(0, 30) + "..." ||
                    "Vebsayt mavjud emas"}
                </a>
              </p>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
      </div>
      <p className="text-gray-500 text-md font-medium pt-6 px-4">
        Ishlash vaqtlari va qulayliklar
      </p>
      <div className="mt-2 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
        <Link href={`/place/${placeData.id}/work-time`}>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/icons/time.svg" alt="vaqt" width={40} height={40} />
              <div>
                <p>
                  <span>
                    {getWorkingStatus(
                      placeData.work_days,
                      new Date().getDay(),
                      new Date().getHours()
                    )}
                  </span>{" "}
                </p>
              </div>
            </div>
            <ChevronRight className="text-gray-500" />
          </div>
        </Link>
        <hr />
        <Link href={`/place/${placeData.id}/convenience`}>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/convenience.svg"
                alt="qulayliklar"
                width={40}
                height={40}
              />
              <div>
                <p className="font-bold">Qulayliklar</p>
                <p className="text-gray-500">
                  {placeData?.about?.join(" • ") || "Ma'lumot majvud emas"}
                </p>
              </div>
            </div>
            <ChevronRight className="text-gray-500" />
          </div>
        </Link>
      </div>
      <p className="text-gray-500 text-md font-medium pt-6 px-4">
        Ijtimoiy tarmoqlarga havola
      </p>
      <div className="mt-2 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl flex justify-between">
        {socialMedia.map((media, index) => (
          <Button
            key={index}
            isIconOnly
            variant="light"
            size="lg"
            disabled={!media.url}
            style={{ opacity: media.url ? 1 : 0.5 }}
            onClick={() => media.url && window.open(media.url, "_blank")}
          >
            <Image src={media.icon} width={48} height={48} alt={media.name} />
          </Button>
        ))}
      </div>
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
    </>
  );
};

export default GeneralInfo;
