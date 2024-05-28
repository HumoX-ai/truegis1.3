import React from "react";

interface WorkTimeItemProps {
  dayName: string;
  startTime?: string;
  endTime?: string;
}

const WorkTimeItem: React.FC<WorkTimeItemProps> = ({
  dayName,
  startTime,
  endTime,
}) => {
  return (
    <div>
      <div className="mt-4 mb-2 flex items-center justify-between">
        <p className="text-gray-400">{dayName}</p>
        <p className={`text-${startTime && endTime ? "green-500" : "red-500"}`}>
          {startTime && endTime ? `${startTime} - ${endTime}` : "Yopiq"}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default WorkTimeItem;
