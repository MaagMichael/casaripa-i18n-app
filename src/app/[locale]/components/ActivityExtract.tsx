// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";
import Image from "next/image";

interface ImageItem {
  id: number;
  image: string;
  description: string;
}
interface ImageItemProps {
  images: ImageItem[];
}

const images: ImageItemProps = {
  images: [
    {
      id: 1,
      image: "/assets/beach.webp",
      description: "categories1",
    },
    {
      id: 2,
      image: "/assets/visit.webp",
      description: "categories2",
    },
    {
      id: 3,
      image: "/assets/nature2.webp",
      description: "categories3",
    },
    {
      id: 4,
      image: "/assets/winery.webp",
      description: "categories4",
    },
    {
      id: 5,
      image: "/assets/nearby.webp",
      description: "categories5",
    },
    {
      id: 6,
      image: "/assets/shops.webp",
      description: "categories6",
    },
  ],
};
export default async function ActivityExtract() {
  const t = await getTranslations("ActivityExtract");

  return (
    <div className="p-4 bg-primary text-secondary">
      <h1 className="text-xl">{t("title")}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-4">
        {images.images.map((item: ImageItem) => (
          <div key={item.id} className="flex flex-col">
            <Image
              src={item.image}
              alt={t(item.description)}
              width={900}
              height={500}
              className="rounded-lg object-cover"
            />
            <p className="mt-2">{t(item.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
