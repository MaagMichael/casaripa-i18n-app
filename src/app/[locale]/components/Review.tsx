// "use client";

// import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await
// import { useState } from "react";

import reviewData from "@/data/review.json";
import ReviewCard from "./ReviewCard";

interface ReviewData {
  id: number;
  name: string;
  job?: string;
  image: string;
  text: string;
}

export default function Review() {
//   const t = useTranslations("Review");
  // const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  // const currentReview = reviewData.reviews[currentReviewIndex];
  const currentReview = reviewData.reviews[0];

  return (
    <div className="w-full h-full p-4 bg-primary">
      {/* no map required to send data to ReviewCard component */}
      <ReviewCard reviewData={currentReview} />

      {reviewData.reviews.map((reviewItem: ReviewData) => (
        <div key={reviewItem.id}>
          {/* pass the review data as objects to the ReviewCard component */}
          <ReviewCard reviewData={reviewItem} />
        </div>
      ))}
    </div>
  );
}
