import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await
import Image from "next/image";

import reviewData from "@/data/review.json";
import ReviewCard from "./ReviewCard";

interface ReviewData {
  id: number;
  name: string;
  job?: string;
  image?: string;
  text: string;
}

export default function Review() {
  const t = useTranslations("Review");

  return (
    <div className="w-full h-full p-4 bg-primary">
      {reviewData.reviews.map((reviewItem: ReviewData) => (
        <div key={reviewItem.id}>
          {/* pass the review data as objects to the ReviewCard component */}
          <ReviewCard reviewData={reviewItem}/>
        </div>
      ))}
    </div>
  );
}
