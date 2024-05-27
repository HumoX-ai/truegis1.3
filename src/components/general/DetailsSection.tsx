"use client";
import React, { useState } from "react";
import { User } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import RatingReview from "@/components/ratingReview";

const DetailsSection = () => {
  const [rating, setRating] = useState(3);

  return (
    <div className="bg-white dark:bg-[#2B2B2B] py-8 px-4 rounded-xl mt-4">
      <div className="flex items-center gap-2">
        <User
          name=""
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            size: "lg",
          }}
        />
        <div>
          <h2 className="text-xl font-medium">KFC Chilonzor filiali</h2>
          <div className="flex gap-2 items-center">
            <RatingReview rating={rating} setRating={setRating} />
            <p className="text-gray-500 font-medium text-sm">
              4.0 (100 sharhlar)
            </p>
          </div>
        </div>
      </div>
      <Button
        fullWidth
        className="bg-blue-500 text-white py-6 rounded-xl mt-6 font-semibold"
      >
        Joy buyurtma qilish
      </Button>
    </div>
  );
};

export default DetailsSection;
