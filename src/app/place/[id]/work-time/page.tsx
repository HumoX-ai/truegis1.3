import React from "react";
import { fetchPlaceData } from "../page";
import { Place } from "@/types/place";
import WorkTimeItem from "@/components/work-time/WorkTimeItem";
import UserProfile from "@/components/work-time/UserProfile";

interface WorkDay {
  endTime: string;
  dayOfWeek: number;
  startTime: string;
}

interface WorkTimeProps {
  params: {
    id: string;
  };
}

const WorkTime: React.FC<WorkTimeProps> = async ({ params }) => {
  const { id } = params;

  const data: Place | null = await fetchPlaceData(id);
  console.log(data?.work_days);

  const daysOfWeek = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba",
  ];

  // Create a map for easy lookup of work days by dayOfWeek
  const workDaysMap = data?.work_days?.reduce<Record<number, WorkDay>>(
    (acc, day) => {
      acc[day.dayOfWeek] = day;
      return acc;
    },
    {}
  );

  return (
    <div className="bg-[#EFEFF4] dark:bg-[#000] px-4 md:max-w-md">
      <div className="overflow-hidden md:max-w-md relative h-screen">
        <div className="dark:bg-[#1C1C1D] bg-white py-6 px-3 rounded-xl mt-4">
          <UserProfile
            name={data?.name || ""}
            avatarSrc="/icons/logos.svg"
            rating={data?.rating || 0}
            reviewCount={120}
          />
        </div>
        <p className="text-gray-500 text-md font-semibold pt-6 px-4">
          Ishlash vaqtlari
        </p>
        <div className="mt-2 bg-white dark:bg-[#1C1C1D] p-4 rounded-xl">
          {daysOfWeek.map((dayName, index) => {
            const dayOfWeek = index + 1;
            const workDay = workDaysMap ? workDaysMap[dayOfWeek] : null;
            return (
              <WorkTimeItem
                key={index}
                dayName={dayName}
                startTime={workDay?.startTime}
                endTime={workDay?.endTime}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkTime;
