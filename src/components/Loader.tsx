// components/Loading.tsx
import Image from "next/image";
import React from "react";

const Loading: React.FC = () => (
  <div className="flex items-center justify-center h-screen bg-[#EFEFF4] dark:bg-[#000]">
    <Image
      src="/icons/logo.svg"
      width={200}
      height={200}
      alt="Loading"
      className="animate-pulse"
    />
  </div>
);

export default Loading;
