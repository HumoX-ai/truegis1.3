import React from "react";
import Image from "next/image";

interface ConvenienceItemProps {
  convenience: string;
}

const ConvenienceItem: React.FC<ConvenienceItemProps> = ({ convenience }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 mt-4">
        <div className="flex items-center gap-4">
          <Image
            src={`/icons/convenience/${convenience}.svg`}
            width={30}
            height={30}
            alt={convenience}
          />
          <p>{convenience}</p>
        </div>
        <p className={`text-${convenience ? "green-500" : "red-500"}`}>
          {convenience ? "Mavjud" : "Mavjud emas"}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default ConvenienceItem;
