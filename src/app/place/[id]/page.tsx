"use client";
import React, { useState } from "react";
import { ChevronRight, Heart, Share } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Tab, Tabs, User } from "@nextui-org/react";
import RatingReview from "@/components/ratingReview";
import Image from "next/image";

const Place = () => {
  const [rating, setRating] = useState(3);

  return (
    <div className="mx-auto shadow-md overflow-hidden md:max-w-md relative">
      <div className="relative">
        <div className="relative overflow-hidden">
          <Image
            width={340}
            height={340}
            className="h-64 w-full object-cover shadow-lg"
            src="https://lh5.googleusercontent.com/p/AF1QipPgVrOos4n2VzR-Ric-kcNiaZ2xwKAUHpMhR6ME"
            alt="Place"
          />
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <Button className="absolute bottom-12 left-6 bg-green-500 text-white px-6 rounded-lg text-medium">
          24 soat ochiq
        </Button>
        <Heart className="absolute bottom-12 right-16 text-white fill-white" />
        <Share className="absolute bottom-12 right-6 text-white" />
      </div>
      <div className="relative p-4 rounded-t-3xl -mt-6 z-50 light:bg-[#EFEFF4] dark:bg-[#2B2B2B] bg-[#EFEFF4] ">
        <div className="bg-white dark:bg-black py-8 px-4 rounded-xl mt-4">
          <div className="flex items-center gap-2">
            <User
              name=""
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                size: "lg",
              }}
            />
            <div>
              <h2 className="text-xl font-medium">KFC Chilonzor filiali</h2>
              <div className="flex gap-2 items-center">
                <RatingReview rating={rating} setRating={setRating} />
                <p className="text-gray-500 font-medium text-sm">
                  4.0 (100 sharhlar)
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
        <div className="mt-4">
          <Tabs aria-label="Options" fullWidth>
            <Tab key="general" title="Umumiy">
              <p className="text-gray-500 text-sm font-semibold pt-2">
                Joy ma&#39;lumotlari
              </p>
              <div className="mt-2 bg-white dark:bg-black p-4 rounded-xl">
                <div className="mb-2 flex items-center justify-between">
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
                        Chilonzor metro chorrahasi, Chilo...
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </div>
                <hr />
                <div className="mb-2 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/taxi.svg"
                      alt="taxi"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-bold">Manzilgacha Yandex-taxi</p>
                      <p className="text-gray-500">
                        4km • 15-20 min • 20,000 so&#39;m
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </div>
                <hr />
                <div className="mb-2 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/phone.svg"
                      alt="taxi"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-bold">Aloqa raqami</p>
                      <p className="text-blue-500">+998 (88) 999-9977</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </div>
                <hr />
                <div className="mb-2 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/phone.svg"
                      alt="taxi"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-bold">Qo&#39;shimcha aloqa raqami</p>
                      <p className="text-blue-500">+998 (88) 999-9977</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </div>
                <hr />
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/website.svg"
                      alt="taxi"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-bold">Websayti</p>
                      <p className="text-blue-500">www.kfc.uz</p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </div>
              </div>
              <p className="text-gray-500 text-sm font-semibold pt-6">
                Ishlash vaqtlari va qulayliklar
              </p>
              <div className="mt-2 bg-white dark:bg-black p-4 rounded-xl">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/time.svg"
                      alt="vaqt"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-bold">Ishlash vaqtlari</p>
                      <p className="text-gray-500">
                        <span className="text-green-500">Ochiq</span> •
                        09:00-22:00
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </div>
                <hr />
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
                        Wi-fi • Karta orqali to’lash • Halol
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </div>
              </div>
              <p className="text-gray-500 text-sm font-semibold pt-6">
                Ijtimoiy tarmoqlarga havola
              </p>
              <div className="mt-2 bg-white dark:bg-black p-4 rounded-xl"></div>
            </Tab>
            <Tab key="comments" title="Sharhlar"></Tab>
            <Tab key="pictures" title="Rasmlar"></Tab>
            <Tab key="gift" title="Aksiyalar"></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Place;
