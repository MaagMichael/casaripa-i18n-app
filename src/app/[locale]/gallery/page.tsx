"use client";
import { useTranslations } from "next-intl"; //client side
// import { getTranslations } from "next-intl/server"; // server side with async and await
// import { Link } from "@/i18n/routing";

import galleryImage from "@/data/gallery.json";
import Image from "next/image";

interface GalleryImage {
  id: number;
  image: string;
}

// export default async function Gallery() {
export default function Gallery() {
  // const t = await getTranslations("GalleryPage");
  const t = useTranslations("GalleryPage");

  // create a clinet component to render images and open them in a new tab on double click
  const handleDoubleClick = (imageUrl: string) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      <h1 className="text-xl text-center">{t("title")}</h1>
      <p className="text-center">{t("subtitle")}</p>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImage.galleryImage.map((item: GalleryImage) => (
          <div
            key={item.id}
            className="break-inside-avoid"
            onDoubleClick={() => handleDoubleClick(item.image)}
          >
            <Image
              src={item.image}
              alt={item.image}
              // maybe add resolution width height into json file and usse it here
              width={900}
              height={900}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
