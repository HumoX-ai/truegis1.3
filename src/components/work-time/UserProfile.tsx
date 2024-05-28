"use client";
import { User } from "@nextui-org/react";
import RatingReview from "../ratingReview";

interface UserProfileProps {
  name: string | undefined;
  avatarSrc: string;
  rating: number;
  reviewCount: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatarSrc,
  rating,
  reviewCount,
}) => {
  return (
    <div className="flex items-center gap-4">
      <User name="" avatarProps={{ src: avatarSrc, size: "lg" }} />
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium">{name}</h2>
        <div className="flex gap-2 items-center">
          <RatingReview rating={rating} setRating={() => {}} />
          <p className="text-gray-500 font-medium text-sm pt-1">
            {rating} ({reviewCount} ta sharh)
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
