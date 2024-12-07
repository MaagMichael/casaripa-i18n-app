// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";

import Image from "next/image";
import activityBlog from "@/data/activity.json";

interface ActivityBlog {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default async function Activity() {
  const t = await getTranslations("ActivityPage");

  return (
    <div className="p-4 bg-primary text-secondary">
      <h1 className="text-xl text-center">{t("title")}</h1>
      


      {activityBlog.activityBlog.map((item: ActivityBlog) => (
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
        ))}


    </div>
  );
}
