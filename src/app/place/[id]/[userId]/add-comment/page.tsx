"use client";
import React, { useState, ChangeEvent } from "react";
import RatingReview from "@/components/ratingReview";
import { Button } from "@nextui-org/button";
import { Images, Trash } from "lucide-react";
import { Image, Spinner, Textarea } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  comment: string;
}

const AddComment: React.FC<{ params: { id: string; userId: string } }> = ({
  params,
}) => {
  const { id, userId } = params;

  const [rating, setRating] = useState<number>(0);
  const [images, setImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset, setValue } = useForm<FormData>();

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.slice(0, 5 - images.length);
    setImages((prevImages) => [...prevImages, ...newImages]);
    e.target.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      // First, upload images
      const uploadedImageUrls: string[] = [];
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("place", id);
        formData.append("user", userId);

        const response = await fetch("https://admin13.uz/api/image", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Image upload failed");
        }

        const result = await response.json();
        uploadedImageUrls.push(result.url); // Assuming the API returns the URL of the uploaded image
      }

      // Then, submit the rating and comment
      const ratingResponse = await fetch(
        `https://admin13.uz/api/comments/${id}/create/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: userId,
            text: data.comment,
            star: rating,
            images: uploadedImageUrls, // Assuming the API accepts an array of image URLs
          }),
        }
      );

      if (!ratingResponse.ok) {
        if (ratingResponse.status === 500) {
          throw new Error("Duplicate comment");
        } else {
          throw new Error("Rating submission failed");
        }
      }

      const ratingResult = await ratingResponse.json();
      console.log("Rating submitted successfully:", ratingResult);

      // Reset form
      reset({ comment: "" }); // reset form comment field
      setRating(0); // reset rating
      setImages([]); // reset images
      toast.success("Komment yuborildi");
    } catch (error: any) {
      if (error.message === "Duplicate comment") {
        toast.error("Siz oldin ham komment yozgansiz");
      } else {
        console.error("There was a problem with the fetch operation:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-screen light:bg-[#EFEFF4] dark:bg-black bg-[#EFEFF4] p-4 md:max-w-md"
      >
        <p className="text-gray-500 text-md font-medium px-4">Baholash</p>
        <div className="mt-2 bg-white dark:bg-[#1C1C1D] px-4 py-5 rounded-xl">
          <div className="mb-2 flex flex-col items-center justify-center">
            <RatingReview rating={rating} setRating={setRating} size={40} />
            <p className="text-gray-500 font-medium">Baholang</p>
          </div>
        </div>
        <div className="my-8">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={onImageChange}
            className="hidden"
            id="upload-images"
          />
          <label htmlFor="upload-images">
            <Button
              fullWidth
              className="py-6 font-medium text-[#007AFF] text-medium bg-[#007AFF]/15"
              disabled={images.length >= 5}
              as="span"
            >
              <Images className="mr-2" /> Rasm qo&#39;shish
            </Button>
          </label>
          <div className="flex flex-wrap mt-4">
            {images.map((image, index) => (
              <div key={index} className="relative mr-2 mb-2">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`upload-${index}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="absolute z-50 top-1 right-1 text-white bg-red-500 rounded-full p-1"
                  onClick={() => removeImage(index)}
                >
                  <Trash size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-500 text-md font-medium px-4 pb-2">
          Sharh qoldirish
        </p>
        <Textarea
          placeholder="Shu yerga yozing"
          className="max-w-md"
          size="lg"
          disableAutosize
          {...register("comment")}
          classNames={{
            base: "max-w-xs",
            input: "resize-y min-h-[150px]",
          }}
        />
        <div className="fixed bottom-10 left-4 right-4">
          <Button
            fullWidth
            className="py-6 font-medium text-white bg-blue-500"
            type="submit"
          >
            {isLoading ? <Spinner color="white" /> : "Yuborish"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddComment;
