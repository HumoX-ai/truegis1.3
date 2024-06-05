// components/Loading.tsx
import Image from "next/image";
import React from "react";

const Loading: React.FC = () => (
  <div className="fixed top-0 left-0 w-screen h-screen bg-[#EFEFF4] dark:bg-[#000] z-[9999]">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src="/icons/logo.svg"
        width={200}
        height={200}
        alt="Loading"
        className="animate-pulse"
      />
    </div>
  </div>
);

export default Loading;
