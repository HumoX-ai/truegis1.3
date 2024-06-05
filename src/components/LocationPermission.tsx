"use client";

import { useEffect, useState } from "react";
import Loading from "@/components/Loader";

const LocationPermission: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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

        // Set the error message if permission is denied or geolocation fails
        setErrorMessage("Lokatsiyani yoqishingiz kerak");
      }
    };

    const getUserLocation = async () => {
      await checkPermission();
    };

    if ("geolocation" in navigator) {
      // Start a timeout to show the error message after 10 seconds
      const timeoutId = setTimeout(() => {
        setErrorMessage("Lokatsiyani yoqishingiz kerak");
      }, 10000);

      getUserLocation().then(() => clearTimeout(timeoutId));
    } else {
      console.error("Ushbu brauzer geolocationni qo'llamaydi.");
      setErrorMessage("Ushbu brauzer geolocationni qo'llamaydi.");
    }
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
        {errorMessage && <p>{errorMessage}</p>}
      </>
    );
  }

  return null;
};

export default LocationPermission;
