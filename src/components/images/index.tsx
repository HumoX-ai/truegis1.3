import { Place, Image as ImageType } from "@/types/place";
import { Image, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useState } from "react";

const Images = ({ placeData }: { placeData: Place }) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  console.log(visible);

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
    <div>
      <div className="grid grid-cols-3 gap-4">
        {placeData.images.map((photo: ImageType, index: number) => (
          <div
            key={index}
            className="w-full flex items-stretch"
            onClick={() => handleImageClick(photo.image)}
          >
            <Image
              width={130}
              height={130}
              src={photo.image}
              alt={`photo ${index}`}
              className="w-full h-full object-cover shadow-lg rounded-none cursor-pointer"
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={visible}
        onOpenChange={closeHandler}
        size="2xl"
        hideCloseButton
        placement="center"
        backdrop="blur"
        classNames={{
          body: "p-0",
        }}
      >
        <ModalContent>
          <>
            <ModalBody>
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt="Selected Image"
                  width={500}
                  height={500}
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
