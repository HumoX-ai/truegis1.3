import { Place } from "@/types/place";
import Image from "next/image";
import { useTheme } from "next-themes";

const Images = ({ placeData }: { placeData: Place }) => {
  const { theme } = useTheme();

  if (!placeData.images || placeData.images.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Image
          src={
            theme === "dark" ? "/icons/NoImagesDark.svg" : "/icons/NoImages.svg"
          }
          className="mt-6"
          alt="no image"
          width={200}
          height={200}
        />
        <p className="text-blue-500 text-lg px-4 text-center">
          Hozircha rasmlar yo&#39;q
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {placeData?.images && placeData.images.length > 0
          ? placeData.images.map((photo, index) => (
              <div key={index}>
                <Image
                  src={photo}
                  alt="photo"
                  width={130}
                  height={130}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Images;
