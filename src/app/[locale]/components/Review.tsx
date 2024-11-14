import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await

import reviewData from "@/data/review.json";

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
      {/* card container */}
      <div className="w-2/3 h-[60vh] mx-auto rounded-lg bg-secondary">
        {/* image container */}
        <div className="w-8 h-8 bg-orange flex items-center justify-center ring-2 ring-red-600">
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
        </div>

        {/* title container */}
        <h1 className="">{t("title")}</h1>

        {/* text container */}

        {reviewData.reviews.map((reviewItem: ReviewData) => (
          <div key={reviewItem.id}>
            <p>{reviewItem.name}</p>
          </div>
        )) || null}
      </div>
    </div>
  );
}
