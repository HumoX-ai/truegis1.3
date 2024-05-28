import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const ErrorLink: React.FC = () => {
  return (
    <a href="https://t.me/TrueGisSupport_bot">
      <div className="absolute bottom-5 left-0 right-0 z-10 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/icons/question.svg"
              alt="qulayliklar"
              width={40}
              height={40}
            />
            <div>
              <p className="font-semibold">Xatolik topildimi</p>
              <p className="text-gray-500">Biz bilan bog&#39;laning</p>
            </div>
          </div>
          <ChevronRight className="text-gray-500" />
        </div>
      </div>
    </a>
  );
};

export default ErrorLink;
