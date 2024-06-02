"use client";

import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";
import React, { Suspense } from "react";

const MapComponent = () => {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const latitude = parseFloat(lat || "0");
  const longitude = parseFloat(lon || "0");

  return (
    <div className="relative w-full h-screen light:bg-[#EFEFF4] dark:bg-black bg-[#EFEFF4]">
      <YMaps query={{ apikey: "e4384fdc-6d2e-4c6d-90e6-28c788ec8129" }}>
        <Map
          defaultState={{ center: [latitude, longitude], zoom: 20 }}
          className="h-[85vh]"
        >
          <Placemark
            geometry={[latitude, longitude]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/icons/locate.svg",
              iconImageSize: [100, 100],
              iconImageOffset: [-50, -50],
            }}
          />
        </Map>
      </YMaps>
      <div className="m-4 rounded-lg p-2 space-y-2 relative flex items-end justify-between bg-white dark:bg-[#1C1C1D]">
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          legacyBehavior
        >
          <a
            target="_blank"
            className="flex flex-col items-center hover:underline text-sm"
          >
            <Image
              src="/icons/googlemap.svg"
              width={50}
              height={50}
              alt="googlemap"
            />
            Google Map
          </a>
        </Link>
        <Link
          href={`https://maps.yandex.com/?rtext=~${latitude},${longitude}&rtt=auto`}
          legacyBehavior
        >
          <a
            target="_blank"
            className="flex flex-col items-center hover:underline text-sm"
          >
            <Image
              src="/icons/yandexgo.svg"
              width={50}
              height={50}
              alt="googlemap"
            />
            Yandex GO
          </a>
        </Link>
        <Link
          href={`https://maps.yandex.com/?rtext=~${latitude},${longitude}&rtt=auto`}
          legacyBehavior
        >
          <a
            target="_blank"
            className="flex flex-col items-center hover:underline text-sm"
          >
            <Image
              src="/icons/yandexmap.svg"
              width={50}
              height={50}
              alt="googlemap"
            />
            Yandex Map
          </a>
        </Link>
        <Link
          href={`http://maps.apple.com/?daddr=${latitude},${longitude}`}
          legacyBehavior
        >
          <a
            target="_blank"
            className="flex flex-col items-center hover:underline text-sm"
          >
            <Image
              src="/icons/applemap.svg"
              width={50}
              height={50}
              alt="googlemap"
            />
            Apple Map
          </a>
        </Link>
      </div>
    </div>
  );
};

const MapPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MapComponent />
    </Suspense>
  );
};

export default MapPage;
