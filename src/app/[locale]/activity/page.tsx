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
            className="flex flex-col md:flex-row md:min-h-[40vh] justify-between bg-primary_light rounded-lg"
          >
            {/* Image placement based on ID */}
            {item.id % 2 === 0 ? (
              // Even ID: Image on the left
              <>
                <div className="relative md:w-1/2 lg:w-1/3 flex items-center justify-center order-2 md:order-1">
                  <Image
                    src={item.image}
                    alt={t(item.title)}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="md:w-1/2 lg:w-2/3 p-4 flex flex-col justify-center order-1 md:order-2 md:overflow-y-auto scrollbar-hide">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>
                  <TruncateText
                    text={t(item.description)}
                    maxLength={MaxChar}
                  />
                </div>
              </>
            ) : (
              // Odd ID: Image on the right
              <>
                <div className="md:w-1/2 lg:w-2/3 p-4 flex flex-col justify-center md:order-1 ">
                  <h1 className="text-xl font-bold">{t(item.title)}</h1>
                  <TruncateText
                    text={t(item.description)}
                    maxLength={MaxChar}
                  />
                </div>

                <div className="relative md:w-1/2 lg:w-1/3 flex items-center justify-center md:order-2">
                  <Image
                    src={item.image}
                    alt={t(item.title)}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
