"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loader";

const LocationPermission: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Clear the location data from localStorage on every refresh
    localStorage.removeItem("userLocation");

    const checkPermission = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
            });
          }
        );

        const { latitude, longitude } = position.coords;
        console.log(`User's location: ${latitude}, ${longitude}`);

        // Save the user's location in localStorage (optional)
        localStorage.setItem(
          "userLocation",
          JSON.stringify({ latitude, longitude })
        );
        setLoading(false);
      } catch (error) {
        if (error instanceof GeolocationPositionError) {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("Foydalanuvchi Geolocation so'rovini rad etdi.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Lokatsiya ma'lumotlari mavjud emas.");
              break;
            case error.TIMEOUT:
              console.error(
                "Foydalanuvchi lokatsiyasini olish so'rovi vaqti tugadi."
              );
              break;
          }
        } else {
          console.error("Noma'lum xato yuz berdi.");
        }

        // Foydalanuvchi ruxsat bermadi yoki geolokatsiya ishlamayapti
        router.replace("/404");
      }
    };

    const getUserLocation = async () => {
      await checkPermission();
    };

    if ("geolocation" in navigator) {
      getUserLocation();
    } else {
      console.error("Ushbu brauzer geolocationni qo'llamaydi.");
      router.replace("/404");
    }
  }, [router]);

  if (loading) {
    return <Loading />;
  }

  return null;
};

export default LocationPermission;
