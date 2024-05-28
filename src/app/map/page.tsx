"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import L from "leaflet";
import Image from "next/image";
import "leaflet-providers"; // Import the leaflet-providers package

// Customize the default marker icon (Leaflet uses images that won't load by default in Next.js)

const customIcon = new L.Icon({
  iconUrl: "/icons/locate.svg",
  iconRetinaUrl: "/icons/locate.svg",
  iconSize: [100, 100], // Icon size
  iconAnchor: [50, 50], // Anchor point
  popupAnchor: [0, -50], // Popup position
  tooltipAnchor: [16, -28], // Tooltip position
});

const MapPage = () => {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const latitude = parseFloat(lat || "0");
  const longitude = parseFloat(lon || "0");

  return (
    <div className="relative w-full h-screen light:bg-[#EFEFF4] dark:bg-black bg-[#EFEFF4]">
      <MapContainer
        center={[latitude, longitude]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-[80%]"
      >
        <TileLayer
          // Replace the above URL with the Yandex Maps tile layer URL
          url="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.05.12-0&x={x}&y={y}&z={z}&scale=1.0&lang=en_US"
        />
        <Marker position={[latitude, longitude]} icon={customIcon} />
      </MapContainer>
      <div className="m-2 rounded-lg p-2 space-y-2 flex items-end justify-between bg-white dark:bg-[#1C1C1D]">
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

export default MapPage;
