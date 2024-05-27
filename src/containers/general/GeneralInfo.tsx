import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const GeneralInfo = () => {
  return (
    <>
      <p className="text-gray-500 text-sm font-semibold pt-2">
        Joy ma&#39;lumotlari
      </p>
      <div className="mt-2 bg-white dark:bg-[#2B2B2B] p-4 rounded-xl">
        {/* Manzil */}
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
              <p className="text-blue-500">+998 (88) 999-9977</p>
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
              <p className="text-blue-500">+998 (88) 999-9977</p>
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
              <p className="text-blue-500">www.kfc.uz</p>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
      </div>
      <p className="text-gray-500 text-sm font-semibold pt-6">
        Ishlash vaqtlari va qulayliklar
      </p>
      <div className="mt-2 bg-white dark:bg-[#2B2B2B] p-4 rounded-xl">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/icons/time.svg" alt="vaqt" width={40} height={40} />
            <div>
              <p className="font-bold">Ishlash vaqtlari</p>
              <p className="text-gray-500">
                <span className="text-green-500">Ochiq</span> • 09:00-22:00
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
      <div className="mt-2 bg-white dark:bg-[#2B2B2B] p-4 rounded-xl flex justify-between">
        <Image
          src="/icons/social_media/instagram.svg"
          width={48}
          height={48}
          alt="instagram"
        />
        <Image
          src="/icons/social_media/twitter.svg"
          width={48}
          height={48}
          alt="twitter"
        />
        <Image
          src="/icons/social_media/youtube.svg"
          width={48}
          height={48}
          alt="youtube"
        />
        <Image
          src="/icons/social_media/telegram.svg"
          width={48}
          height={48}
          alt="telegram"
        />
        <Image
          src="/icons/social_media/facebook.svg"
          width={48}
          height={48}
          alt="facebook"
        />
      </div>
      <div className="mt-6 bg-white dark:bg-[#2B2B2B] p-4 rounded-xl">
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
      </div>
    </>
  );
};

export default GeneralInfo;
