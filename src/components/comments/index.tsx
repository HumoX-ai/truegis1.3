import { Place } from "@/types/place";
import RatingReview from "../ratingReview";

const Comments = ({ placeData }: { placeData: Place }) => {
  return (
    <div>
      <p className="text-gray-500 text-md font-medium pt-6 px-4">Reyting</p>
      <div className="mt-2 bg-white dark:bg-[#1C1C1D] px-4 py-5 rounded-xl">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-blue-500 text-5xl font-semibold">
              {placeData?.rating || "Reyting mavjud emas"}
            </h1>
            <div>
              <RatingReview
                rating={placeData?.rating || 0}
                setRating={() => {}}
              />
              <p className="text-gray-500 font-medium text-sm pt-1">
                {placeData?.rating || 0} (120 ta sharh)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
