import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Image } from "@nextui-org/react";

interface ImageSwiperProps {
  images: string[];
}

const ImageSwiper = ({ images }: ImageSwiperProps) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      spaceBetween={20}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full max-h-96 object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
