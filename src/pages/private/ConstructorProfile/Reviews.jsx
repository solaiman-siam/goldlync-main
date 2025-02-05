import { Button } from "@/components/shadcn/ui/button";
import RatingStar from "@/components/shared/RatingStar";
import { useState } from "react";

const Reviews = () => {
  const [rating] = useState(4.4);

  return (
    <>
      <div className="mb-6">
        <p className="text-3xl font-semibold">Reviews</p>
      </div>
      <div className="">
        <div className="heading mb-5 flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">Review score</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xl">{rating}</p>
          <RatingStar rate={rating} className="size-4 md:size-6" />
        </div>
        <Button type="button" className="mt-6 w-[230px] text-lg">
          Request for a review
        </Button>
      </div>
      <div className="mt-20">
        <div className="heading mb-5 flex items-center justify-between text-xl font-semibold">
          <p className="text-xl">Reviews(49)</p>
        </div>
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <figure className="h-10 w-10 overflow-hidden rounded-full">
              <img src="https://i.ibb.co.com/B5dPzkb5/Oval.png" alt="" />
            </figure>
            <div className="">
              <p>Leslie Alexander</p>
              <RatingStar rate={rating} className="size-4" />
            </div>
          </div>
          <p className="mt-4">
            OMG! I cannot believe that I have got a brand new landing page after
            getting @Omega…
          </p>
        </div>
        <Button type="button" className="mt-6 w-[230px] text-lg">
          View more
        </Button>
      </div>
    </>
  );
};

export default Reviews;
