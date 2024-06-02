import { Place, PlaceComments } from "@/types/place";
import RatingReview from "../ratingReview";
import { Avatar, Button, Divider, Image } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SendIcon } from "lucide-react";
import Link from "next/link";

const Comments = ({
  placeData,
  placeComments,
}: {
  placeData: Place;
  placeComments: PlaceComments[];
}) => {
  const { theme } = useTheme();

  console.log(placeComments);

  if (!placeComments || placeComments.length === 0) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Image
          src={
            theme === "dark"
              ? "/icons/NoMessagesDark.svg"
              : "/icons/NoMessages.svg"
          }
          className="mt-6"
          alt="no image"
          width={200}
          height={200}
        />
        <p className="text-blue-500 text-lg px-4 text-center">
          Hozircha sharhlar yo&#39;q
        </p>
      </div>
    );
  }

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
                {placeData?.rating || 0} ({placeComments.length} ta sharh)
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-md font-medium pt-6 px-4">
        Sharh qoldirish
      </p>
      <div className="mt-2 bg-white dark:bg-[#1C1C1D] px-4 py-5 rounded-xl">
        <Link href={`/place/${placeData.id}/1234/add-comment`}>
          <Button
            fullWidth
            className="py-7 font-medium text-[#007AFF] text-medium bg-[#007AFF]/15"
          >
            <SendIcon className="mr-2" /> Sharh yozish
          </Button>
        </Link>
      </div>
      <p className="text-gray-500 text-md font-medium pt-6 px-4">Sharhlar</p>
      <div className="mt-2 bg-white dark:bg-[#1C1C1D] rounded-xl">
        {placeComments &&
          placeComments.map((comment, index) => (
            <div key={index} className="flex flex-col pt-4 px-4">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  <Avatar src={comment.user.profile_photo_url || ""} />
                  <p className="font-medium text-md">
                    {comment.user.full_name}
                  </p>
                </div>
                <p className="text-gray-500 text-xs pt-1">
                  {comment.created_time.slice(0, 10).replace(/-/g, ".")}
                </p>
              </div>
              <p className="text-gray-400 text-md ps-14 pb-5">{comment.text}</p>
              <Divider />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
