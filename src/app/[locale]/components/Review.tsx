// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await

import reviewData from "@/data/review.json";
// import ReviewCard from "./ReviewCard";
import ReviewCard2 from "./ReviewCard2";

interface ReviewsDataList {
    reviews: ReviewData[];
  }
interface ReviewData {
  id: number;
  name: string;
  job?: string;
  image: string;
  text: string;
}


export default async function Review() {
  const t = await getTranslations("Review");
  // const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  // const currentReview = reviewData.reviews[currentReviewIndex];
//   const currentReview = reviewData.reviews[0];

  return (
    <div className="w-full h-full p-4 bg-primary">
      {/* no map required to send data to ReviewCard component */}
      <ReviewCard2 data={reviewData}  title={t("title")} />
      
      

      
    </div>
  );
}


// {reviewData.reviews.map((reviewItem: ReviewData) => (
//     <div key={reviewItem.id}>
//       {/* pass the review data as objects to the ReviewCard component */}
//       <ReviewCard reviewData={reviewItem}  title={t("title")}/>
//       {/* <ReviewCard reviewData={reviewItem} title={t("title")} /> */}
//     </div>
//   ))}