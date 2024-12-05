"use client";

import { useState } from "react";
// import Image from "next/image";

interface ReviewCardProps {
  data: {
    reviews: {
      id: number;
      name: string;
      job: string;
      image: string;
      text: string;
    }[];
  };
  title: string;
}

// export default async function ReviewCard({ reviewData }: ReviewCardProps, title) {
export default function ReviewCard({ data, title }: ReviewCardProps) {
  // console.log("reviewData", data);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const currentReview = data.reviews[currentReviewIndex];

  return (
    // card container
    <div
      key={currentReview.id}
      // with picture then h-[60vh]
      className="w-2/3 h-[48vh] mx-auto rounded-lg bg-secondary p-4 my-2 relative"
    >
      <div className="relative flex items-center">
        {/* picture container */}
        <div className="relative">
          {/* Image */}
          {/* <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-orange">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full rounded-full"
                />
              </div> */}

          {/* orange accent circle */}
          {/* <div className="absolute top-0 left-0 w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  // stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div> */}
        </div>

        {/* title container */}
        <h1 className="mx-auto text-2xl">{title}</h1>
      </div>

      {/* text container */}
      <div className="p-4 space-y-4 overflow-y-auto max-h-[35vh] scrollbar-hide">
        <p>{currentReview.name}</p>
        <p>{currentReview.text}</p>
        {/* <p>{currentReview.job}</p> */}
      </div>

      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentReviewIndex(index)}
            className={`
              w-3 h-3 rounded-full ${index === currentReviewIndex ? "bg-orange" : "bg-white/50"}
            `}
          />
        ))}

      </div>
    </div>
  );
}
