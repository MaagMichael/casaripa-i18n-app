// import { useTranslations } from "next-intl"; //client side
import { getTranslations } from "next-intl/server"; // server side with async and await
import { Link } from "@/i18n/routing";

import galleryImage from "@/data/gallery.json";
import Image from "next/image";

interface GalleryImage {
  id: number;
  image: string;
}

export default async function Gallery() {
  const t = await getTranslations("GalleryPage");

  return (
    <div className="bg-primary text-secondary p-4 space-y-4">
      <h1 className="text-xl text-center">{t("title")}</h1>
      <p className="text-center">{t("subtitle")}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 my-4">

        {galleryImage.galleryImage.map((item: GalleryImage) => (
          <div key={item.id} className="flex flex-col">
            <Image
              src={item.image}
              alt={item.image}
              width={900}
              height={500}
              className="rounded-lg object-cover"
            />
            
          </div>
        ))}
      </div>



    </div>
  );
}
