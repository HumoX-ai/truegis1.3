"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Place } from "@/types/place";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";

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
            <div>
              <p className="font-bold">Ishlash vaqtlari</p>
              <p className="text-green-500">
                Ochiq{" "}
                <span className="text-gray-500">
                  • {workDay.startTime}-{workDay.endTime}
                </span>
              </p>
            </div>
          );
        }
      } else {
        if (currentTime >= startTime && currentTime < endTime) {
          return `Ochiq (${workDay.startTime} dan ${workDay.endTime} gacha)`;
        }
      }
    }
  }

  // Agar hech qaysi ish kuni va vaqt mos kelmasa, Yopiq qaytariladi
  return (
    <div>
      <p className="font-bold">Ishlash vaqtlari</p>
      <p className="text-red-500">Yopiq</p>
    </div>
  );
}
const GeneralInfo = ({ placeData }: { placeData: Place }) => {
  const router = useRouter();
  const [taxiInfo, setTaxiInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  console.log(taxiInfo);

  const handleMapClick = () => {
    if (placeData.longitude && placeData.latitude) {
      router.push(`/map?lat=${placeData.latitude}&lon=${placeData.longitude}`);
    } else {
      return;
    }
  };

  const socialMedia = [
    {
      name: "instagram",
      url: placeData.instagram,
      icon: "/icons/social_media/Instagram.svg",
    },
    {
      name: "twitter",
      url: placeData.twitter,
      icon: "/icons/social_media/Twitter.svg",
    },
    {
      name: "youtube",
      url: placeData.youtube,
      icon: "/icons/social_media/Youtube.svg",
    },
    {
      name: "telegram",
      url: placeData.telegram,
      icon: "/icons/social_media/Telegram.svg",
    },
    {
      name: "facebook",
      url: placeData.facebook,
      icon: "/icons/social_media/Facebook.svg",
    },
  ];

  const getUserLong = localStorage.getItem("userLocation");
  const userLocation = JSON.parse(getUserLong as string);
  const userLongitude = userLocation?.longitude;
  const userLatitude = userLocation?.latitude;

  const placeLongitute = placeData?.longitude;
  const placeLatitude = placeData?.latitude;

  useEffect(() => {
    const fetchTaxiInfo = async () => {
      if (userLongitude && userLatitude && placeLongitute && placeLatitude) {
        try {
          const response = await fetch(
            `https://taxi-routeinfo.taxi.yandex.net/taxi_info?rll=${userLongitude},${userLatitude}~${placeLongitute},${placeLatitude}&clid=ak231124&apikey=SjFZnMpqqiBMsjOthnPlbZVOGvrTJkFAdArwsnr&class=business`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );
          const data = await response.json();
          setTaxiInfo(data);
        } catch (error) {
          console.error("Error fetching taxi info:", error);
        }
        setLoading(false);
      }
    };

    fetchTaxiInfo();
  }, [userLongitude, userLatitude, placeLongitute, placeLatitude]);

  const handleTaxiClick = () => {
    const yandexTaxiUrl = `yandextaxi://route?start-lat=${userLatitude}&start-lon=${userLongitude}&end-lat=${placeLatitude}&end-lon=${placeLongitute}&lang=uz`;
    window.location.href = yandexTaxiUrl;
  };

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
                {placeData?.full_address?.length > 30
                  ? `${placeData.full_address.slice(0, 28)}...`
                  : placeData?.full_address || "Manzil mavjud emas"}
              </p>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
        <Divider />
        {/* Manzilgacha Yandex-taxi */}
        <div
          className="mb-2 mt-2 flex items-center justify-between"
          onClick={handleTaxiClick}
        >
          <div className="flex items-center gap-3">
            <Image src="/icons/taxi.svg" alt="taxi" width={40} height={40} />
            <div>
              <p className="font-bold">Manzilgacha Yandex-taxi</p>
              {loading ? (
                <p className="text-gray-500">Yuklanmoqda...</p>
              ) : taxiInfo ? (
                <p className="text-gray-500">
                  {taxiInfo.distance?.toFixed(0) / 1000} km •{" "}
                  {Math.round(taxiInfo.options[0].waiting_time.toFixed(2) / 60)}{" "}
                  soat • {taxiInfo.options[0].price} so&#39;m
                </p>
              ) : (
                <p className="text-red-500">Ma&#39;lumot yuklanmadi</p>
              )}
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
        <Divider />
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
        <Divider />
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
        <Divider />
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
                  {placeData?.website?.slice(0, 30) || "Vebsayt mavjud emas"}
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
                {getWorkingStatus(
                  placeData?.work_days || [],
                  new Date().getDay(),
                  new Date().getHours()
                )}
              </div>
            </div>
            <ChevronRight className="text-gray-500" />
          </div>
        </Link>
        <Divider />
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
    </>
  );
};

export default GeneralInfo;
