// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await

import reviewData from "@/data/review.json";
import ReviewCard from "./ReviewCard";


export default async function Review() {
  const t = await getTranslations("Review");
  
  return (
    <div className="w-full h-full p-4 bg-primary">
      <ReviewCard data={reviewData}  title={t("title")} />  
    </div>
  );
}

