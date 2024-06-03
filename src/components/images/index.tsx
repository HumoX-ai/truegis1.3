import { Place, Image as ImageType } from "@/types/place";
import { Image, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Images = ({ placeData }: { placeData: Place }) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
    setSelectedImage(null);
  };

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
    <div className="flex flex-col items-stretch justify-center">
      <div className="grid grid-cols-3 gap-4">
        {placeData.images.map((photo: ImageType, index: number) => (
          <div
            key={index}
            className="flex items-stretch justify-center"
            onClick={() => handleImageClick(photo.image)}
          >
            <Image
              src={photo.image}
              alt={`photo ${index}`}
              className="w-full h-[112px] object-cover shadow-lg rounded-none cursor-pointer max-w-[7rem]" // max-w-28 in Tailwind
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={visible}
        onOpenChange={closeHandler}
        size="2xl"
        placement="center"
        backdrop="blur"
        classNames={{
          body: "p-0",
        }}
      >
        <ModalContent>
          <>
            <ModalBody className="flex justify-center items-center">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Selected Image"
                  width={500}
                  height={500}
                  onClick={closeHandler}
                />
              )}
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Images;
