import React from "react";
import { User } from "@nextui-org/react";

interface UserProfileProps {
  name: string;
  rating: number;
  reviewCount: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  rating,
  reviewCount,
}) => {
  return (
    <div className="flex items-center gap-4">
      <User name={name} avatarProps={{ src: "/icons/logos.svg", size: "lg" }} />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-medium">{name}</h2>
        <div className="flex gap-2 items-center">
          <p className="text-gray-500 font-medium text-sm">
            {rating} ({reviewCount} ta sharh)
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
