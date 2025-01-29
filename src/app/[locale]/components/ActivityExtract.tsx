// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server"; // server side with async and await
import activityImage from "@/data/activityextract.json";

import Image from "next/image";
import JumpLink from "./JumpLink";

interface ActivityImage {
  id: number;
  image: string;
  description: string;
  link: string;
}

export default async function ActivityExtract() {
  const t = await getTranslations("ActivityExtract");

  return (
    <div className="p-4 bg-primary text-secondary md:text-lg">
      <h1 className="text-xl">{t("title")}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 my-4">
        {activityImage.activityImage.map((item: ActivityImage) => (
          <div key={item.id} className="flex flex-col">
            {/* component JumpLink for link to activity page and hash id, children = Image component*/}
            <JumpLink route={item.link}>
              <Image
                src={item.image}
                alt={t(item.description)}
                width={1200}
                height={900}
                className="rounded-lg object-cover"
              />
            </JumpLink>

            <p className="mt-2">{t(item.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
