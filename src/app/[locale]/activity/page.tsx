// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";

import Image from "next/image";
import activityBlog from "@/data/activity.json";
import TruncateText from "../components/TruncateText";

interface ActivityBlog {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default async function Activity() {
  const t = await getTranslations("ActivityPage");

  const MaxChar = 400;

  return (
    <div className="p-4 bg-primary text-secondary">
      <h1 className="text-xl text-center mb-4">{t("title")}</h1>

      <div className="space-y-4">
        {activityBlog.activityBlog.map((item: ActivityBlog) => (
          <div
            key={item.id}
            className="max-h-96 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-primary_light rounded-lg "
          >
            {/* Image placement based on ID */}
            {item.id % 2 === 0 ? (
              // Even ID: Image on the left
              <>
                <div className="order-1 max-h-96">
                  <Image
                    src={item.image}
                    alt={t(item.description)}
                    width={900}
                    height={500}
                    
                    className=" object-contain w-full max-h-96"
                  />
                </div>

                {/* className="p-4 space-y-4 overflow-y-auto max-h-[35vh] scrollbar-hide text-justify"> */}
                <div className="order-2 space-y-4 p-4 overflow-y-auto scrollbar-hide max-h-96">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>
                  <TruncateText text={t(item.description)} maxLength={MaxChar} />
                </div>
              </>
            ) : (
              // Odd ID: Image on the right
              <>
                <div className="order-2 md:order-1 space-y-4 p-4 overflow-y-auto scrollbar-hide max-h-96">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>
                  <TruncateText text={t(item.description)} maxLength={MaxChar} />
                </div>

                <div className="order-1 md:order-2 max-h-96">
                  <Image
                    src={item.image}
                    alt={t(item.description)}
                    width={900}
                    height={500}
                    className="object-contain w-full max-h-96"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* {activityBlog.activityBlog.map((item: ActivityBlog) => (
          <div key={item.id} className="">
            
              <Image
                src={item.image}
                alt={t(item.description)}
                width={900}
                height={500}
                className="rounded-lg object-cover"
              />
            <p className="mt-2">{t(item.title)}</p>
            <p className="text-justify whitespace-pre-line">{t(item.description)}</p>
          </div>
        ))} */}
    </div>
  );
}
