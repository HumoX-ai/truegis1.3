import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Heart, Share } from "lucide-react";

const ImageSection = () => {
  return (
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
  );
};

export default ImageSection;
